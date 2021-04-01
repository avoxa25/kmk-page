class MobileMenu {
    readonly menuElement: HTMLElement;
    readonly openMenuElement: HTMLButtonElement;

    constructor() {
        this.menuElement = document.querySelector(`#menuContainer`) as HTMLElement;
        this.openMenuElement = document.querySelector(`#menuOpen`) as HTMLButtonElement;

        this.openMenuElement.addEventListener('click', () => this.ToggleActive());
    }

    private ToggleActive(): void {
        const isActive = this.openMenuElement.classList.contains(`active`);

        isActive ? this.openMenuElement.classList.remove(`active`): this.openMenuElement.classList.add(`active`);
    }
}

(window as any).mobileMenu = new MobileMenu();