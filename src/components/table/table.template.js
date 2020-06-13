const CODES = {
    A: 65,
    Z: 90,
}

function createCell(_, index) {
    return `
      <div class="excel-table__cell"
           data-char="${toChar(null, index)}"
      ></div>
    `
}

function createCol(content, index) {
    return `<div class="excel-table__column" 
                 data-resize="resizable" 
                 data-char="${toChar(null, index)}">
                ${content}
                <div class="excel-table__resize-col" data-resize="col"></div>
            </div>
    `
}

function createRow(content, index) {
    const resize = index > 1 ?
        `<div class="excel-table__resize-row" data-resize="row"></div>` : ``

    index = index ? index : ''
    return `
        <div class="excel-table__row" data-resize="resizable">
            <div class="excel-table__info">
                ${index + resize}
            </div>
            <div class="excel-table__data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')
    rows.push(createRow(cols))

    for (let i = 0; i < rowsCount; i++) {
        const cell = new Array(colsCount)
            .fill('1')
            .map(createCell)
            .join('')
        rows.push(createRow(cell, i + 1))
    }

    return rows.join('');
}
