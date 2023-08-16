import Plugin from "src/plugin-system/plugin.class";

export default class ButtonProcessMessage extends Plugin {
	static options = {
		buttonInitialTextContent: `In den Warenkorb`,
		buttonInitialColor: `#0b539b`,
		buttonProcessTextContent: `Wird in den Warenkorb gelegt`,
		buttonProcessColor: `#595959`,
	};

	updateButtonTextContent(button) {
		button.textContent = this.options.buttonProcessTextContent;
	}

	updateButtonColor(button) {
		button.style.backgroundColor = this.options.buttonProcessColor;
	}

	restoreButtonAppearance(button) {
		button.textContent = this.options.buttonInitialTextContent;
		button.style.backgroundColor = this.options.buttonInitialColor;
	}

	init() {
		const allBuyButtons = [...document.querySelectorAll(".btn-buy")];

		allBuyButtons.forEach((button) => {
			button.textContent = this.options.buttonInitialTextContent;

			button.addEventListener("click", () => {
				this.updateButtonTextContent(button);
				this.updateButtonColor(button);
				setTimeout(() => this.restoreButtonAppearance(button), 1000);
			});
		});
	}
}
