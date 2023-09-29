export class BaseBlock {
    block: HTMLElement;

    constructor() {
        this.block = document.createElement('div');
        this.block.className = 'frame';
    }

    render(): void {
        document.body.append(this.block);
    }
}