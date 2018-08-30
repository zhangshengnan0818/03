/**
 * Created by Amh on 2018-08-29.
 */
/*点击添加尺寸*/
$('.addSize').on('click','a',function(){
  //console.log('1');
  $icon=$('.addIcon');
  $icon .toggleClass('active');
  if($icon.hasClass('active')){
    $('.sizeMes').slideDown(500);
  }else{
    $('.sizeMes').slideUp(500);
  }
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

/*手风琴效果 */
$(function(){
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
});

/*当键盘弹起时，底部"提交订单"一栏使用的是fixed定位，会被键盘顶起*/
var h=$(window).height();
$(window).resize(function(){
  if($(window).height()<h){
    $('.footer').hide();
    $('.header').hide();
  }else{
    $('.footer').show();
    $('.header').show();
  }
});