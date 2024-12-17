document.getElementById('toggleNav').addEventListener('click', function () {
    const navContents = document.getElementById('navContents');
    if (navContents.style.display === 'block') {
      navContents.style.display = 'none';
      this.textContent = 'Show Navbar Contents';
    } else {
      navContents.style.display = 'block';
      this.textContent = 'Hide Navbar Contents';
    }
  });