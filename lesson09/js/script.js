// HTMLの準備が整いました
window.addEventListener('DOMContentLoaded', function(){
  // let header = document.querySelector('header')
  // header.style.backgroundColor = 'orange';

  // let $header = $('header')
  // $header.css('background-color', 'orange').slideUp(1000)
})

$(document).ready(function(){
  // 要素の取得(buttonとbody要素)
  let $body = $('body')
  let $headerBtn = $('.header-button')

  // ボタンをクリックしたらbodyにopenというクラスを追加・削除する
  $headerBtn.click(function(){
    // alert('クリックしました')

    if( $body.hasClass('open') ) {
      // openを削除する処理
      $body.removeClass('open')
    } else {
      // openを追加する処理
      $body.addClass('open')
    }

  })
  // ↑と同じ
  // $headerBtn.on('click', function(){
  //   alert('クリックしました')
  // })

})