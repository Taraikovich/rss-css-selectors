function highLightPreview(): void {
    const ids = document.querySelectorAll(".frame_preview__demo [id]");
    const tag = document.createElement('p');
    tag.className = 'showTag';
    ids.forEach((id) => {
        if (id instanceof HTMLElement) {
            id.addEventListener('mouseover', (event) => {
                event.stopPropagation();
                const elems = document.querySelectorAll(`#${id.id}`);
                if (elems.length > 1) {
                    elems.forEach((elem, index) => {
                        if (elem instanceof HTMLElement) {
                            if (index === 0) {
                                const frame = document.querySelector('.frame_preview');
                                if (frame && tag) {
                                    elem.appendChild(tag);
                                  }
                            }
                            if (index > 0) {
                                if (tag.textContent) tag.textContent += elem.textContent
                                else tag.textContent = elem.textContent;
                            }
                            elem.style.backgroundColor = '#ffeb3b85';
                        }
                    });
                }
            });
            id.addEventListener('mouseout', () => {
                const elems = document.querySelectorAll(`#${id.id}`);
                if (elems.length > 1) {
                    elems.forEach((elem, index) => {
                        if (elem instanceof HTMLElement) {
                            tag.textContent = '';
                            if (index === 0 && elem.contains(tag)) elem.removeChild(tag);
                            elem.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                        }
                    });
                }
            });
        }
    });
}

function highLightCode(): void {
    const ids = document.querySelectorAll(".frame_code [id]");
    const tag = document.createElement('p');
    tag.className = 'showTag';
    ids.forEach((id) => {
        if (id instanceof HTMLElement) {
            id.addEventListener('mouseover', () => {
                const elems = document.querySelectorAll(`#${id.id}`);
                if (elems.length > 1) {
                    elems.forEach((elem, index) => {
                        if (elem instanceof HTMLElement) {
                            if (index === 0) elem.appendChild(tag);
                            if (index > 0) {
                                if (tag.textContent) tag.textContent += elem.textContent
                                else tag.textContent = elem.textContent;
                            }
                            elem.style.backgroundColor = '#ffeb3b85';
                        }
                    });
                }
            });
            id.addEventListener('mouseout', () => {
                const elems = document.querySelectorAll(`#${id.id}`);
                if (elems.length > 1) {
                    elems.forEach((elem, index) => {
                        if (elem instanceof HTMLElement) {
                            tag.textContent = '';
                            if (index === 0 && elem.contains(tag)) elem.removeChild(tag);
                            elem.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                        }
                    });
                }
            });
        }
    });
}

export function highlightOnCursor(): void {
    highLightPreview();
    highLightCode();
}