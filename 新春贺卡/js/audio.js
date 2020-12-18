/*
* 监听音乐是否自动播放
* */

let audioInfo = {
    autoplay:false,
    testAutoPlay(){
       return new Promise(resolve => {
           let audio = document.createElement('audio');
           audio.src = 'https://mp3.jiuku.9ku.com/hot/2005/02-25/64489.mp3';
           document.body.appendChild(audio);
           let autoplay = true;
           audio.play().then(()=>{
               // 支持自动播放
               autoplay = true;
           }).catch(err=>{
               //不支持自动播放
               autoplay = false;
           }).finally(()=>{
               console.log(autoplay);
               audio.remove();
               resolve("该浏览器不支持自动播放")
           })
       });
    },
    init(){
        this.testAutoPlay().then(autoplay=>{
            console.log(autoplay);
        })
    }
}
audioInfo.init();
export default  audioInfo