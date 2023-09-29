import { BaseBlock } from "./vIew";

export class Header extends BaseBlock {
    constructor() {
        super();
        this.block = document.createElement('header');
        this.block.className = 'header';
        this.block.innerHTML = '<h1>RSS-CSS-Selectors</h1>';
    }
}