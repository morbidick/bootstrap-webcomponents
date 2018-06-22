import {LitElement, html} from '@polymer/lit-element';
import colors from '../styles/colors.js';

// ugly hack to use the styles on :host or an element directly
export function buttonStyle(host = (selector) => selector ? `:host(${selector})` : `:host`) { return html`
<style>
	${host()} {
		display: inline-block;
	}
	${host('[hidden]')} {
		display: hidden;
	}
	${host(':not([disabled])')} {
		cursor: pointer;
	}
	${host(':focus')} {
		outline: none;
	}
	${host()} {
		padding: .375em .75em;
		border: 1px solid transparent;
		border-top-left-radius: var(--bs-border-top-left-radius, .25em);
		border-top-right-radius:	var(--bs-border-top-right-radius, .25em);
		border-bottom-left-radius: var(--bs-border-bottom-left-radius, .25em);
		border-bottom-right-radius: var(--bs-border-bottom-right-radius, .25em);

		font-size: 1rem;
		line-height: 1.5;
		text-align: center;
		user-select: none;
		vertical-align: middle;
		white-space: nowrap;

		transition:
			color .15s ease-in-out,
			background-color .15s ease-in-out,
			border-color .15s ease-in-out,
			box-shadow .15s ease-in-out,
			filter .15s ease-in-out;
	}
	${host(':hover:not([disabled])')} {
		filter: brightness(0.85);
	}
	${host('[active]:not([disabled])')} {
		filter: brightness(0.75);
	}
	${host('[disabled]')} {
		opacity: 0.65;
	}
	${host('[theme~="small"]')} {
		font-size: .875rem;
	}
	${host('[theme~="large"]')} {
		font-size: 1.25rem;
	}
	/* color variants */
	${colors.reduce((style, {selector, color, contrast, focusring}) => {
		return style + `
			${host(`${selector}:not([theme~="outline"])`)} {
				background-color: ${color};
				color: ${contrast};
			}
			${host(`${selector}:focus:not([disabled])`)} {
				box-shadow: 0 0 0 .2rem ${focusring};
			}
			${host(`${selector}[theme~="outline"]`)} {
				color: ${color};
				border-color: ${color};
			}
			${host(`${selector}[theme~="outline"]:hover:not([disabled])`)}, ${host(`${selector}[theme~="outline"][active]`)} {
				background-color: ${color};
				color: ${contrast};
			}
			${host(`${selector}[theme~="outline"]:hover:not([active])`)} {
				filter: none;
			}`
	}, "")}
</style>`
}

console.log(buttonStyle())
export default class BsButton extends LitElement {
	static get properties() {
		return {
			active: Boolean,
			disabled: Boolean,
			theme: String,
		}
	}

	constructor() {
		super();
		this.theme = "secondary";
	}

	_render() {
		return html`
			${buttonStyle()}
			<slot></slot>
		`;
	}

	connectedCallback() {
		super.connectedCallback();

		if (!this.hasAttribute('role')) {
			this.setAttribute('role', 'button');
		}
		if (!this.hasAttribute('tabindex')) {
			this.setAttribute('tabindex', 0);
		}
	}

	set active(value) {
		const isActive = Boolean(value);
		if (isActive) {
			this.setAttribute('active', '');
		} else {
			this.removeAttribute('active');
		}
		this.setAttribute('aria-pressed', isActive);
	}
	get active() {
		return this.hasAttribute('active');
	}

	set disabled(value) {
		const isDisabled = Boolean(value);
		if (isDisabled) {
			this.setAttribute('disabled', '');
		} else {
			this.removeAttribute('disabled');
		}

		this.setAttribute('aria-disabled', isDisabled);

		if (isDisabled) {
			this.removeAttribute('tabindex');
			// If the focus is currently on this element, unfocus it by
			// calling the `HTMLElement.blur()` method.
			this.blur();
		} else {
			this.setAttribute('tabindex', '0');
		}
	}
	get disabled() {
		return this.hasAttribute('disabled');
	}

	set theme(value) {
		this.setAttribute('theme', value);
	}
	get theme() {
		return this.hasAttribute('theme');
	}

}

customElements.define('bs-button', BsButton);
