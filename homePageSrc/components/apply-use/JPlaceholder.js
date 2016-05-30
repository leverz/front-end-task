/**
 * Created by 23687_000 on 16-5-15.
 */
/*
 * jQuery placeholder, fix for IE6,7,8,9
 * @author JENA
 * @since 20131115.1504
 * @website ishere.cn
 */
var $ = require('jquery');
var jQuery=$;
var React = require('react');

var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
//            self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
//            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
//            var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lienHeight:h, paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());


            var $wrap = $('<div class="wrap_placeholder"></div>');
            var holder = $('<span></span>').text(txt).appendTo($wrap);
            self.parent().append($wrap);
         //  self.after($wrap);
            var w = self.outerWidth(),w1 = holder.outerWidth(),h = $wrap.outerHeight()+self.outerHeight();
            next = self.next();
            if(next.length && next[0] != $wrap[0]){
                w += self.next().outerWidth();
            }
//            alert(w+"::"+w1);
            $wrap.css({"margin-top": -h/2,'margin-bottom':10});
            holder.css({"position": "relative","left":20});
            self.focusin(function(e) {
             $wrap.css({visibility: 'hidden'})
               // holder.css({visibility:true})
                //holder.hide();
            }).focusout(function(e) {
                //alert("我是"+self.val())
               // alert(self.val())
                    if(!self.val()){
                        //  holder.show();
                        $wrap.css({visibility: 'visible'})

                      //  holder.css({visibility:false})
                    }

                });
            holder.click(function(e) {
                // holder.hide();
                $wrap.css({visibility: 'hidden'})
                self.focus();

            });
        });
    }
};
module.exports = JPlaceHolder;
