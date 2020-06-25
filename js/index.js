var gridLeft = document.querySelector(".grid-left");
var gridRight = document.querySelector(".grid-right");
const searchText = document.querySelector(".search-text");
let leftOpen = false;
var width = document.documentElement.clientWidth;

window.onload = function () {
    
    init();
    //controlLefOpen();
}
//获取style样式的css属性,考虑兼容;ie,火狐/谷歌;
function getStyle(parm1, parm2) {
    return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2];  //parm1,要改变的元素代替名;parm2,要改变的属性名
}


//重置搜索框
/* function resetSearch(){
    if (!searchText.classList.contains("hidden")) searchText.classList.add("hidden");
    leftOpen = false;
}
 */
//初始化页面
function init(){
    
    if (width <= 900) {
        controlLeft();
        gridLeft.style.width = "50px";
        gridRight.style.left = "50px";
        gridRight.style.width = (width-50)+"px";
      
    } else {
        gridLeft.style.width = "250px";
        gridRight.style.left = "250px";
        gridRight.style.width = (width-250)+"px";

    }
    gridLeft.classList.remove("hidden");
    gridRight.classList.remove("hidden");
}

//当屏幕小于900时点击菜单控制左部窗口开关
function controlLeft() {
    const menu = document.getElementById("menu");

    //let oldWidth = gridLeft.offsetWidth;
    menu.addEventListener("click", leftOpenClose)
}
function removeControlLeft(){
    const menu = document.getElementById("menu");
    menu.removeEventListener("click",leftOpenClose);
}
function leftOpenClose() {
    if (leftOpen == false) {
        gridLeft.style.width = "250px";
        leftOpen = !leftOpen;
    }else{
        gridLeft.style.width = "50px";
        leftOpen = !leftOpen;
    }
}

        
        /*
        changeRightPosition();
        if (leftOpen == false) {
            oldWidth = parseInt(getStyle(gridLeft, "width"));
        }

        // console.log(getStyle(gridLeft,"width"));
        // console.log(oldWidth);
        if (oldWidth == 250) {
            // console.log(1);
            if (searchText.classList.contains("hidden")) {
                searchText.classList.remove("hidden");
                leftOpen = !leftOpen;
            } else {
                searchText.classList.add("hidden");
                leftOpen = !leftOpen;
            }
        } else {
            // console.log(2);
            if (searchText.classList.contains("hidden")) {
                gridLeft.style.width = "250px";
                searchText.classList.remove("hidden");
                leftOpen = !leftOpen;
            } else {
                gridLeft.style.width = "50px";
                searchText.classList.add("hidden");
                leftOpen = !leftOpen;
            }
            // console.log(leftOpen);

        }


function changeRightPosition() {
    
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    //需要观察变动的节点
    var gridLeft = document.querySelector(".grid-left");
    var gridRight = document.querySelector(".grid-right");
    //观察器的配置（观察什么变动）
    var config = { attributes: true, attributeFilter: ['style'], attributeOldValue: true };
    // 当观察到变动时执行的回调函数
    
    var callback = function (mutations) {
        console.log(1);
        for (var mutation of mutations) {

            if (mutation.type == 'attributes') {

                let width = getComputedStyle(gridLeft).getPropertyValue('width');
                console.log(width);
                gridRight.style.left = width;
            }
        }
    };

    // 创建一个观察器实例并传入回调函数
    var observer = new MutationObserver(callback);

    // 以上述配置开始观察目标节点
    observer.observe(gridLeft, config);

    // // 之后，可停止观察
    //observer.disconnect();

}
*/