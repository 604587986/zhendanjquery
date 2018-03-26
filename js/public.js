//nav部分js
$(function () {
    var nav = $('#nav');
    //dropdown的显示隐藏
    nav.on('mouseover', '.right .menu>li', function () {
       $(this).children('.dropdown').stop().animate({height:'602px'})
    })
    nav.on('mouseout', '.right .menu>li', function () {
       $(this).children('.dropdown').stop().animate({height:0})
    })
    //搜索
    nav.on('mouseenter','.icon-search',function(){
        $(this).siblings('input').animate({width:'150px',paddingLeft:'10px'})
    })
    nav.on('click','.icon-search',function(){
        var data = $('#search-value').val();
        alert(data)
    })
})
