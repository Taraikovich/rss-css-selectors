import { BaseBlock } from "../vIew";
import { levels, Level } from "../../levels";


export class PreviewBlock extends BaseBlock {
    constructor(curentLevel: number, private levelList: Level<string>[] = levels) {
        super();
        this.block.classList.add('frame_preview');
        this.addDemo(curentLevel);
    }

    private addDemo(curentLevel: number): void {
        const div: HTMLElement = document.createElement('div');
        div.className = 'frame_preview__demo';
        div.innerHTML = this.levelList[curentLevel].codePreview;
        this.block.append(div);
    }

    changeH2(level: number): void {
        this.block.children[0].innerHTML = `${this.levelList[level].codePreview}`;
    }


}