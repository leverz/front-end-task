M.closure(function(b){var l=b("ScrollObserver"),m=b("Storage"),d=window.Env||{},f=$("#_j_mfwtoolbar"),h=f.height(),a=$(window).height(),k=$(document).height(),g=$("#footer"),e=g.outerHeight();$("body").css("position","relative");$(window).resize(function(){a=$(window).height();k=$(document).height()});setInterval(function(){var n=$(document).height();if(n!=k){k=n;$(window).trigger("scroll")}},2000);if(!d.hideToolbar){if(!d.showToolbarDownArrow){f.children(".toolbar-item-down").remove()}else{f.children(".toolbar-item-down").show()}f.show();c();l.addObserver(c);f.on("click","._j_gotop",i);f.on("click","._j_gobottom",j);f.children(".toolbar-item-code").mouseenter(function(){$(this).addClass("hover")});f.children(".toolbar-item-code").mouseleave(function(){$(this).removeClass("hover")})}function c(){var n=$(window).scrollTop();if(n>500){f.children(".toolbar-item-top").show()}else{f.children(".toolbar-item-top").hide()}if(g.length){if(n+a>g.offset().top){f.css({position:"absolute",bottom:e+20})}else{f.css({position:"",bottom:""})}}}function i(){$("html, body").animate({scrollTop:0},500,function(){M.Event.fire("scroll to top")})}function j(){$("html, body").animate({scrollTop:k-a},500,function(){M.Event.fire("scroll to bottom")})}});var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-7892704-1"]);_gaq.push(["_trackPageview"]);(function(){var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})();(function(){var a=document.createElement("script"),b=window.Env&&window.Env.CNZZID||30065558;a.type="text/javascript";a.async=true;a.charset="utf-8";a.src=document.location.protocol+"//w.cnzz.com/c.php?id="+b+"&async=1";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)})();M.closure(function(a){M.log("只要你有梦想，就加入我们\n你即将见证互联网最新趋势的快速成长\n多彩的一切资源都会成为你成长路上的最大助力\n你可以和多彩一起书写互联网的风云奇迹\n在这里有一群和你一样，疯狂地热爱互联网和旅行的人们\n多彩能为你实现梦想提供最广阔的平台");M.log("请将简历发送至 %csuperhr@mafengwo.com%c（ 邮件标题请以“_console”结尾）","color:#4ae;","color:inherit;");M.log("职位介绍：#s/hr.html")});M.closure(function(a){$.get("/ajax/ajax_page_onload.php",{href:document.location.href},function(b){if(b.payload&&b.payload.apps){var c=b.payload.apps;if(!M.isEmpty(c)){var d={css_list:c.css||[]};M.loadCssJsListSeq(d,function(){if(c.html){$("body").append(c.html)}if(c.js&&c.js.length){M.loadResource(c.js)}})}}},"json")});