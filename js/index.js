$(function () {

    //幻灯片

    setInterval(function () {
        $('#top_ul li').eq(0).slideUp(function () {    
            $(this).clone().appendTo($(this).parent()).show();
            $(this).remove();
        })
    },3000);


    //电影、电视剧、合作联系列表
    $('.li-dy').click(function () {
       $('#head-movie-ul').slideToggle()
    });
    $('.li-dsj').click(function () {
        $('#head-tv-ul').slideToggle()
    });
    $('.li-hzlx').click(function () {
        $('.li-hzlx-imgdiv').slideToggle()
    });


    $('#head-movie-ul li').click(function (){
        $('#head-movie-ul li').eq($(this).index()).addClass('active')
            .siblings()
            .removeClass('active')
    });
    $('#head-tv-ul li').click(function (){
        $('#head-tv-ul li').eq($(this).index()).addClass('active')
            .siblings()
            .removeClass('active')
    });



    //qq、微信 二维码
    $('.qq-li-ewm').hover(function () {
        $('.qqewm').fadeToggle();
    });
    $('.wx-li-ewm').hover(function () {
        $('.wxewm').fadeToggle()
    });


    //电影列表虚化效果
    $('.mov-list-ul div').mouseover(function () {
        $(this).css({
            opacity:'0.7'
        })
            .mouseout(function () {
                $(this).css({
                    opacity:'1'
                })
            })
    });
    $('.ul-list-more div').mouseover(function () {
        $(this).css({
                opacity:'0.7'
            })
            .mouseout(function () {
                $(this).css({
                    opacity:'1'
                })
            })
    });

    //跳转详细电影介绍页面
    $('.mov-list-ul li').click(function () {
        window.open('information.html');
    });
    $('.r-rank-ul li').click(function () {
        window.open('information.html');
    });
    $('.r-activity a').click(function () {
        alert('敬请期待....')
    });

    //加载更多，收起功能
    $('.mid-list-more').click(function () {
        $(this).hide();
        $('.ul-list-more').slideDown();
        $('.mid-list-sq').show();
    });
    $('.mid-list-sq').click(function () {
        $(this).hide();
        $('.ul-list-more').slideUp();
        $('.mid-list-more').show();
    });



    //header搜索按钮
    $('.head_search_btn').button({
        //icons : {
        //    primary:'ui-icon-gear'
        //}
    });




    $('#head_reg #male ,#female').button();

    $('.reg-birth').datepicker({
        monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        dayNames :['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
        dayNamesShort:['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
        dayNamesMin:['一','二','三','四','五','六','日'],
        dateFormat :'yy-mm-dd',
        showOtherMonths:true,
        selectOtherMonths:true,
        changeMonth:true,
        changeYear:true,
        autoSize:true,
        showMonthAfterYear:true,
        //maxDate和minDate的优先级最高，高于yearRange
        maxDate:0,
        yearRange:'1917:2020'
    });

    $('#head_reg input[title]').css({
        position:'absolute'
    }).tooltip({
        position: {
            my : 'left center',
            at : 'right center'
        }
        //show : false,
        //hide : false
    });

    $('.reg-email').autocomplete({
        delay:0,
        autoFocus: true,
        source:function (request,response) {
            var hosts = ['@qq.com','@sina.cn','@163.com','@126.com','@hotmail.com','@gmail.com'],
                term=request.term,
                ix=term.indexOf('@'),
                name=term,
                host='',
                result=[];

                result.push(term);
            //分隔@前面的名字和后面.com的域名
            if (ix>-1) {
                name = term.slice(0,ix);
                host = term.slice(ix + 1);
            }

            //如果用户已经输入@和后面的域名，那么就找到相关的域名提示
            //如果没输入到@，那么就把所有域名输入显示出来
            if (name) {

                var findHosts =(host ? $.grep(hosts, function (value) {
                            return value.indexOf(host) >-1;
                        }) : hosts),
                    findResult = $.map(findHosts, function (value) {
                        return name + value;
                    });
                        result = result.concat(findResult);
            }
            response(result);
        }
    });






    //information 界面

    //写影评
    $('#pf-comment-dialog').dialog({
        buttons:{
            '提交': function (){
                alert('正在提交，请稍等....');
            },
            '取消':function () {
                $(this).dialog('close');
            }
        },
        width:'500',
        height:'450',
        autoOpen:false,
        show:'puff',
        hide:'puff',
        draggable:false,  //表单不可拖拽
        resizable:false,  //表单不可放大缩小
        modal:true
    });
    $('.a-comment').click(function () {
        $('#pf-comment-dialog').dialog('open')
    });

    $('.a-comment').button();

    $('#pf-comment-dialog input[ type="button"]').button();


    //查看更多评论
    $('.com-ul-a-more').click(function () {
        $(this).hide();
        $('.com-ul-more').slideDown();
        $('.com-ul-a-sq').show();
    });

    $('.com-ul-a-sq').click(function () {
        $(this).hide();
        $('.com-ul-more').slideUp();
        $('.com-ul-a-more').show();
    });
});