

changeContent(".homepage" , "click" , ".home-channel",".home-channel-content");


function changeContent(changeContentContainerName , event , navTab , contentItem) {


    var elementList = document.querySelectorAll(changeContentContainerName + ' '+navTab);

    console.log(elementList);
    
    for(let  index = 0; index < elementList.length; index++ ){
        elementList[i].addEventListener(event,()=>{
            document.querySelectorAll(changeContentContainerName+" "+navTab+".active")[0].classList.remove("active");
            elementList[i].classList.add("active");
            console.log(index);
            changeContentAsIndex(index,contentItem);
        })
    }
//    $(changeContentContainerName + ' '+navTab).on(event, function () {
//         if (!$(this).hasClass('active')) {
//             $(changeContentContainerName + " "+navTab+".active").removeClass("active");
//             $(this).addClass("active");
//             console.log($(this).index());
//             changeContentAsIndex($(this).index(),contentItem);
//         }
//     })

}

function changeContentAsIndex(index, contentItem) {


}
    //         $(changeContentContainerName + " "+contentItem).each(function () {
    //             if (!$(this).hasClass('hidden')) {
    //                 $(this).addClass('hidden');
    //             }           
    //         })
    //         $(changeContentContainerName + " "+contentItem).eq(index).removeClass('hidden');
    //     }