class Offer {
    private offerType: number | null;

    readonly startElements: NodeListOf<HTMLButtonElement>;
    readonly baseElements: NodeListOf<HTMLButtonElement>;
    readonly standardElements: NodeListOf<HTMLButtonElement>;
    readonly vipElements: NodeListOf<HTMLButtonElement>;

    readonly inputElement: HTMLInputElement;

    constructor() {
        this.offerType = null;

        const elementsArray = [
        this.startElements = document.querySelectorAll(`.start`),
        this.baseElements = document.querySelectorAll(`.base`),
        this.standardElements = document.querySelectorAll(`.standard`),
        this.vipElements = document.querySelectorAll(`.vip`)
        ] as Array<NodeListOf<HTMLButtonElement>>;

        this.inputElement = document.querySelector(`#inputOfferType`) as HTMLInputElement;

        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].forEach((e) => e.addEventListener(`click`, ()=> this.SetType(e)));
        }
    }

    private SetType(element: HTMLButtonElement): void {
        switch (element.dataset.type) {
            case (`start`): {
                this.offerType = 0;
                this.inputElement.value = `Старт`;
                break;
            }
            case (`base`): {
                this.offerType = 1;
                this.inputElement.value = `Базовый`;
                break;
            }
            case (`standard`): {
                this.offerType = 2;
                this.inputElement.value = `Стандартный`;
                break;
            }
            case (`vip`):
                this.offerType = 3;
                this.inputElement.value = `VIP`;
        }
    }

    public GetType(): number | null {
        return this.offerType
    }
}

(window as any).offer = new Offer();