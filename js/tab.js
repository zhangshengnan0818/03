/*tab切换-star*/
$('.tab-head').on('click', 'li', function (e) {
  e.preventDefault();
  $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
    $this.parent().siblings().children().removeClass('active');
    var m=$this.children('a').attr('href');
    $(m).addClass('curren');
    $(m).siblings().removeClass('curren');
  } else {
    return;
  }
})
/*tab切换-end*/
