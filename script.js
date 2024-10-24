document.querySelectorAll('nav button').forEach((btn) => {
  btn.addEventListener('click', function () {
    // Update the section title based on the clicked button's data-title attribute
    const newTitle = this.getAttribute('data-title');
    document.querySelector('.content-h1').textContent = newTitle;

    // Remove active class from all buttons and add default style
    document.querySelectorAll('nav button').forEach((button) => {
      button.classList.remove('nav-btn-active');
      button.classList.add('nav-btn');
    });

    // Add the active class to the clicked button
    this.classList.add('nav-btn-active');
    this.classList.remove('nav-btn');

    // Hide all content sections
    document.querySelectorAll('.page-content').forEach((section) => {
      section.classList.add('hidden');
    });

    // Show the content section that corresponds to the clicked button
    const target = this.getAttribute('data-target');
    document.getElementById(target).classList.remove('hidden');
  });
});
