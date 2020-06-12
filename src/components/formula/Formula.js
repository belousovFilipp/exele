import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = 'excel__formula excel-formula'
    name = 'Formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click'],
        });
    }

    toHTML() {
        return (`
             <div class="excel-formula__info">fx</div>
                <div class="excel-formula__input" 
                     contenteditable="true" 
                     spellcheck="false"
                >
            </div>
        `)
    }

    onInput(event) {
        console.log('on input formula', event.target.textContent)
    }

    onClick(event) {
        console.log('on click formula', event.target.textContent)
    }
}
