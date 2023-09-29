type HTMLStructure<T extends string> = Array<[T, string]>;

export type Level<T extends string> = {
  selector: string;
  codePreview: string;
  sourceCode?: HTMLStructure<T>;
}

export const levels: Level<string>[] = [
  {
    selector: "dog",
    codePreview: `<div class="lawn">
                    <dog id='e1'></dog>
                    <dog id='e2'></dog>
                    <dog id='e3'></dog>
                  </div>`,
    sourceCode: [
      ['top', '<div class="lawn">'],
      ['e1', `  <dog></dog>`],
      ['e2', `  <dog></dog>`],
      ['e3', `  <dog></dog>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: "pillow cat",
    codePreview: `<div class="room">
                    <cat id = "e1"></cat>
                    <pillow id = "e2">
                      <cat id = "e3"></cat>
                    </pillow>
                  </div>`,
    sourceCode: [
      ['top', '<div class="room">'],
      ['e1', `  <cat></cat>`],
      ['e2', `  <pillow>`],
      ['e3', `    <cat></cat>`],
      ['e2', `  </pillow>`],
      ['bottom', '</div>'],
    ]
  },
  {
    selector: "lilypad.yellow frog.green",
    codePreview: `<div class="swamp">
                    <frog id="e1" class="green"></frog>
                    <lilypad id="e2" class="green">
                      <frog id="e3" class="green"></frog>
                    </lilypad>
                    <lilypad id="e4" class="green">
                      <frog id="e5" class="yellow"></frog>
                    </lilypad>
                    <lilypad id="e6" class="yellow">
                      <frog id="e7" class="green target"></frog>
                    </lilypad>
                  </div>`,
    sourceCode: [
      ['top', '<div class="swamp">'],
      ['e1', `  <frog class="green"></frog>`],
      ['e2', `  <lilypad class="green">`],
      ['e3', `    <frog class="green"></frog>`],
      ['e2', `  </lilypad>`],
      ['e4', `  <lilypad class="green">`],
      ['e5', `    <frog class="yellow"></frog>`],
      ['e4', `  </lilypad>`],
      ['e6', `  <lilypad class="yellow">`],
      ['e7', `    <frog class="green"></frog>`],
      ['e6', `  </lilypad>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: "lilypad.red frog",
    codePreview: `<div class="swamp">
                    <lilypad id="e1" class="green">
                      <lilypad id="e2" class="yellow">
                        <frog id="e3" class="red"></frog>
                      </lilypad>
                    </lilypad>
                    <lilypad id="e4" class="green">
                      <lilypad id="e5" class="yellow">
                        <lilypad id="e6" class="red">
                          <frog id="e7" class="green target"></frog>
                        </lilypad>
                      </lilypad>
                    </lilypad>
                    <lilypad id="e8" class="green">
                      <frog  id="e9" class="green"></frog>
                    </lilypad>
                  </div>`,
    sourceCode: [
      ['top', '<div class="swamp">'],
      ['e1', `  <lilypad class="green">`],
      ['e2', `    <lilypad class="yellow">`],
      ['e3', `      <frog class="red"></frog>`],
      ['e2', `    </lilypad>`],
      ['e1', `  </lilypad>`],
      ['e4', `  <lilypad class="green">`],
      ['e5', `    <lilypad class="yellow">`],
      ['e6', `      <lilypad class="red">`],
      ['e7', `        <frog class="green"></frog>`],
      ['e6', `      </lilypad>`],
      ['e5', `    </lilypad>`],
      ['e4', `  </lilypad>`],
      ['e8', `  <lilypad class="green">`],
      ['e9', `    <frog class="green"></frog>`],
      ['e8', `  </lilypadid>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: "car:nth-child(1), car:nth-child(2), car:nth-child(3)",
    codePreview: `<div class="road">
                    <car id="e1" class="target"></car>
                    <car id="e2" class="target"></car>
                    <car id="e3" class="target"></car>
                    <car id="e4"></car>
                  </div>`,
    sourceCode: [
      ['top', '<div class="road">'],
      ['e1', `  <car></car>`],
      ['e2', `  <car></car>`],
      ['e3', `  <car></car>`],
      ['e4', `  <car></car>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: ".road line car:not(:first-child), car:first-child",
    codePreview: `<div class="road">
                    <line id="e1">
                      <car id="e2" class="target"></car>
                      <car id="e3" class="target"></car>
                      <car id="e4" class="target"></car>
                    </line>
                    <line id="e5">
                      <car id="e6"></car>
                      <car id="e7" class="target"></car>
                      <car id="e8" class="target"></car>
                    </line>
                  </div>`,
    sourceCode: [
      ['top', '<div class="road">'],
      ['e1', `  <line>`],
      ['e2', `    <car></car>`],
      ['e3', `    <car></car>`],
      ['e4', `    <car></car>`],
      ['e1', `  <line>`],
      ['e5', `  <line>`],
      ['e6', `    <car></car>`],
      ['e7', `    <car></car>`],
      ['e8', `    <car></car>`],
      ['e5', `  <line>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: 'div[lang="js"]',
    codePreview: `<div class="white-board">
                    <div id="e1" lang="php"></div>
                    <div id="e2" class="target" lang="js"></div>
                    <div id="e3" lang="c#"></div>
                    <div id="e4" lang="java"></div>
                  </div>`,
    sourceCode: [
      ['top', '<div class="white-board">'],
      ['e1', `  <div lang="php"></div>`],
      ['e2', `  <div lang="js"></div>`],
      ['e3', `  <div lang="c#"></div>`],
      ['e4', `  <div lang="java"></div>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: 'div[framework]',
    codePreview: `<div class="white-board">
                    <div id="e1" lang="ts"></div>
                    <div class="target" id="e2" framework="react"></div>
                    <div id="e3" lang="js"></div>
                    <div class="target" id="e4" framework="angular"></div>
                  </div>`,
    sourceCode: [
      ['top', '<div class="white-board">'],
      ['e1', `  <div lang="ts"></div>`],
      ['e2', `  <div framework="react"></div>`],
      ['e3', `  <div lang="js"></div>`],
      ['e4', `  <div framework="angular"></div>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: '.pond div>div>div>div>div>div',
    codePreview: `<div class="pond">
                    <div id="e1">
                      <div id="e2">
                        <div id="e3">
                          <div id="e4">
                            <div id="e5">
                              <div class="target" id="e6"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`,
    sourceCode: [
      ['top', '<div class="pond">'],
      ['e1', `  <div>`],
      ['e2', `    <div>`],
      ['e3', `      <div>`],
      ['e4', `        <div>`],
      ['e5', `          <div>`],
      ['e6', `            <div></div>`],
      ['e5', `          <div>`],
      ['e4', `        <div>`],
      ['e3', `      <div>`],
      ['e2', `    <div>`],
      ['e1', `  <div>`],
      ['bottom', '<div>'],
    ]
  },
  {
    selector: '.watermelon:nth-child(odd)',
    codePreview: `<div class="garden">
                    <div id="e1" class="watermelon target"></div>
                    <div id="e2" class="watermelon"></div>
                    <div id="e3" class="watermelon target"></div>
                    <div id="e4" class="watermelon"></div>
                    <div id="e5" class="watermelon target"></div>
                    <div id="e6" class="watermelon"></div>
                  </div>`,
    sourceCode: [
      ['top', '<div class="garden">'],
      ['e1', `  <div class="watermelon"></div>`],
      ['e2', `  <div class="watermelon"></div>`],
      ['e3', `  <div class="watermelon"></div>`],
      ['e4', `  <div class="watermelon"></div>`],
      ['e5', `  <div class="watermelon"></div>`],
      ['e6', `  <div class="watermelon"></div>`],
      ['bottom', '<div>'],
    ]
  },
];
