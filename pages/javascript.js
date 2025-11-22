// Add this to your main JavaScript file or in a script tag before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.body.setAttribute('data-page', currentPage.split('.')[0]);
});