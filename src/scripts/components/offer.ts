class Offer {
    private offerType: number | null;

    readonly startElements: NodeListOf<HTMLButtonElement>;
    readonly baseElements: NodeListOf<HTMLButtonElement>;
    readonly standardElements: NodeListOf<HTMLButtonElement>;
    readonly vipElements: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.offerType = null;

        const elementsArray = [
        this.startElements = document.querySelectorAll(`.start`),
        this.baseElements = document.querySelectorAll(`.base`),
        this.standardElements = document.querySelectorAll(`.standard`),
        this.vipElements = document.querySelectorAll(`.vip`)
        ] as Array<NodeListOf<HTMLButtonElement>>;

        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].forEach((e) => e.addEventListener(`click`, ()=> this.SetType(e)));
        }
    }

    private SetType(element: HTMLButtonElement): void {
        switch (element.dataset.type) {
            case (`start`): {
                this.offerType = 0;
                break;
            }
            case (`base`): {
                this.offerType = 1;
                break;
            }
            case (`standard`): {
                this.offerType = 2;
                break;
            }
            case (`vip`):
                this.offerType = 3;
        }
    }

    public GetType(): number | null {
        return this.offerType
    }
}

(window as any).offer = new Offer();