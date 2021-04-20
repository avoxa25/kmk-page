class AjaxMail {
	private readonly elements: Array<HTMLFormElement>;

	constructor() {
		this.elements = [
			document.querySelector(`#serviceCallback`) as HTMLFormElement,
			document.querySelector(`#serviceCallbackPopup`) as HTMLFormElement,
			document.querySelector(`#offerPopup`) as HTMLFormElement,
		]

		this.elements.forEach((el) => el.addEventListener(`submit`, (e) => this.SendForm(e, el)));
	}

	private async SendForm(event: Event, form: HTMLFormElement): Promise<void> {
		event.preventDefault();

		const data = new FormData(form);

		const response = await fetch(`mail.php`, {
			method: `POST`,
			body: data
		});

		if(response.ok) {
			const result = await response.json();
			console.log(result.message);
			(window as any).popup.HidePopup();
			form.reset();
		} else {
			alert(`Ошибка сервера`);
		}
	}
}

(window as any).ajaxMail = new AjaxMail();