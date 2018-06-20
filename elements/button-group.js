/*.btn-group, .btn-group-vertical {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
}

btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}*/
import {LitElement, html} from '@polymer/lit-element';

class BsButtonGroup extends LitElement {
    static get properties() {
        return {
            disabled: Boolean,
            active: Boolean,
        }
    }

    _render() {
        return html`
            <style>
                :host(:not([disabled])) {
                    display: inline-flex;
                    vertical-align: middle;
                }
                ::slotted(bs-button:not(:last-child)) {
                    border-top-right-radius: 0;
	                border-bottom-right-radius: 0;
                }
                ::slotted(bs-button:not(:first-child)) {
                    border-top-left-radius: 0;
	                border-bottom-left-radius: 0;
                }
            </style>
            <slot></slot>
        `;
    }
}

customElements.define('bs-button-group', BsButtonGroup);
