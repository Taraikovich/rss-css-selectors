export function burgerMenu(): void {
    const burgerIcon = document.createElement('div');
    burgerIcon.className = 'burger-menu';
    burgerIcon.textContent = '|||';
    document.body.append(burgerIcon);

    burgerIcon.addEventListener('click', () => {
        document.querySelector('.frame_levels')?.classList.toggle('frame_levels-hide');
        burgerIcon.classList.toggle('burger-menu-open');
    })
}