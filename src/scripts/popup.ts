class Popup {
    readonly wrapperElement: HTMLElement;
    readonly openElements: NodeListOf<HTMLButtonElement>;
    readonly closeElement: HTMLButtonElement;

    constructor() {
        this.wrapperElement = document.querySelector(`#wrapperPopup`) as HTMLElement;
        this.openElements = document.querySelectorAll(`.open-popup`) as NodeListOf<HTMLButtonElement>;
        this.closeElement = document.querySelector(`#closePopup`) as HTMLButtonElement;

        this.openElements.forEach((oe) => oe.addEventListener(`click`, () => this.ShowPopup()));
        this.closeElement.addEventListener(`click`, () => this.HidePopup());
    }

    public ShowPopup(): void {
        this.wrapperElement.hidden = false;
    }

    public HidePopup(): void {
        this.wrapperElement.hidden = true;
    }
}

(window as any).popup = new Popup();