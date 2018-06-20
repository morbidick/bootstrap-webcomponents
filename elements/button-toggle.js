import BsButton from './button.js';

export default class BsButtonToggle extends BsButton {
	connectedCallback() {
		super.connectedCallback();

		if (!this.hasAttribute('aria-pressed')) {
			this.setAttribute('aria-pressed', 'false');
		}

		this.addEventListener('keydown', this._onKeyDown);
		this.addEventListener('click', this._onClick);
	}

	set active(value) {
		const old = this.active;
		super.active = value;
		value = this.active;
		if (old !== value) {
			this.setAttribute('aria-pressed', value);
			this.dispatchEvent(new CustomEvent('active-changed', {
				detail: {
					value,
				},
				bubbles: false,
				composed: true,
			}));
		}
	}
	get active() {
		return super.active;
	}


	_onKeyDown(event) {
		if (event.altKey)
			return;

		switch (event.code) {
			case "Enter":
			case "Space":
				event.preventDefault();
				this.toggle();
				break;
			default:
				return;
		}
	}

	_onClick(event) {
		this.toggle();
	}

	toggle() {
		if (this.disabled)
			return;
		this.active = !this.active;
	}
}

customElements.define('bs-button-toggle', BsButtonToggle);
