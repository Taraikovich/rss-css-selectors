import { levels, Level } from "../../levels";
import { BaseBlock } from "../vIew";
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core';
import htmlLanguage from 'highlight.js/lib/languages/xml';
import './hljs.scss'

hljs.registerLanguage('html', htmlLanguage);

export class CodeBlock extends BaseBlock {
    markup: HTMLElement

    constructor(curentLevel: number, private _levels: Level<string>[] = levels) {
        super();
        this.block.classList.add('frame_code');
        this.markup = document.createElement('pre');
        this.addHeader();
        this.addLineNumbers();
        this.addMarkup(curentLevel);
    }

    private addHeader(): void {
        const header = document.createElement('div');
        header.className = 'frame_code__header';
        header.textContent = 'HTML Viewer';
        const file = document.createElement('div');
        file.className = 'frame_code__header__file-name';
        file.textContent = 'index.html';
        header.append(file);
        this.block.append(header);
    }

    private addLineNumbers(): void {
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'frame_code__line-numbers';
        for (let i = 1; i <= 17; i++) {
            lineNumbers.innerHTML += `<p>${i}</p>`;
        }
        this.block.append(lineNumbers);
    }

    addMarkup(level: number): void {
        this.markup.innerHTML = '';
        this.markup.className = 'frame_code__markup';
        const sourceCode = this._levels[level].sourceCode;
        sourceCode?.forEach(item => {
            const code = document.createElement('code');
            code.className = 'html';
            code.id = item[0];
            code.textContent = item[1];
            hljs.highlightElement(code);
            this.markup.append(code);
        })
        this.block.append(this.markup);
    }


}