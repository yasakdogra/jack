if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('day-switch').addEventListener('click', () => {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
    });

    document.getElementById('night-switch').addEventListener('click', () => {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    });

    document.getElementById('open-menu').addEventListener('click', () => {
        document.getElementById('menu').classList.remove('hidden');
        document.getElementById('open-menu').classList.add('hidden');
        document.getElementById('close-menu').classList.remove('hidden');
    });

    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('menu').classList.add('hidden');
        document.getElementById('close-menu').classList.add('hidden');
        document.getElementById('open-menu').classList.remove('hidden');
    });
});