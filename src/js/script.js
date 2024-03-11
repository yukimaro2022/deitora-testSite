
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    jQuery('.drawer__btns').on('click',function(){
        jQuery('.drawer__btns').toggleClass('is-active');
      
            jQuery('.drawer__btns span').toggleClass('is-active');
            jQuery('.header-nav').toggleClass('is-active');
            jQuery('.header__drawer-background').toggleClass('is-active');
            jQuery('.header__inner').toggleClass('is-active');
      
            jQuery('body').toggleClass('scroll-lock');
      });
          
          jQuery('.drawer__item a').on('click',function(){
            
          // jQuery('.drawer__btns , .drawer__btns span').removeClass('is-active');
          jQuery('.header-nav').removeClass('is-active');
          jQuery('.header__drawer-background').removeClass('is-active');
          jQuery('.header__inner').removeClass('is-active');
          jQuery('body').removeClass('scroll-lock');
          });
        // });
      
           // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
    jQuery('.drawer__btns, .drawer__btns span, .header-nav, .header__drawer-background, .header__inner, body').removeClass('is-active');
    // .headerクラスがついた要素の高さを取得
    let header = jQuery("header").innerHeight();
    //スクロールスピードを設定する
    let speed = 300;
    
    //押した要素のhref属性を取得する
    let id = jQuery(this).attr("href");
    
    //＃の値がidならばhtmlを設定　id属性ではなければidを設定する
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    
    let position = jQuery(target).offset().top - header;
    
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
});
