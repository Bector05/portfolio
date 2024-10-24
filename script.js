document.querySelectorAll('nav button').forEach((btn) => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('nav button').forEach((button) => {
      button.classList.remove('nav-btn-active');
      button.classList.add('nav-btn');
    });

    this.classList.add('nav-btn-active');
    this.classList.remove('nav-btn');

    document.querySelectorAll('.page-content').forEach((section) => {
      section.classList.add('hidden');
    });

    const target = this.getAttribute('data-target');
    document.getElementById(target).classList.remove('hidden');
  });
});
