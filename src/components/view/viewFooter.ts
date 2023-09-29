import { BaseBlock } from "./vIew";

export class Footer extends BaseBlock {
    constructor() {
        super();
        this.block = document.createElement('footer');
        this.block.className = 'footer';
        this.addMyGithub();
        this.addCopiright();
        this.addRssLogo();
    }

    private addMyGithub() {
        const link = document.createElement('a');
        link.href = 'https://github.com/Taraikovich';
        link.textContent = 'taraikovich';
        this.block.append(link);
    }

    private addCopiright() {
        const copiright = document.createElement('p')
        copiright.textContent = '(c)2023';
        this.block.append(copiright);
    }

    private addRssLogo() {
        const logo = document.createElement('a');
        logo.href = 'https://rs.school/js/';
        const logoImg = new Image();
        logoImg.src = require('../../images/rs_school_js.svg');
        logo.append(logoImg);
        this.block.append(logo);
    }
}