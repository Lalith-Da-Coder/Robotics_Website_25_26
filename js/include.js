const cache = new Map()


function splitURL(raw) {
    const u = new URL(raw, location.href);
    const src = u.origin + u.pathname + u.search;
    const frag = u.hash ? u.hash.slice(1) : null;
    return { src, frag }
}


async function loadDoc(src) {
    let doc = cache.get(src);
    if (!doc) {
        const res = await fetch(src, { headers: { 'X-Requested-With': 'fetch-include' } });
        if (!res.ok) throw new Error(`Include statement failed ${res.status} ${abs}`)
        const html = await res.text()
        doc = new DOMParser().parseFromString(html, 'text/html')
        cache.set(src, doc)
    }
    return doc
}

async function insert(el, url) {
    const { src, frag } = splitURL(url)
    const doc = await loadDoc(src);
    const node = frag ? doc.getElementById(frag) : doc.body;
    if (!node) throw new Error(`Fragment not found: ${frag} in ${src}`);
    el.innerHTML = node.innerHTML;
}

async function includeAll(root = document) {
    const nodes = Array.from(root.querySelectorAll('[data-include]'));
    await Promise.all(nodes.map(el => insert(el, el.getAttribute('data-include'))))
    enhanceAfterInclude()
}

function ensureTitleSuffix() {
    const SUFFIX = ' - LHS Robotics'
    const base = (document.title || '').trim()
    document.title = base + SUFFIX
}

function enhanceAfterInclude() {
    const here = location.pathname.replace(/\/index\.html$/, '/' )
    document.querySelectorAll("#NavBarSection a[href]").forEach(a => {
        const path = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/index\.html$/, '/')
        if (path === here) a.setAttribute('aria-current', 'page')
    })
    
    const container = document.getElementById('NavBarSection')
    if (!container) return;
    const icon = container.querySelector('.hamburger-icon')
    const menu = container.querySelector('.hamburger')
    if (icon && menu) {
        const toggle = () => {
            const active = menu.classList.toggle('active')
            icon.setAttribute('aria-expanded', active ? 'true': 'false')
        }
        icon.addEventListener('click', toggle)
        icon.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key == ' ') { e.preventDefault(); toggle(); }
        })
    }
    ensureTitleSuffix()
}

document.addEventListener('DOMContentLoaded', () => { includeAll(); });