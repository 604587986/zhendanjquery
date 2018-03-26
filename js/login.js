$(function(){
    //登陆与注册的切换
    var login = $('#login');
    login.on('click','.title .goLogin',function(){
        $(this).addClass('active').siblings().removeClass('active');
        login.find('.item.denglu').show().siblings('.zhuce').hide();
    })
    login.on('click','.title .reg',function(){
        $(this).addClass('active').siblings().removeClass('active');        
        login.find('.item.zhuce').show().siblings('.denglu').hide();
    })
    login.on('click','.zhucezhanghao',function(){
        $('#login .title .reg').addClass('active').siblings().removeClass('active');
        login.find('.item.zhuce').show().siblings('.denglu').hide();        
    })

    //登陆提交表单
    login.on('click','#login-btn',function(){
        var data = $('#denglu-form').serialize();
        alert(data)
    })  
    //注册提交表单
    login.on('click','#reg-btn',function(){
        var data = $('#zhuce-form').serialize();
        alert(data)
    })  
})