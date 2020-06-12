!function(){
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed);
        $button.addClass('active')
            .siblings('.active').removeClass('active') //兄弟元素的active删除
        switch(speed){
            case 'slow':
                duration = 80
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 20
                break
        }
    })
    
    function writeCode(prefix, code, fn){
        let container =document.querySelector('#code')
        let styleTag =document.querySelector('#styleTag')
        let n =0
        setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length) {
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }             
        },duration)
    }

    let code = `
/* 
 * 首先，准备皮卡丘的皮
 */
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}
.wrapper{
    width: 100%;
    height:165px; 
    position: relative;
}
.wrapper > :not(:last-child){
    z-index: 1;
}
/* 
 * 接下来，画皮卡丘的鼻子
 */
.nose{
    width:0;
    height: 0;
    border:11px solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}
/* 
 * 接下来，画皮卡丘的两只眼睛
 */
.eye{
    width: 56px;
    height: 56px;
    background: #2e2e2e;
    position: absolute;
    border:2px solid black;
    border-radius: 50%;
}
/* 
 * 眼珠子
 */
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: 2px;
    border: 2px  solid black ;
}
/* 
 * 左眼在左边（废话）
 */
.eye.left{
    right: 50%;
    margin-right: 80px;
}
/* 
 * 右眼在右边（废话）
 */
.eye.right{
    left: 50%;
    margin-left: 80px;
}
/* 
 * 然后，画皮卡丘的红脸蛋
 */
.face{
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
}
/* 
 * 左红脸蛋
 */
.face.left{
    right: 50%;
    top:85px;
    margin-right: 116px;
}
/* 
 * 右红脸蛋
 */
.face.right{
    left: 50%;
    top:85px;
    margin-left: 116px;
}
/* 
 * 上嘴唇
 */
.upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px; 
    background: #fee433;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);

}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/* 
 * 下嘴唇
 */
.lowerLip-wrapper{
    bottom: -30px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 135px;
    width: 300px;
    overflow: hidden;
}
.lowerLip{
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/* 
 * 小舌头
 */
.lowerLip::after{
    content:'';
    position: absolute;
    bottom: -40px;
    width: 100px;
    height: 150px;
    background: #fc4a62; 
    left:50%;
    margin-left: -50px;
    border-radius: 50px;
}
/* 
 * 好了，这就花完了
 */`
    writeCode('',code)
}.call()