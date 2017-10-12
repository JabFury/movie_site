$(function () {
    //登陆界面
    $('#head_login').dialog({
        width:'440',
        height:'280',
        title:'用户登陆',
        buttons:{
            '提交': function (){
                alert('正在提交，请稍等....');
            },
            '取消':function () {
                $(this).dialog('close');
            }
        },
        show:'fadeIn',
        hide:'fadeOut',

        draggable:false,  //表单不可拖拽
        resizable:false,  //表单不可放大缩小
        modal:true,       //对话框外不可操作了(灰色背景)。但是我的浏览器不是灰色背景。。。只是白的
        closeText:'关闭', //设置关闭x的名字 （原本为close），现改为‘关闭’
        autoOpen:false
    });
    $('.head_login_a').click(function () {
        $('#head_login').dialog('open');
    });
    $('#head_login input[title]').css({
        position:'absolute'
    }).tooltip({
        position: {
            my : 'left center',
            at : 'right bottom'
        }
        //show : false,
        //hide : false
    });




//注册界面
    $('#head_reg').dialog({
        width:'420',
        height:'440',
        title:'用户注册',
        buttons:{
            '提交': function (){
                alert('正在提交，请稍等....');
            },
            '取消':function () {
                $(this).dialog('close');
            }
        },
        show:'puff',
        hide:'puff',

        draggable:false,  //表单不可拖拽
        resizable:false,  //表单不可放大缩小
        modal:true,       //对话框外不可操作了(灰色背景)。但是我的浏览器不是灰色背景。。。只是白的
        closeText:'关闭', //设置关闭x的名字 （原本为close），现改为‘关闭’
        autoOpen:false
    });

    $('.head_reg_a').click(function () {
        $('#head_reg').dialog('open');
    });
});
