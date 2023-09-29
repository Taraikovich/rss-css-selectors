import { BaseBlock } from "../vIew";
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/theme/tomorrow-night-bright.css'

export class EditorBlock extends BaseBlock {

    div: HTMLElement = document.createElement('div')

    editorValue: string

    editor: CodeMirror.Editor = CodeMirror(this.div, {
        mode: 'css',
        theme: 'default',
        lineWrapping: true,
    });

    constructor() {
        super();
        this.block.classList.add('frame_editor');
        this.editorValue = '';
        this.addHeader();
        this.addLineNumbers();
        this.addEditor();
    }

    private addHeader(): void {
        const header = document.createElement('div');
        header.className = 'frame_editor__header';
        header.textContent = 'CSS Editor';
        const file = document.createElement('div');
        file.className = 'frame_editor__header__file-name';
        file.textContent = 'style.css';
        header.append(file);
        this.block.append(header);
    }

    private addLineNumbers(): void {
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'frame_editor__line-numbers';
        for (let i = 1; i <= 17; i++) {
            lineNumbers.innerHTML += `<p>${i}</p>`;
        }
        this.block.append(lineNumbers);
    }

    private addEditor(): void {
        this.block.appendChild(this.div);

        const placeholder = document.createElement('div');
        placeholder.classList.add('frame_editor__placeholder');
        placeholder.innerText = '/* enter the appropriate css selector on the first line */';

        this.div.appendChild(placeholder);

        this.editor.on('change', () => {
            this.editorValue = this.editor.getValue();
            if (this.editor.getValue().trim() !== '') {
                placeholder.style.display = 'none';
            } else {
                placeholder.style.display = 'block';
            }
        });

        this.editor.on('keydown', (cm, event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
            }
        });

        this.editor.setCursor(0, 0);

        this.editor.getWrapperElement().style.fontSize = '18px';
        this.editor.getWrapperElement().style.background = '#fcffc4';
        this.editor.getWrapperElement().style.height = `60px`;
        this.editor.getWrapperElement().style.maxWidth = `370px`;
        this.editor.getScrollerElement().style.overflow = 'hidden';
    }
}