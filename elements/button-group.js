import { LitElement, html } from '@polymer/lit-element/lit-element.js';

export default class BsButtonGroup extends LitElement {
	render() {
		return html`
			<style>
				:host {
					display: inline-flex;
					vertical-align: middle;
				}

				::slotted(bs-button:not(:last-child)) {
					--bs-border-top-right-radius: 0;
					--bs-border-bottom-right-radius: 0;
				}

				::slotted(bs-button:not(:first-child)) {
					--bs-border-top-left-radius: 0;
					--bs-border-bottom-left-radius: 0;
				}
			</style>
			<slot></slot>
		`;
	}
}

customElements.define('bs-button-group', BsButtonGroup);
