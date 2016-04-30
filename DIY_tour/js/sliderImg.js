/**
 * Created by Lever on 16/4/30.
 */

(function () {
    $("#_j_top_pic_container .show-nav>li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).attr('data-index');
        $(".show-image li").eq(index).css('display','list-item').siblings().css('display','none');
    })
})();