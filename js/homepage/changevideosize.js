var resizeTimer = null;

window.onresize = function () {
    // console.log(gridLeft);        
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {

       // changeVideoCoverSize();
    },0)

}


function changeVideoCoverSize(){
    var videoArea = document.querySelectorAll(".video-area");
    videoArea.forEach(element => {
        element.style.height = parseInt(getStyle(element,"width"))*0.5625 +"px"; 
        console.log( getStyle(element,"width"));      
    });
}




function getStyle(parm1, parm2) {
    return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2];  //parm1,要改变的元素代替名;parm2,要改变的属性名
}