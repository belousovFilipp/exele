const CODES = {
    A: 65,
    Z: 90,
}

function createCell() {
    return `
      <div class="excel-table__cell"></div>
    `
}

function createCol(content) {
    return `<div class="excel-table__column">${content}</div>`
}

function createRow(content, index) {
    return `
        <div class="excel-table__row">
            <div class="excel-table__info">${index || ''}</div>
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

    const cell = new Array(colsCount)
        .fill('1')
        .map(createCell)
        .join('')

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cell, i + 1))
    }

    return rows.join('');
}
