(function(e){jQuery.fn.extend({rSlider:function(){var t=typeof arguments[0]!="undefined"?arguments[0]:{},n=typeof t.slides!="undefined"?t.slides:"li",r=typeof t.next!="undefined"?t.next:".next",i=typeof t.prev!="undefined"?t.prev:".prev";this.curSlide=typeof t.start!="undefined"?t.start:0;this.loop=typeof t.loop!="undefinded"?t.loop:!1;this.speed=typeof t.speed!="undefinded"?t.speed:1e3;this.nextCallback=typeof t.nextCallback!="undefined"?t.nextCallback:{};this.prevCallback=typeof t.prevCallback!="undefined"?t.prevCallback:{};this.slider=this;this.slides=this.slider.find(n);this.next=this.slider.find(r);this.prev=this.slider.find(i);this.index=this.slides.length-1;this.trigger=!1;this.init=function(){var e=this;this.show();this.setListeners()};this.setListeners=function(){this.setNext();this.setPrev()};this.unbindNext=function(){this.next.unbind("click").bind("click",function(e){e.preventDefault()})};this.unbindPrev=function(){this.prev.unbind("click").bind("click",function(e){e.preventDefault()})};this.setPrev=function(){var e=this;this.curSlide!==0&&this.loop===!1?this.prev.unbind("click").bind("click",function(t){t.preventDefault();e.moveSlide("back");e.curSlide!==0&&(e.curSlide=e.curSlide-1);e.prev.removeClass("inactive");e.next.removeClass("inactive");e.prevCallback()}):this.loop===!1&&this.prev.addClass("inactive");this.loop===!0&&this.prev.unbind("click").bind("click",function(t){t.preventDefault();e.moveSlide("back");e.curSlide!==0&&(e.curSlide=e.curSlide-1);e.prevCallback()})};this.setNext=function(){var e=this;this.curSlide!==this.index&&this.loop===!1?this.next.unbind("click").bind("click",function(t){t.preventDefault();e.moveSlide("forward");e.curSlide!==e.index&&(e.curSlide=e.curSlide+1);e.nextCallback();e.prev.removeClass("inactive");e.next.removeClass("inactive")}):this.loop===!1&&this.next.addClass("inactive");this.loop===!0&&this.next.unbind("click").bind("click",function(t){t.preventDefault();e.moveSlide("forward");e.curSlide=e.curSlide+1;e.prevCallback()})};this.show=function(){var t=this;this.slides.each(function(n,r){n!==t.curSlide&&e(r).hide()})};this.getWidth=function(){return this.slider.width()};this.getHeight=function(){return this.slider.height()};this.endRender=function(){this.slider.attr("style","");this.slides.attr("style","");this.show()};this.moveSlide=function(t){var n=t==="back"?-1:1,r=this,i=this.getHeight(),s=this.getWidth(),o=e(this.slides[this.curSlide]),u=e(this.slides[this.curSlide+n]);if(this.loop===!0){if(this.curSlide===this.index&&t==="forward"){u=e(this.slides[0]);this.curSlide=-1}if(this.curSlide===0&&t==="back"){u=e(this.slides[this.index]);this.curSlide=this.index+1}}this.unbindNext();this.unbindPrev();this.slider.css({width:s,height:i});o.css({position:"absolute",left:0,top:0,width:s,height:i});u.css({position:"absolute",left:s*n,top:0,width:s,height:i,display:"block"});o.animate({left:s*-n},this.speed);u.animate({left:0},this.speed,function(){r.setNext();r.setPrev();r.endRender()})};this.init()}})})(jQuery);$(".slider").rSlider({slides:"li",next:".next",prev:".prev",start:0,loop:!0,speed:100,nextCallback:function(){},prevCallback:function(){}});