class Popup {
    readonly wrapperElement: HTMLElement;
    readonly openElements: NodeListOf<HTMLButtonElement>;
    readonly closeElement: HTMLButtonElement;

    readonly popupCallback: HTMLElement;
    readonly popupOffer: HTMLElement;

    constructor() {
        this.wrapperElement = document.querySelector(`#wrapperPopup`) as HTMLElement;
        this.openElements = document.querySelectorAll(`.open-popup`) as NodeListOf<HTMLButtonElement>;
        this.closeElement = document.querySelector(`#closePopup`) as HTMLButtonElement;

        this.popupCallback = document.querySelector(`#popupCallback`) as HTMLElement;
        this.popupOffer = document.querySelector(`#popupOffer`) as HTMLElement;

        this.openElements.forEach((oe) => oe.addEventListener(`click`, () => this.ShowPopup(oe)));
        this.closeElement.addEventListener(`click`, () => this.HidePopup());
    }

    public ShowPopup(oe: HTMLButtonElement): void {
        this.wrapperElement.hidden = false;
        switch (oe.dataset.popup) {
            case `popupCallback`: {
                this.popupCallback.hidden = false;
                break;
            }
            case `popupOffer`:
                this.popupOffer.hidden = false;
        }
    }

    public HidePopup(): void {
        this.wrapperElement.hidden = true;
        this.popupCallback.hidden = true;
        this.popupOffer.hidden = true;
    }
}

(window as any).popup = new Popup();