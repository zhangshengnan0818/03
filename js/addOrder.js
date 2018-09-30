/**
 * Created by Amh on 2018-08-29.
 */
/*点击添加尺寸*/
$('.addSize').on('click','a,.addIcon',function(){
  //console.log('1');
  $icon=$('.addIcon');
  $icon .toggleClass('active');
  if($icon.hasClass('active')){
    $('.sizeMes').slideDown(500);
  }else{
    $('.sizeMes').slideUp(500);
  }
});
$('.sizeMes .cancel,.sizeMes .ok').on('click',function(){
  $('.addIcon').removeClass('active');
  $('.sizeMes').slideUp(500);
});
/*输入数字保留2位*/
function clearNoNum(obj){
  obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
  obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
  obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
  obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
  if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
    obj.value= parseFloat(obj.value);
  }
}
/*input必填*/
/*
function checkSubmitRequired(){
  var result=true;
  $("[required-self]").each(function () {
    var requiredSelf=$(this).attr("required-self");
    if(requiredSelf!=undefined&&requiredSelf!=""&&requiredSelf=='true')	{
      var val=$(this).val();
      if(val==undefined||val==""){
        var message=$(this).attr("tips-self");
        prompt("请输入"+message);
        result=false;
      }
    }
    return result;
  });

  return result;
}*/

/*/!*当键盘弹起时，底部"提交订单"一栏使用的是fixed bottom定位，会被键盘顶起*!/
$('input,textarea').bind('focus',function(){
  $('.footer').css('position','static');
  //或者$('#viewport').height($(window).height()+'px');
}).bind('blur',function(){
  $('.footer').css({'position':'fixed','bottom':'0'});
  //或者$('#viewport').height('auto');
});
var u = navigator.userAgent, app = navigator.appVersion;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isiOS) {
  window.setTimeout(function(){
    window.scrollTo(0,document.body.clientHeight);
  }, 500);
}*/
/*var h=$(window).height();
$(window).resize(function(){
  if($(window).height()<h){
    $('.footer').hide();
  }else{
    $('.footer').show();
  }
  if(document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA'){
    setTimeout(() => {
      document.activeElement.scrollIntoView({behavior: "smooth"});
    }, 100)
  }

});*/
/*$(document).ready(function () {//不能自动跳转可视窗口
  $('body').height($('body')[0].clientHeight);
});*/

/*手风琴效果 */
$(".menu_title").click(function(){
  $this=$(this);
  var menu_c = $this.siblings(".menu_content");
  if(menu_c.is(":hidden")){
    menu_c.slideDown().parent("li").siblings().find(".menu_content").slideUp();
    $this.children('span').addClass("active");
    $this.parent("li").siblings().find(".menu_title>span").removeClass("active");
  }else{
    menu_c.slideUp();
    $this.children('span').removeClass("active");
  }
});

/*名称modal*/
$('#addZname').click(function(){
  $modal=$("#addZn");
  $modal.css("display","block");
  $('body').css("position",'fixed');/*关闭模态框禁止底部页面滚动*/
  $(document).on("touchend",'.cancel',function(e) {  // 取消删除事件抬起时
    $('#addZn').css("display","none");
    $('body').css("position",'static');

  });
  /*监听名称选择*/
  var start_y;   // touchstart时的水平起始位置
  var end_y;     // touchmove过程中的水平结束位置
  var offset = 10;
  $modal.on('touchstart','ul',function (e) {
    // 手指触摸开始时记录一下手指所在的坐标x
    start_y = e.originalEvent.touches[0].clientY;
    //console.log("star:"+start_y);
  });
  $modal.on('touchmove','ul',function (e) {
    // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
    end_y = e.originalEvent.touches[0].clientY;
  });
  $modal.on("touchend",'ul',function(e) {
    //console.log("end:"+end_y);
    console.log("star:"+start_y);
    var distance = Math.abs(start_y - end_y);
    if (distance > offset){
      //说明有方向的变化
      console.log("huadong");
    }else{
      console.log(e.target.innerHTML);//获取到li>a的值 临时存储
      //$modal.css("display","none");
      //$('body').css("position",'static');/*关闭模态框禁止底部页面滚动*/
    }
  });
});
function clcModal(){
  $('#addZn').css("display","none");
  $('body').css("position",'static');
}