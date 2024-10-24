document.querySelectorAll('nav button').forEach((btn) => {
btn.addEventListener('click', function () {
    document.querySelectorAll('nav button').forEach((btn) => {
    btn.classList.remove('text-yellow-400', 'font-bold');
    btn.classList.add('text-zinc-400', 'font-semibold');
    });
    this.classList.remove('text-zinc-400', 'font-semibold');
    this.classList.add('text-yellow-400', 'font-bold');
});
});

