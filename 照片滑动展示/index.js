// 定义body,css选择body部分
const body = document.querySelector('body');

// 定义lis css选择li这一整体部分
const lis = document.querySelectorAll("li");

window.addEventListener('scroll', () => {
    onScroll()
}, false)

onScroll(false);

function onScroll() {
    // scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容
    // innerHeight 浏览器窗口的视口（viewport）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度
    const s = (body.scrollHeight - window.innerHeight) / 15;
    lis.forEach((li, index) => {
        //this.scrollY  垂直方向已滚动的像素值
        const ang = ((this.scrollY - (s * (index - 1))) * 360 / (s * 2)) - 180;
        // setProperty 设置一个新的 CSS 属性，同时也可以修改 CSS 声明块中已存在的属性
        li.style.setProperty('--ang',
            Math.max(-180, Math.min(180, ang)) + 'deg'
        )
    })
}