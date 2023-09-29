import { levels } from "./levels";
import { getLevel, setCompleteLevel, getCompleteLevel, setLevel, resetCompleteLevel, setHelpedLevel } from "./state";
import { CodeBlock } from "./view/codeBlock/viewCode";
import { EditorBlock } from "./view/editorBlock/viewEditor";
import { LevelsBlock } from "./view/levelsBlock/viewLevels";
import { PreviewBlock } from "./view/previewBlock/viewVisual";
import { Footer } from "./view/viewFooter";
import { Header } from "./view/viewHeader";
import { highlightOnCursor } from "./highlightOnFocus";
import { isValidSelector } from "./selectorValidation";

export class App {
    constructor(
        private header: Header = new Header(),
        private preview: PreviewBlock = new PreviewBlock(getLevel()),
        private editor: EditorBlock = new EditorBlock(),
        private code: CodeBlock = new CodeBlock(getLevel()),
        private list: LevelsBlock = new LevelsBlock(),
        private footer: Footer = new Footer(),
    ) {
        this.render();
        this.selectLevel();
        this.answerCheck();
        this.reseteState();
        this.help();
        highlightOnCursor();
    }

    private render(): void {
        this.header.render();
        this.preview.render();
        this.editor.render();
        this.code.render();
        this.list.render();
        this.footer.render();
    }

    private selectLevel(): void {
        this.list.ul?.childNodes.forEach(item => {
            if (item.nodeType === Node.ELEMENT_NODE) {
                const element = item as HTMLElement;
                const value = element.getAttribute('value');
                if (value) {
                    item.addEventListener('click', () => {
                        setLevel(Number(value));
                        this.changeLevel(getLevel());
                    });
                }
            }
        })

    }

    private changeLevel(level: number): void {
        this.preview.changeH2(level);
        this.code.addMarkup(level);
        this.list.highlightCurrentLevel();
        highlightOnCursor();
    }

    private answerCheck(): void {
        const enterBtn = document.createElement('button');
        enterBtn.textContent = 'ENTER';
        enterBtn.className = 'enter-btn';
        this.editor.block.append(enterBtn);
        enterBtn.addEventListener('click', () => {
            if (this.compareNodeLists()) {
                this.rightAnswer();
                setTimeout(() => {
                    if (getCompleteLevel().length === levels.length) {
                        this.preview.block.children[0].innerHTML = '<p style = "font-size: 40px">You win!</p>';
                    }
                }, 1000)
            } else {
                this.wrongAnswer();
            }
        })
        this.editor.div.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.key === 'NumEnter') {
                if (this.compareNodeLists()) {
                    this.rightAnswer();
                } else {
                    this.wrongAnswer();
                }
            }
        })
    }

    private compareNodeLists(): boolean {
        const selector1 = this.editor.editor.getValue();
        const selector2 = levels[getLevel()].selector;

        if (!isValidSelector(selector1) || !isValidSelector(selector2)) {
            return false;
        }

        const nodeList1 = document.querySelectorAll(this.editor.editor.getValue());
        const nodeList2 = document.querySelectorAll(levels[getLevel()].selector);

        if (nodeList1.length !== nodeList2.length) {
            return false;
        }

        for (let i = 0; i < nodeList1.length; i++) {
            const element1 = nodeList1[i];
            const element2 = nodeList2[i];

            if (element1 !== element2) {
                return false;
            }
        }

        return true;
    }

    private rightAnswer(): void {
        const rightSelector = document.querySelectorAll(`${levels[getLevel()].selector}`);
        rightSelector.forEach(item => {
            if (item instanceof HTMLElement) {
                item.classList.add('right');
            }
        })
        setTimeout(() => {
            if (getLevel() + 1 >= levels.length) {
                setCompleteLevel(getLevel());
                setLevel(0);
                this.changeLevel(getLevel());
                this.list.checkCompleteLevel();
                this.list.checkHelpedLevel();
                this.editor.editor.setValue('');
            } else {
                setCompleteLevel(getLevel());
                setLevel(getLevel() + 1);
                this.changeLevel(getLevel());
                this.list.checkCompleteLevel();
                this.list.checkHelpedLevel();
                this.editor.editor.setValue('');
            }
        }, 1000)
    }

    private wrongAnswer(): void {
        this.editor.block.classList.add('wrong');
        setTimeout(() => {
            this.editor.block.classList.remove('wrong');
        }, 500)
    }

    private reseteState(): void {
        this.list.resetBtn.addEventListener('click', () => {
            setLevel(0);
            resetCompleteLevel();
            this.preview.changeH2(0);
            this.list.checkCompleteLevel();
            this.list.checkHelpedLevel();

            this.code.addMarkup(0);
            highlightOnCursor();
        });
    }

    private help(): void {
        this.list.helpBtn.addEventListener('click', () => {
            setHelpedLevel(getLevel());
            const characters = levels[getLevel()].selector;
            let index = 0;

            const addNextCharacter = () => {
                if (index < characters.length) {
                    const character = characters[index];
                    this.editor.editor.setValue(this.editor.editor.getValue() + character);
                    index++;
                    setTimeout(addNextCharacter, 100);
                }
            }

            addNextCharacter();

        });
    }
}

