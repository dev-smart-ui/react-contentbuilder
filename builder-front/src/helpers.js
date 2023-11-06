
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

export const removeWithEmptyRow = (btn) => {
	const parentRow = btn.closest('.row')
	const hasContentEditableElements = parentRow.querySelector('[contenteditable]');
	if (!hasContentEditableElements) parentRow.remove();
}

const buttonClasses = [
	'transition-all',
	'inline-block',
	'whitespace-nowrap',
	'cursor-pointer',
	'no-underline',
	'border-2',
	'border-solid',
	'ml-1',
	'mr-1',
	'mb-3',
	'rounded',
	'tracking-75',
	'uppercase',
	'px-6',
	'py-2',
	'size-12',
	'hover:border-transparent',
	'font-semibold',
	'bg-gray-200',
	'border-transparent',
	'hover:bg-gray-300',
	'text-gray-800',
	'leading-relaxed',
	'text-center'
]

export const addToggleBtnToRow = (html, componentName) => {
	const parser = new DOMParser()
	const parsedHtml = parser.parseFromString(html, 'text/html')
	const rowElements = parsedHtml.querySelectorAll('.row')

	rowElements.forEach(row => {
		const customComponent = row.querySelector('[data-component]')
		if(!customComponent) return
		row.classList.add('customRow')

		const toggleBtn = row.querySelector('[data-toggle="collapseRow"]')
		if (toggleBtn) return

		const btnName = customComponent.getAttribute('data-component');

		if (btnName === componentName) {
			console.log(componentName)
			row.classList.add(...rowClasses)
		}

		const button = document.createElement('button');
		button.setAttribute('data-toggle', 'collapseRow');
		button.setAttribute('data-click', 'false')
		button.classList.add(...buttonClasses);
		button.textContent = btnName;
		row.insertBefore(button, row.firstChild);
	})

	return parsedHtml.documentElement.innerHTML
}

const rowClasses = [
	'showComponent',
	'row-active',
	'row-outline'
]

export const collapseRow = (btn) => {

	const customComponent = btn.closest('.row').querySelector('[data-component]')
	if(!customComponent) return

	const isActive = btn.closest('.row').classList.contains('showComponent')

	btn.closest('.row').classList[isActive ? 'remove' : 'add'](...rowClasses)
	document.body.classList[isActive ? 'remove' : 'add']('content-edit')
	btn.closest('.is-builder').classList[isActive ? 'remove' : 'add']('builder-active')
}
