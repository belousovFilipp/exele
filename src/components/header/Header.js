import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header excel-header'

    toHTML() {
        return (`
            <input type="text" 
                   class="excel-header__title" 
                   value="Новая таблица"
            >
            <div>
                <div class="excel-header__button">
                    <span class="material-icons">exit_to_app</span>
                </div>
                <div class="excel-header__button">
                    <span class="material-icons">delete_outline</span>
                </div>
            </div>
        `)
    }
}
