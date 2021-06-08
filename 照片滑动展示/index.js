// 定义body,css选择body部分
const body = document.querySelector('body');

// 定义lis css选择li这一整体部分
const lis = document.querySelectorAll("li");

window.addEventListener('scroll', () => {
    onScroll()
}, false)

onScroll(false);

function onScroll() {
    const s = (body.scrollHeight - window.innerHeight) / 15;

    lis.forEach((li, index) => {
        const ang = ((this.scrollY - (s * (index - 1))) * 360 / (s * 2)) - 180;

        li.style.setProperty('--ang',
            Math.max(-180, Math.min(180, ang)) + 'deg'
        )
    })
}