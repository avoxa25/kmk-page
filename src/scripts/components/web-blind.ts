class WebBlind {
    private readonly elementArray: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.elementArray = document.querySelectorAll(`button.owl-dot`);

        this.elementArray.forEach((e) => this.AddAriaLabel(e));
    }

    private AddAriaLabel(element: Element): void {
        element.setAttribute(`aria-label`, `Кнопка переключения слайдера`);
    }
}

(window as any).webBlind = new WebBlind();