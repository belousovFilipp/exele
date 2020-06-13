import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resize} from "@/components/table/table.resize";

export class Table extends ExcelComponent {
    static className = 'excel__table excel-table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown'],
        });
    }

    toHTML() {
        return createTable()
    }

    onMousedown(event) {
        resize(event)
    }
}
