$(function(){

    // スムーススクロール
    $('#sk-header-nav')
        .on('click', 'a[href^="#"]', function(e){
            // リンク先への移動を阻止
            e.preventDefault();

            console.dir(this.hash);

            // Aboutをクリックした場合
            // $('#about')
            var top = $(this.hash).offset().top;

            $('html, body')
                .animate({
                    scrollTop: Math.ceil(top) - 80
                }, 500);

        });


    // 西暦挿入
    var date = new Date();
    var year = date.getFullYear();
    $('#year').html(year);

}); //$(function(){})