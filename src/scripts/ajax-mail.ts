class AjaxMail {
	private readonly elements: Array<HTMLFormElement>;

	constructor() {
		this.elements = [
			document.querySelector(`#serviceCallback`) as HTMLFormElement,
			document.querySelector(`#serviceCallbackPopup`) as HTMLFormElement,
			document.querySelector(`#offerPopup`) as HTMLFormElement,
		]

		this.elements.forEach((el) => el.addEventListener(`submit`, () => this.SendForm(el)));
	}

	private async SendForm(form: HTMLFormElement): Promise<void> {
		form.preventDefault();

		const data = new FormData(form);

		const response = await fetch(`mail.php`, {
			method: `POST`,
			body: data
		});

		if(response.ok) {
			const result = await response.json();
			console.log(result.message);
		} else {
			console.log(`Ошибка`);
		}
	}
}

(window as any).ajaxMail = new AjaxMail();