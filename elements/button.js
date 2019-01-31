import { LitElement, html, css } from 'lit-element';
import { LitNotify } from '@morbidick/lit-element-notify';
import colors from '../styles/colors.js';

export default class BsButton extends LitNotify(LitElement) {
	static get properties() {
		return {
			// set button state to active
			active: {
				type: Boolean,
				reflect: true,
				notify: true,
			},
			// disable the button
			disabled: {
				type: Boolean,
				reflect: true,
			},
			// set to an url to get an anchor element with button styling
			href: {
				type: String,
				reflect: true,
			},
			theme: {
				type: String,
				reflect: true,
			},
			// set to true to act as a toggle button
			toggle: {
				type: Boolean,
				reflect: true,
			},
			// the button type (default: button)
			type: {
				type: String,
				reflect: true,
			},
		}
	}

	constructor() {
		super();
		this.active = false;
		this.disabled = false;
		this.theme = 'secondary';
		this.type = 'button';
	}

	static get styles() {
		return [
			css`
				:host(:not([hidden])) {
					display: inline-block;
				}
				:host > *:not([disabled]) {
					cursor: pointer;
				}
				:host > *:focus {
					outline: none;
				}
				a, button {
					box-sizing: border-box;
					display: inline-block;
					padding: .375em .75em;
					border: 1px solid transparent;
					border-top-left-radius: var(--bs-border-top-left-radius, .25em);
					border-top-right-radius: var(--bs-border-top-right-radius, .25em);
					border-bottom-left-radius: var(--bs-border-bottom-left-radius, .25em);
					border-bottom-right-radius: var(--bs-border-bottom-right-radius, .25em);

					font-size: 1rem;
					line-height: 1.5;
					text-align: center;
					user-select: none;
					vertical-align: middle;
					white-space: nowrap;
					text-decoration: none;

					background-color: transparent;
					transition:
						color .15s ease-in-out,
						background-color .15s ease-in-out,
						border-color .15s ease-in-out,
						box-shadow .15s ease-in-out,
						filter .15s ease-in-out;
				}
				/* reset firefox button focus style */
				button::-moz-focus-inner {
					border: 0;
				}
				:host > [active]:not([disabled]) {
					filter: brightness(0.85);
				}
				:host > [disabled] {
					opacity: 0.65;
				}
				:host([theme~="small"]) > * {
					font-size: .875rem;
				}
				:host([theme~="large"]) > * {
					font-size: 1.25rem;
				}
				*:focus:not([disabled]) {
					box-shadow: 0 0 0 .2rem var(--bs-button-focusring-color);
				}
				:host(:not([theme~="outline"])) > * {
					background-color: var(--bs-button-background-color);
					color: var(--bs-button-color);
				}
				:host(:not([theme~="outline"])) > *:hover:not([disabled]) {
					background-color: var(--bs-button-hover-background-color);
				}
				:host([theme~="outline"]) > * {
					color: var(--bs-button-background-color);
					border-color: var(--bs-button-background-color);
				}
				:host([theme~="outline"]) > *:hover:not([disabled]), :host([theme~="outline"]) > [active] {
					background-color: var(--bs-button-background-color);
					color: var(--bs-button-color);
				}
				:host([theme~="outline"]) > *:hover:not([active]) {
					filter: none;
				}
			`,
			...colors.map(({selector, color, contrast, focusring, hoverbg}) => css`
				:host(${selector}) {
					--bs-button-background-color: ${color};
					--bs-button-color: ${contrast};
					--bs-button-focusring-color: ${focusring};
					--bs-button-hover-background-color: ${hoverbg};
				}`
			)
		]
	}

	render() {
		return html`
			${this.href ? html`<a id="button" href=${this.href} ?disabled=${this.disabled} ?active=${this.active}><slot></slot></a>`:
			  !this.toggle ? html`<button id="button" type=${this.type} ?disabled=${this.disabled} ?active=${this.active}><slot></slot></button>`:
			  html`<button
				id="button"
				type="button"
				aria-pressed=${this.active}
				?disabled=${this.disabled}
				?active=${this.active}
				@click=${this._toggleClickHandler}
				@keydown=${this._toggleKeypressHandler}>
				<slot></slot>
			  </button>
			`}
		`;
	}

	/**
	 * Toggle the button state
	 */
	_toggle() {
		if (this.disabled)
			return;
		this.active = !this.active;
	}

	_toggleClickHandler(event) {
		event.preventDefault();
		this._toggle();
	}

	_toggleKeypressHandler(event) {
		if (event.altKey)
			return;

		switch (event.code) {
			case "Enter":
			case "Space":
				event.preventDefault();
				this._toggle();
				break;
			default:
				return;
		}
	}

	/**
	 * Pass external clicks to the internal button
	 */
	click() {
		this.$button.click();
	}

	/**
	 * Pass external focuses to the internal button
	 */
	focus() {
		this.$button.focus();
	}

	/**
	 * Expose internal button
	 */
	get $button() {
		return this.shadowRoot.querySelector('#button');
	}
}

customElements.define('bs-button', BsButton);
