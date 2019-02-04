import { LitElement, html, css } from 'lit-element';
import colors, { primary } from '../styles/colors.js';

export default class BsProgress extends LitElement {
	static get properties() {
		return {
			theme: {
				type: String,
				reflect: true,
			},
			value: {
				type: Number,
				reflect: true,
			},
			maxValue: {
				type: Number,
				reflect: true,
			},
		}
	}

	constructor() {
		super();
		this.value = 0;
		this.maxValue = 100;
	}

	static get styles() {
		return [
			css`
				:host {
					display: flex;
					height: 1rem;
					overflow: hidden;
					font-size: .75rem;
					background-color: var(--bs-progress-default-color, #e9ecef);
					border-radius: .25rem;
				}
				:host([hidden]) {
					display: hidden;
				}
				#bar {
					display: flex;
					flex-direction: column;
					justify-content: center;
					color: var(--bs-progress-color, ${primary.contrast});
					text-align: center;
					white-space: nowrap;
					background-color: var(--bs-progress-background-color, ${primary.color});
					transition: width .6s ease;
				}
				:host([theme~="striped"]) #bar {
					background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    				background-size: 1rem 1rem;
				}
				@keyframes stripes {
					from { background-position: 1rem 0; }
					to { background-position: 0 0; }
				}
				:host([theme~="animated"]) #bar {
					animation: stripes 1s linear infinite;
				}
				@media (prefers-reduced-motion: reduce) {
					:host([theme~="animated"]) #bar {
						animation: none;
					}
				}
			`,
			...colors.map(({selector, color, contrast}) => css`
				:host(${selector}) {
					--bs-progress-background-color: ${color};
					--bs-progress-color: ${contrast};
				}`
			)
		];
	};

	get $bar() {
		return this.shadowRoot.querySelector('#bar');
	}

	updated(changed) {
		if (changed.has('value') || changed.has('maxValue')) {
			this.$bar.style.width = `${this.value/this.maxValue*100}%`;
		}
	}

	render() {
		return html`
			<div
				role="progressbar"
				aria-valuenow=${this.value}
				aria-valuemin="0"
				aria-valuemax=${this.maxValue}
				id="bar">
				<slot></slot>
			</div>
		`;}
}

customElements.define('bs-progress', BsProgress);
