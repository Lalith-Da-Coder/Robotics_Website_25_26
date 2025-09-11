const footerHTML = `

<footer>
  <div class="footer_links">
    <div class="footer_sitemap">
      <h1>Sitemap</h1>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contacts</a></li>
        <li><a href="robot.html">Robot</a></li>
      </ul>
    </div>
    <div class="footer_bestlink">
      <h1>BEST Robotics</h1>
      <ul>
        <li><a href="https://bestrobotics.org/our-history/">History</a></li>
        <li><a href="https://bestrobotics.org/our-board/">Leadership</a></li>
        <li><a href="https://registry.bestrobotics.org/events">Events</a></li>
        <li><a href="https://bestrobotics.org/sponsors/">Sponsors</a></li>
      </ul>
    </div>
  </div>

  <div class="footer_bottom">
    <div class="footer_heading">
      <h1>LHS</h1>
      <h1>ROBOTICS</h1>
    </div>

    <div class="footer_btmrow">
      <div class="footer_social">
        <ul>
          <li><a href="https://www.instagram.com/lhsrobotics/?hl=en"><h1>Instagram</h1></a></li>
        </ul>
      </div>
      <div class="footer_copyright">
        <h1>&copy; LHS ROBOTICS. All rights reserved</h1>
      </div>
    </div>
  </div>
</footer>

`;

document.addEventListener('DOMContentLoaded', function() {
    const footerSection = document.getElementById('FooterSection');
    if (footerSection) {
      footerSection.innerHTML = footerHTML;
    }
  });


// Example to use as reference

//   const navbarHTML = `
// <header>
//   <div class="logo">
//     <img src="logo-placeholder.png" alt="Logo">
//   </div>
//   <nav>
//     <ul>
//       <li><a href="index.html">Home</a></li>
//       <li><a href="about.html">About</a></li>
//       <li><a href="robot.html">Robot</a></li>
//       <li><a href="contact.html">Contact</a></li>
//     </ul>
//   </nav>
//   <div class="hamburger-icon">
//     <span></span>
//     <span></span>
//     <span></span>
//   </div>
//   <div class="hamburger">
//     <ul>
//       <li><a href="index.html">Home</a></li>
//       <li><a href="about.html">About</a></li>
//       <li><a href="robot.html">Robot</a></li>
//       <li><a href="contact.html">Contact</a></li>
//     </ul>
//   </div>
// </header>
// `;

// document.addEventListener('DOMContentLoaded', function() {
//   const navBarSection = document.getElementById('NavBarSection');
//   if (navBarSection) {
//     navBarSection.innerHTML = navbarHTML;

//     // Use a variable to reference the newly injected HTML
//     const newNavbar = navBarSection.querySelector('header');
    
//     // Select the elements from within the newNavbar
//     const hamburgerIcon = newNavbar.querySelector('.hamburger-icon');
//     const hamburgerMenu = newNavbar.querySelector('.hamburger');

//     if (hamburgerIcon && hamburgerMenu) {
//       hamburgerIcon.addEventListener('click', () => {
//         hamburgerMenu.classList.toggle('active');
//       });
//     }
//   }
// });