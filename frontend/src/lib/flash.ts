export function flash(element: HTMLElement) {
	requestAnimationFrame(() => {
		element.style.transition = 'none';
		element.style.color = 'rgba(47, 108, 156,1)';
		element.style.backgroundColor = 'rgba(47, 108, 156,0.2)';

		setTimeout(() => {
			element.style.transition = 'color 1s, background 1s';
			element.style.color = '';
			element.style.backgroundColor = '';
		});
	});
}