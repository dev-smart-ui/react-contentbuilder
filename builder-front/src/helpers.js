
export const isLocalhost = (hostname) => {
	if (hostname === 'localhost') return true
}

export const addBuilderElem = (btn) => {

	const previousElement = btn.previousElementSibling;
	if (previousElement) {
		const clonedElement = previousElement.cloneNode(true);
		btn.parentNode.insertBefore(clonedElement, btn);
	}
}

export const removeBuilderElem = (btn) => {
	const parent = btn.closest('[data-component]')
	if (parent.children.length > 2) {
		const element = btn.closest('[data-repeater]')
		element.remove();
	}
}