import { BaseBlock } from "../vIew";
import { levels, Level } from "../../levels";
import { getCompleteLevel, getHelpedLevels, getLevel } from "../../state";


export class LevelsBlock extends BaseBlock {

    ul: HTMLElement = document.createElement('ul');

    resetBtn: HTMLButtonElement = document.createElement('button');

    helpBtn: HTMLButtonElement = document.createElement('button');

    constructor(
        private _levels: Level<string>[] = levels
    ) {
        super();
        this.block.classList.add('frame_levels');
        this.addHeader();
        this.selectLevel();
        this.addResetBtn();
        this.addHelpBtn();
    }

    private addHeader(): void {
        const header = document.createElement('p');
        header.className = 'levelsList__header'
        header.textContent = 'Levels:'
        this.block.append(header);
    }

    private selectLevel(): void {
        this.ul.className = 'levelsList';
        this._levels.forEach((_, index) => {
            const li: HTMLElement = document.createElement('li');
            li.setAttribute('value', `${index}`);
            li.className = `levelsList levelsList__item`;
            li.textContent = `${index + 1}`;
            this.ul.append(li);
        });
        this.checkCompleteLevel();
        this.checkHelpedLevel();
        this.block.append(this.ul);
    }

    checkCompleteLevel(): void {
        const completeLevels: number[] = getCompleteLevel();
        this.ul.childNodes.forEach((li, index) => {
            if (li instanceof HTMLElement) {
                if (completeLevels.includes(index)) {
                    li.classList.add('done');
                } else {
                    li.classList.remove('done');
                }
                this.highlightCurrentLevel();
            }
        });
    }

    checkHelpedLevel(): void {
        const helpedLevels: number[] = getHelpedLevels();
        this.ul.childNodes.forEach((li, index) => {
            if (li instanceof HTMLElement) {
                if (helpedLevels.includes(index)) {
                    li.classList.add('used-help');
                } else {
                    li.classList.remove('used-help');
                }
            }
        });
    }

    highlightCurrentLevel(): void {
        this.ul.childNodes.forEach((li, index) => {
            if (li instanceof HTMLElement) {
                if (getLevel() === index) {
                    li.classList.add('current');
                } else {
                    li.classList.remove('current');
                }
            }
        });
    }

    private addResetBtn(): void {
        this.resetBtn.className = 'levelsList__resetBtn';
        this.resetBtn.textContent = 'RESET';
        this.block.append(this.resetBtn);
    }

    private addHelpBtn(): void {
        this.helpBtn.className = 'levelsList__helpBtn';
        this.helpBtn.textContent = 'HELP';
        this.block.append(this.helpBtn);
    }
}

