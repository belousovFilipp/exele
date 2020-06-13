export function resize(event) {
    const resizable = event.target.closest('[data-resize="resizable"]')
    const parentCords = resizable.getBoundingClientRect()
    const cols = document.querySelectorAll(
        `[data-char="${resizable.dataset.char}"]`
    )

    if (event.target.dataset.resize === 'col') {
        const heightTable = document.querySelector('.excel-table')
            .clientHeight + 'px'
        event.target.style.bottom = '-' + heightTable
        event.target.style.opacity = 1
        document.onmousemove = e => {
            const widthCol = parentCords.width +
                +e.pageX - parentCords.right + 'px'

            cols.forEach((el) => el.style.width = widthCol)
            console.log('onmousemove')
        }
    }

    if (event.target.dataset.resize === 'row') {
        document.onmousemove = e => {
            const delta = e.pageY - parentCords.bottom
            resizable.style.height = parentCords.height + delta + 'px'
        }
    }
    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        event.target.removeAttribute('style')
    }
}