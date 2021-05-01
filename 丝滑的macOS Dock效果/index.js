document.querySelectorAll('.dock li').forEach(li => {
    li.addEventListener('click', e => {
        e.currentTarget.classList.add('loading')
    })

    li.addEventListener('mousemove', e => {
        let item = e.target
        // getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
        let itemRect = item.getBoundingClientRect()
        // abs() 方法可返回数的绝对值
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width

        let prev = item.previousElementSibling || null
        let next = item.nextElementSibling || null

        let scale = 0.6

        resetScale()

        if (prev) {

            prev.style.setProperty('--s', 1 + scale * Math.abs(offset - 1))
        }

        //setProperty() 方法用于设置一个新的 CSS 属性，同时也可以修改 CSS 声明块中已存在的属性
        item.style.setProperty('--scale', 1 + scale)

        if (next) {
            next.style.setProperty('--scale', 1 + scale * offset)
        }
    })
})

document.querySelector('.dock').addEventListener('mouseleave', e => {
    resetScale()
})

function resetScale() {
    document.querySelectorAll('.dock li').forEach(li => {
        li.style.setProperty('--scale', 1)
    })
}