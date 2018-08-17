import {render} from 'lit-html/lit-html.js';

export function renderToHead(style) {
	let fragment = document.createDocumentFragment();
    render(style, fragment);
    document.head.appendChild(fragment);
}
