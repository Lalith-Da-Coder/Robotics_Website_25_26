const navbarHTML = `
<header>
  <div class="logo">
    <img src="logo-placeholder.png" alt="Logo">
  </div>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="robot.html">Robot</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
  <div class="hamburger-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="hamburger">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="robot.html">Robot</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>
</header>
`;

document.addEventListener('DOMContentLoaded', function() {
  const navBarSection = document.getElementById('NavBarSection');
  if (navBarSection) {
    navBarSection.innerHTML = navbarHTML;

    // Use a variable to reference the newly injected HTML
    const newNavbar = navBarSection.querySelector('header');
    
    // Select the elements from within the newNavbar
    const hamburgerIcon = newNavbar.querySelector('.hamburger-icon');
    const hamburgerMenu = newNavbar.querySelector('.hamburger');

    if (hamburgerIcon && hamburgerMenu) {
      hamburgerIcon.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
      });
    }
  }
});