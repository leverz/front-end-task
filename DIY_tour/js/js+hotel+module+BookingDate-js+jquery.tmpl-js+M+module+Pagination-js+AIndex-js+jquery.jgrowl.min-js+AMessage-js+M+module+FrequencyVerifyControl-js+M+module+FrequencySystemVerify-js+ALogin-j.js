M.define("/js/hotel/module/BookingDate",function(c,b,d){var e=c("Storage"),a=c("xdate");var f={getDate:function(n){var p=Number(!!window.localStorage);var m=+new Date(),k=new Date(m),h=e.getItem("hotel_check_in"),l=e.getItem("hotel_check_out"),i,g;k.setHours(0,0,0,0);m=k.getTime();if(!!h){i=Date.parse(h);if(i>=m&&!!l){g=Date.parse(l);if(g>i){if(!n){!!mfwPageEvent&&mfwPageEvent("hotel","booking_date",{operation:0,is_support_storage:p,is_cached:1})}return{checkIn:h,checkOut:l,isCached:true}}}}i=m+40*24*60*60*1000;g=i+24*60*60*1000;var j=new Date(i),o=new Date(g);h=j.getFullYear()+"-"+(j.getMonth()<9?"0":"")+(j.getMonth()+1)+"-"+j.getDate();l=o.getFullYear()+"-"+(o.getMonth()<9?"0":"")+(o.getMonth()+1)+"-"+o.getDate();if(!n){!!mfwPageEvent&&mfwPageEvent("hotel","booking_date",{operation:0,is_support_storage:p,is_cached:0})}return{checkIn:h,checkOut:l,isCached:false}},setDate:function(i,g,j){e.setItem("hotel_check_in",i,86400*7);e.setItem("hotel_check_out",g,86400*7);var k=a.today().diffDays(new a(i)),h=(new a(i)).diffDays(new a(g));!!mfwPageEvent&&mfwPageEvent("hotel","booking_date",{operation:1,ahead_days:k,duration_days:h,check_in:i,check_out:g,source:j})}};d.exports=f});
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(i,f){var t=i.fn.domManip,h="_tmplitem",u=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,p={},e={},y,x={key:0,data:{}},w=0,q=0,g=[];function k(B,A,D,E){var C={data:E||(E===0||E===false)?E:(A?A.data:{}),_wrap:A?A._wrap:null,tmpl:null,parent:A||null,nodes:[],calls:c,nest:b,wrap:n,html:r,update:z};if(B){i.extend(C,B,{nodes:[],parent:A})}if(D){C.tmpl=D;C._ctnt=C._ctnt||C.tmpl(i,C);C.key=++w;(g.length?e:p)[w]=C}return C}i.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(A,B){i.fn[A]=function(C){var F=[],I=i(C),E,G,D,J,H=this.length===1&&this[0].parentNode;y=p||{};if(H&&H.nodeType===11&&H.childNodes.length===1&&I.length===1){I[B](this[0]);F=this}else{for(G=0,D=I.length;G<D;G++){q=G;E=(G>0?this.clone(true):this).get();i(I[G])[B](E);F=F.concat(E)}q=0;F=this.pushStack(F,A,I.selector)}J=y;y=null;i.tmpl.complete(J);return F}});i.fn.extend({tmpl:function(C,B,A){return i.tmpl(this[0],C,B,A)},tmplItem:function(){return i.tmplItem(this[0])},template:function(A){return i.template(A,this[0])},domManip:function(E,H,G,I){if(E[0]&&i.isArray(E[0])){var B=i.makeArray(arguments),A=E[0],F=A.length,C=0,D;while(C<F&&!(D=i.data(A[C++],"tmplItem"))){}if(D&&q){B[2]=function(J){i.tmpl.afterManip(this,J,G)}}t.apply(this,B)}else{t.apply(this,arguments)}q=0;if(!y){i.tmpl.complete(p)}return this}});i.extend({tmpl:function(C,F,E,B){var D,A=!B;if(A){B=x;C=i.template[C]||i.template(null,C);e={}}else{if(!C){C=B.tmpl;p[B.key]=B;B.nodes=[];if(B.wrapped){s(B,B.wrapped)}return i(m(B,null,B.tmpl(i,B)))}}if(!C){return[]}if(typeof F==="function"){F=F.call(B||{})}if(E&&E.wrapped){s(E,E.wrapped)}D=i.isArray(F)?i.map(F,function(G){return G?k(E,B,C,G):null}):[k(E,B,C,F)];return A?i(m(B,null,D)):D},tmplItem:function(B){var A;if(B instanceof i){B=B[0]}while(B&&B.nodeType===1&&!(A=i.data(B,"tmplItem"))&&(B=B.parentNode)){}return A||x},template:function(B,A){if(A){if(typeof A==="string"){A=l(A)}else{if(A instanceof i){A=A[0]||{}}}if(A.nodeType){A=i.data(A,"tmpl")||i.data(A,"tmpl",l(A.innerHTML))}return typeof B==="string"?(i.template[B]=A):A}return B?(typeof B!=="string"?i.template(null,B):(i.template[B]||i.template(null,u.test(B)?B:i(B)))):null},encode:function(A){return(""+A).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});i.extend(i.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(A){p={}},afterManip:function v(C,A,D){var B=A.nodeType===11?i.makeArray(A.childNodes):A.nodeType===1?[A]:[];D.call(C,A);o(B);q++}});function m(A,E,C){var D,B=C?i.map(C,function(F){return(typeof F==="string")?(A.key?F.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+h+'="'+A.key+'" $2'):F):m(F,A,F._ctnt)}):A;if(E){return B}B=B.join("");B.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(G,H,F,I){D=i(F).get();o(D);if(H){D=a(H).concat(D)}if(I){D=D.concat(a(I))}});return D?D:a(B)}function a(B){var A=document.createElement("div");A.innerHTML=B;return i.makeArray(A.childNodes)}function l(A){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+i.trim(A).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(I,C,G,D,E,J,F){var L=i.tmpl.tag[G],B,H,K;if(!L){throw"Unknown template tag: "+G}B=L._default||[];if(J&&!/\w$/.test(E)){E+=J;J=""}if(E){E=j(E);F=F?(","+j(F)+")"):(J?")":"");H=J?(E.indexOf(".")>-1?E+j(J):("("+E+").call($item"+F)):E;K=J?H:"(typeof("+E+")==='function'?("+E+").call($item):("+E+"))"}else{K=H=B.$1||"null"}D=j(D);return"');"+L[C?"close":"open"].split("$notnull_1").join(E?"typeof("+E+")!=='undefined' && ("+E+")!=null":"true").split("$1a").join(K).split("$1").join(H).split("$2").join(D||B.$2||"")+"__.push('"})+"');}return __;")}function s(B,A){B._wrap=m(B,true,i.isArray(A)?A:[u.test(A)?A:i(A).html()]).join("")}function j(A){return A?A.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function d(A){var B=document.createElement("div");B.appendChild(A.cloneNode(true));return B.innerHTML}function o(G){var I="_"+q,B,A,E={},F,D,C;for(F=0,D=G.length;F<D;F++){if((B=G[F]).nodeType!==1){continue}A=B.getElementsByTagName("*");for(C=A.length-1;C>=0;C--){H(A[C])}H(B)}function H(P){var L,O=P,N,J,K;if((K=P.getAttribute(h))){while(O.parentNode&&(O=O.parentNode).nodeType===1&&!(L=O.getAttribute(h))){}if(L!==K){O=O.parentNode?(O.nodeType===11?0:(O.getAttribute(h)||0)):0;if(!(J=p[K])){J=e[K];J=k(J,p[O]||e[O]);J.key=++w;p[w]=J}if(q){Q(K)}}P.removeAttribute(h)}else{if(q&&(J=i.data(P,"tmplItem"))){Q(J.key);p[J.key]=J;O=i.data(P.parentNode,"tmplItem");O=O?O.key:0}}if(J){N=J;while(N&&N.key!=O){N.nodes.push(P);N=N.parent}delete J._ctnt;delete J._wrap;i.data(P,"tmplItem",J)}function Q(R){R=R+I;J=E[R]=(E[R]||k(J,p[J.parent.key+I]||J.parent))}}}function c(C,A,D,B){if(!C){return g.pop()}g.push({_:C,tmpl:A,item:this,data:D,options:B})}function b(A,C,B){return i.tmpl(i.template(A),C,B,this)}function n(C,A){var B=C.options||{};B.wrapped=A;return i.tmpl(i.template(C.tmpl),C.data,B,C.item)}function r(B,C){var A=this._wrap;return i.map(i(i.isArray(A)?A.join(""):A).filter(B||"*"),function(D){return C?D.innerText||D.textContent:D.outerHTML||d(D)})}function z(){var A=this.nodes;i.tmpl(null,null,null,this).insertBefore(A[0]);i(A).remove()}if(window.M&&typeof M.define=="function"){M.define("jq-tmpl",function(){return i})}})(jQuery);M.define("Pagination",function(b,a,c){b("jq-tmpl");function d(e){this.total=null;this.pageSize=null;this.currPage=null;this.pageDisplayNum=null;this.callback=null;this.tmpl=null;this.container=null;this.pageItemClass="_j_pageitem";this.jumperBtnClass="_j_jumperbtn";this.jumperInputClass="_j_jumperinput";this.loadInitPage=false;this.evenOffset=-1;M.mix(this,e);this.total=+this.total;this.pageSize=this.pageSize>0?(+this.pageSize):10;this.currPage=this.currPage>0?(+this.currPage):1;this.pageDisplayNum=this.pageDisplayNum>0?(+this.pageDisplayNum):5;this.container=$(this.container);if(this.total<0||!this.tmpl.length||!this.container.length){M.error("pagination param invalid")}this.init()}M.mix(d.prototype,{init:function(){if(this.loadInitPage){this.loadPage(this.currPage)}else{this.drawPage()}this.bindEvents()},drawPage:function(){var g={total:this.total,currPage:this.currPage,pageSize:this.pageSize,pageDisplayNum:this.pageDisplayNum};var e=Math.ceil(this.total/this.pageSize);g.pageTotal=e;if(e<=this.pageDisplayNum){g.indexers=this.makeIndex(1,e)}else{if(this.currPage>e){this.currPage=e}var f=(this.pageDisplayNum-1)/2;if(f!==parseInt(f,10)){f=this.evenOffset>0?Math.floor(f)+this.evenOffset:Math.ceil(f)+this.evenOffset}var h=this.pageDisplayNum-1-f;if(this.currPage-f<1){f=this.currPage-1;h=this.pageDisplayNum-1-f}else{if(this.currPage+h>e){h=e-this.currPage;f=this.pageDisplayNum-1-h}}g.indexers=this.makeIndex(this.currPage-f,this.pageDisplayNum)}this.container.empty().append($(this.tmpl).tmpl(g))},loadPage:function(e){this.currPage=e;this.drawPage();if(typeof this.callback=="function"){this.callback(e)}},bindEvents:function(){this.container.undelegate("click");this.container.undelegate("keydown");this.container.on("click","."+this.pageItemClass,M.bind(function(f){var g=$(f.currentTarget),e=g.data("page");this.loadPage(e);f.preventDefault()},this));this.container.on("click","."+this.jumperBtnClass,M.bind(function(f){var g=$(f.currentTarget),e=+this.container.find("."+this.jumperInputClass).val();f.preventDefault();if(e<=0||e>Math.ceil(this.total/this.pageSize)){alert("请输入有效的页码");return false}this.loadPage(e)},this));this.container.on("keydown","."+this.jumperInputClass,M.bind(function(e){if(e.keyCode==13){this.container.find("."+this.jumperBtnClass).trigger("click")}},this))},makeIndex:function(h,f){var e=[];for(var g=h;g<h+f;g++){e.push(g)}return e}});c.exports=d});M.closure(function(ar){var A=window.Env||{};var q=ar("Slider"),au=ar("/js/Dropdown"),e=ar("ScrollBar"),T=ar("Suggestion"),E=ar("/js/SiteSearch"),ai=ar("xdate"),I=ar("/js/hotel/module/DateRangePicker"),p=ar("/js/hotel/module/BookingDate"),Y=p.getDate(true),v=Y.checkIn,H=Y.checkOut;var ae=600,ax=5000,aB=false,K=$("#_j_top_pic_container"),ah=K.find(".show-image"),ac=K.find(".show-nav"),N=ah.children("li"),z=N.length;var av=new q({slideCnt:ah,slideList:N,slideTime:ae,indexer:ac.children("li"),indexerOnClass:"active",shStyle:"fadeInOut"});ah.add(ac).bind("mouseenter",function(){aB=true}).bind("mouseleave",function(){aB=false});setInterval(function(){if(!aB&&M.windowFocused){if(av.index<z){av.toIndex(av.index+1)}else{av.toIndex(1)}}},ax);ah.delegate("li","click",function(){var aH=$(this);try{var aD=aH.find("a").attr("href");var aG=aD.split("/");var aF=parseInt(aG[aG.length-1]);mfwPageEvent("ginfo","index:focus:image:click",({iid:aF,}))}catch(aE){}});var ak=$("#_j_index_search"),ab=$("#_j_index_search_tab"),P=$("#_j_index_search_bar_all"),g=$("#_j_index_search_bar_hotel"),L=$("#_j_index_search_bar_mdd"),aw=$("#_j_index_search_bar_sales"),c=function(aD){switch(aD){case 0:return P;break;case 1:return g;break;case 2:return L;break;case 3:return aw;break;default:}};ab.on("click","li",function(aG){var aI=$(aG.currentTarget),aD=Number(aI.data("index")),aE=c(aD),aK=ab.find(".tab-selected"),aJ=Number(aK.data("index")),aH=c(aJ),aF=$.trim(aH.find(".search-input input").val());ab.find("li").removeClass("tab-selected");aI.addClass("tab-selected");ak.find(".searchbar").hide();aE.find(".search-input input").val(aF).end().show()});var Z=true;var h=function(aE,aJ,aH,aG,aF){var aD={};if(aJ=="hotel"){aD.url="/hotel/s.php?q="+encodeURIComponent(aE)}else{if(aJ=="sales"){aD.url="/sales/0-0-K"+encodeURIComponent(aE)+"-0.html"}else{aD.url="/group/s.php?q="+encodeURIComponent(aE)}}aD.search_type="all";aD.search_category="suggest";aD.trigger=aG;aD.search_from="index_"+aJ;aD.keyword=aE;if(!!aH){var aI=aH.closest("li");aD.local=aI.index()}if(aH.length){aD.url=aH.data("url");aD.search_type=aH.data("type")}aD.trigger=aD.search_type=="more"?"more":aD.trigger;if(aD.trigger!="enter"){Z=false}!!mfwPageEvent&&mfwPageEvent("se","result_click",aD)};new E({input:"_j_index_suggest_input_all",submit:"_j_index_suggest_btn_all",additionalClass:"m-search-suggest-index"});var l=$("#_j_check_in"),x=$("#_j_check_out"),Q=l.find("input"),aA=x.find("input"),V=new I({startInput:Q,endInput:aA,startDate:v,endDate:H,minDate:(new ai()).toString("yyyy-MM-dd"),maxDate:(new ai()).addDays(365).toString("yyyy-MM-dd"),rangeMaxDays:30,isDoublePick:true,isCached:Y.isCached});if(Y.isCached){Q.val(v);aA.val(H)}else{Q.val("未定");aA.val("未定")}l.on("click",function(aD){Q.datepicker("show")});x.on("click",function(aD){aA.datepicker("show")});M.Event(V).on("date range picker doublepicked",function(aD){if(""===Q.val()){Q.val(aD.startDate)}if(""===aA.val()){aA.val(aD.endDate)}p.setDate(aD.startDate,aD.endDate,"homepage")});var az=$("#_j_index_suggest_input_hotel"),d=$("#_j_index_suggest_btn_hotel"),w=$("#_j_index_suggest_list_hotel"),b=$("#_j_index_search_bar_hotel form");var C=new T({url:"/hotel/ajax.php?sAction=getSuggestList",input:az,keyParamName:"keyword",listItemHoverClass:"active",dataType:"json",listContainer:w,handleSuggest:function(aF){az.data("droplist")["firstItemHover"]=true;var aD=$.trim(az.val()),aE=u(aF.place,"place",aD)+u(aF.station,"station",aD)+u(aF.railway_station,"railway_station ",aD)+u(aF.airport,"airport",aD)+u(aF.scenic,"scenic",aD)+u(aF.hotel,"hotel",aD);if(!aE.length){az.data("droplist").hide()}else{aE+='<a class="ssp-more _j_listitem" data-type="more" href="javascript:;" data-url="http://'+A.WWW_HOST+"/hotel/s.php?sKeyWord="+aD+'">查看“<b>'+aD+"</b>”更多搜索结果</a>";return aE}},updateList:function(aD){this.listContainer.html(aD)}});function u(aN,aQ,aM){var aI=$("<dl>"),aL,aE=[],aP={place:"sicon-place",station:"sicon-metro",railway_station:"sicon-train",airport:"sicon-airport",scenic:"sicon-scenic",hotel:"sicon-hotel"};if(!!aN&&aN.length>0){for(var aJ=0;aJ<aN.length;aJ++){var aF=aN[aJ].id,aK=aN[aJ].cname_for_display,aH=aN[aJ].ename_for_display,aS=aN[aJ].parent_str,aR=aN[aJ].type,aG=$('<a href="javascript:;">'),aD,aO=(aQ==="hotel")?"":aN[aJ].hotel_num+"家酒店";switch(aQ){case"place":if(aR==="mdd"){aD="/hotel/"+aF+"/"}if(aR==="district"){aD="/hotel/area_"+aF+".html"}break;case"hotel":aD="/hotel/"+aF+".html";break;default:aD="/hotel/jd"+aF+".html";break}aG.attr("data-name",aK+" "+aH);if(aM.length>0){aK=aK.replace(new RegExp("("+aM+"{1})","gi"),"<b>$1</b>");aH=aH.replace(new RegExp("("+aM+"{1})","gi"),"<b>$1</b>")}aG.append('<span class="nums">'+aO+"</span>").append('<h4><span class="skey">'+aK+'</span><span class="en">'+aH+"</span></h4>").append("<p>"+aS+"</p>");aL=$("<div>").append(aG);aE.push('<dd class="_j_listitem" data-type="hotel" data-url="'+aD+'">'+aL.html()+"</dd>")}aI.append('<dt><i class="'+aP[aQ]+'"></i></dt>');aI.append(aE.join(""));aL=$("<div>").append(aI);return aL.html()}else{return""}}M.Event(C).on("itemselected",function(aD){var aE=aD.item;if(aE.length){h($.trim(az.val()),"hotel",aE,"click");location.href=aE.data("url")}else{if(az.parents("form").length){az.parents("form").last().submit()}else{return}}});d.click(function(aE){var aD=$.trim(az.val());if(!!aD){h(aD,"hotel","","search_btn");location.href="/hotel/s.php?sKeyWord="+encodeURIComponent(aD)}});b.on("submit",function(){if(Z==false){return false}h($.trim(az.val()),"hotel","","enter")});var am=$("#_j_index_suggest_input_mdd"),ao=$("#_j_index_suggest_btn_mdd"),ap=$("#_j_index_suggest_list_mdd"),o=$("#_j_index_search_bar_mdd form");var n=new T({url:"/ajax/router.php?sAct=KMdd_StructWebAjax|SearchMdd",input:am,keyParamName:"sName",listItemHoverClass:"active",dataType:"json",listContainer:ap,handleSuggest:function(aJ){am.data("droplist")["firstItemHover"]=aJ.data.exact;var aF=$.trim(am.val());if(!aJ.data.mdd.length){am.data("droplist").hide()}else{var aE=aJ.data.mdd,aH=[];for(var aI=0,aD=aE.length,aK="";aI<aD;aI++){var aG="/travel-scenic-spot/mafengwo/"+aE[aI].mddid+".html";aH.push('<li class="_j_listitem" data-type="mdd" data-url="'+aG+'"><i class="sicon-place"></i><span class="skey">'+aE[aI].name+"</span>"+(aE[aI].parent?("<span>"+aE[aI].parent+"</span>"):"")+"</li>")}return aH.join("")}},updateList:function(aD){this.listContainer.find(".suggest-list").html(aD)}});M.Event(n).on("itemselected",function(aD){var aE=aD.item;if(aE.length){h($.trim(am.val()),"mdd",aE,"click");location.href=aE.data("url")}else{if(am.parents("form").length){am.parents("form").last().submit()}else{return}}});ao.click(function(aE){var aD=$.trim(am.val());if(!!aD){h(aD,"mdd","","search_btn");location.href="/group/s.php?q="+encodeURIComponent(aD)}});o.on("submit",function(){if(Z==false){return false}h($.trim(am.val()),"mdd","","enter")});var W=$("#_j_index_suggest_input_sales"),aq=$("#_j_index_suggest_btn_sales");aq.click(function(aE){var aD=$.trim(W.val());if(!!aD){h(aD,"sales","","search_btn");location.href="/sales/0-0-K"+encodeURIComponent(aD)+"-0.html"}});var J=$("#_j_traveller_slide"),ag=J.find(".slide-ul"),B=ag.children("li"),at=B.length,X=J.find(".slide-ol li"),an=300,G=10000;var a=new q({slideCnt:ag,slideList:B,slideTime:an,indexer:X,indexerOnClass:"active"});var t=setInterval(function(){if(M.windowFocused){if(a.index<at){a.toIndex(a.index+1)}else{a.toIndex(1)}}},G);X.bind("click",function(aD){clearInterval(t)});var D=true,aC=1,aj,af=null,ad=$("._j_activitynav").children(),k=$("._j_activitynav").html(),r=ad.length,s=r*50;var f=new e({container:$("#_j_activitynav"),barTPL:'<div class="scrollbar" style="height: auto; position:absolute;right:-10px;top:0;width:4px;height:100px;background-color:#d6d6d6;border-radius:10px;cursor:pointer;z-index:-1"></div>'});$("._j_activity").click(function(aD){aD.preventDefault();var aE=$(aD.currentTarget),aF=aE.data("flag");if(aF==aC){return}if(af){af.abort();D=true}aC=aF;if(aC==1){$("._j_activitynav").html(k);$("._j_activity").removeClass("active");aE.addClass("active");M.Event(f).fire("contentchange");f.scroll(0)}else{if(D&&!aj){D=false;af=$.get("/indexactivity/ajax.php",{act:"indexactivity",flag:aC,uid:A.UID},function(aG){if(aG.data){aj=aG.data.html;$("._j_activitynav").html(aj);$("._j_activity").removeClass("active");aE.addClass("active");M.Event(f).fire("contentchange");f.scroll(0)}D=true},"json")}else{$("._j_activitynav").html(aj);$("._j_activity").removeClass("active");aE.addClass("active");M.Event(f).fire("contentchange");f.scroll(0)}}});var j=$("#_j_sales");j.on("mouseenter",".item",function(aF){var aE=$(aF.currentTarget),aD=aE.find("h3");aE.addClass("hover");if(!aE.hasClass("item-qiang")){aD.stop().animate({height:80,marginTop:-35},{duration:200})}}).on("mouseleave",".item",function(aF){var aE=$(aF.currentTarget),aD=aE.find("h3");aE.removeClass("hover");if(!aE.hasClass("item-qiang")){aD.stop().animate({height:40,marginTop:5},{duration:200})}});var O=$("#_j_tn"),S=$("._j_tn_filter"),R=$("._j_filter_more"),ay=$("#_j_tn_content"),U=$("#_j_tn_nav");O.on("click","#_j_tn_nav li a",m).on("click","._j_tn_filter li a",aa);S.each(function(aD,aE){var aF=$(aE);new au({nav:aF,panel:aF.find(".dropdown-menu ul"),showCallback:function(aG,aH){aH.closest(".tn-dropdown").addClass("dropdown-open")},hideCallback:function(aG,aH){aH.closest(".tn-dropdown").removeClass("dropdown-open")}})});var al=$("#_j_tn_pagination"),i=ar("Pagination"),y=new i({total:600,pageSize:12,pageDisplayNum:9,container:al,tmpl:"#article_pagination",callback:F});ay.delegate("a","click",function(){var aH=$(this);var aD=aH.attr("href");try{if(aD.indexOf("/i/")>=0){var aG=aD.split("/");var aF=parseInt(aG[aG.length-1]);if(aF>0){mfwPageEvent("ginfo","index:recommend:list:click",({iid:aF,}))}}}catch(aE){}});function m(aF){var aG=$(aF.currentTarget),aD=aG.closest("li"),aE=aG.data("type");al.data("type",aE);aD.addClass("active").siblings().removeClass("active");S.each(function(aH,aJ){var aK=$(aJ);aK.find("li").each(function(aL,aM){if(aL===0){$(aM).addClass("active")}else{$(aM).removeClass("active")}});var aI=aK.find(".dropdown-trigger");aI.find("span").html(aI.data("title"))});y.loadPage(1)}function aa(aD){var aF=$(aD.currentTarget),aG=aF.data("key"),aE=aF.closest("._j_tn_filter");S.find('[data-key="'+aG+'"]').removeClass("active");aF.addClass("active");aE.find(".dropdown-trigger span").html(aF.text());aE.find("ul").hide();al.data("type","8");if(R.hasClass("up_")){R.trigger("click")}y.loadPage(1)}function F(aD){aD=aD||1;var aF={start:aD,type:al.data("type")},aE=S.find(".active");if(aF.type=="8"&&aE.length){aE.each(function(){aF[$(this).data("key")]=$(this).data("value")})}$.get("/ajax/ajax_article.php",aF,function(aG){if(aG.ret==1&&aG.html){ay.fadeOut(700,function(){ay.html(aG.html).show();$("html,body").animate({scrollTop:U.offset().top},1500)});if(aG.pagesize&&aG.recordcount){y.total=aG.recordcount;y.pageSize=aG.pagesize;y.drawPage()}}},"json")}(function(){if($("#_js_fengshou").length){$("html").addClass("h100per")}$("#_js_fsStep2").delegate(".i_know","click",function(aD){$("#_js_fengshou").fadeOut(function(){$("html").removeClass("h100per")})})}());(function(){var aD=$("._js_header_lantern");aD.each(function(aF,aG){var aE=$(aG);function aH(){aE.toggleClass("hover")}aE.data("timer",setInterval(aH,1000));aE.hover(function(){clearInterval(aE.data("timer"));aE.data("timer",null)},function(){aE.data("timer",setInterval(aH,1000))})})}())});(function(a){a.jGrowl=function(b,c){if(a("#jGrowl").size()==0){a('<div id="jGrowl"></div>').addClass((c&&c.position)?c.position:a.jGrowl.defaults.position).appendTo("body")}a("#jGrowl").jGrowl(b,c)};a.fn.jGrowl=function(b,d){if(a.isFunction(this.each)){var c=arguments;return this.each(function(){var e=this;if(a(this).data("jGrowl.instance")==undefined){a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl(),{notifications:[],element:null,interval:null}));a(this).data("jGrowl.instance").startup(this)}if(a.isFunction(a(this).data("jGrowl.instance")[b])){a(this).data("jGrowl.instance")[b].apply(a(this).data("jGrowl.instance"),a.makeArray(c).slice(1))}else{a(this).data("jGrowl.instance").create(b,d)}})}};a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:false,position:"top-right",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3000,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:true,closeTemplate:"&times;",closerTemplate:"<div>[ 关闭 ]</div>",log:function(c,b,d){},beforeOpen:function(c,b,d){},afterOpen:function(c,b,d){},open:function(c,b,d){},beforeClose:function(c,b,d){},close:function(c,b,d){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(b,c){var c=a.extend({},this.defaults,c);if(typeof c.speed!=="undefined"){c.openDuration=c.speed;c.closeDuration=c.speed}this.notifications.push({message:b,options:c});c.log.apply(this.element,[this.element,b,c])},render:function(d){var b=this;var c=d.message;var e=d.options;var d=a('<div class="jGrowl-notification '+e.themeState+" ui-corner-all"+((e.group!=undefined&&e.group!="")?" "+e.group:"")+'"><div class="jGrowl-close">'+e.closeTemplate+'</div><div class="jGrowl-header">'+e.header+'</div><div class="jGrowl-message">'+c+"</div></div>").data("jGrowl",e).addClass(e.theme).children("div.jGrowl-close").bind("click.jGrowl",function(){a(this).parent().trigger("jGrowl.close")}).parent();a(d).bind("mouseover.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",true)}).bind("mouseout.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",false)}).bind("jGrowl.beforeOpen",function(){if(e.beforeOpen.apply(d,[d,c,e,b.element])!=false){a(this).trigger("jGrowl.open")}}).bind("jGrowl.open",function(){if(e.open.apply(d,[d,c,e,b.element])!=false){if(e.glue=="after"){a("div.jGrowl-notification:last",b.element).after(d)}else{a("div.jGrowl-notification:first",b.element).before(d)}a(this).animate(e.animateOpen,e.openDuration,e.easing,function(){if(a.browser.msie&&(parseInt(a(this).css("opacity"),10)===1||parseInt(a(this).css("opacity"),10)===0)){this.style.removeAttribute("filter")}a(this).data("jGrowl").created=new Date();a(this).trigger("jGrowl.afterOpen")})}}).bind("jGrowl.afterOpen",function(){e.afterOpen.apply(d,[d,c,e,b.element])}).bind("jGrowl.beforeClose",function(){if(e.beforeClose.apply(d,[d,c,e,b.element])!=false){a(this).trigger("jGrowl.close")}}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",true);a(this).animate(e.animateClose,e.closeDuration,e.easing,function(){a(this).remove();var f=e.close.apply(d,[d,c,e,b.element]);if(a.isFunction(f)){f.apply(d,[d,c,e,b.element])}})}).trigger("jGrowl.beforeOpen");if(e.corners!=""&&a.fn.corner!=undefined){a(d).corner(e.corners)}if(a("div.jGrowl-notification:parent",b.element).size()>1&&a("div.jGrowl-closer",b.element).size()==0&&this.defaults.closer!=false){a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(b.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose");if(a.isFunction(b.defaults.closer)){b.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])}})}},update:function(){a(this.element).find("div.jGrowl-notification:parent").each(function(){if(a(this).data("jGrowl")!=undefined&&a(this).data("jGrowl").created!=undefined&&(a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life))<(new Date()).getTime()&&a(this).data("jGrowl").sticky!=true&&(a(this).data("jGrowl.pause")==undefined||a(this).data("jGrowl.pause")!=true)){a(this).trigger("jGrowl.beforeClose")}});if(this.notifications.length>0&&(this.defaults.pool==0||a(this.element).find("div.jGrowl-notification:parent").size()<this.defaults.pool)){this.render(this.notifications.shift())}if(a(this.element).find("div.jGrowl-notification:parent").size()<2){a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})}},startup:function(b){this.element=a(b).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');this.interval=setInterval(function(){a(b).data("jGrowl.instance").update()},parseInt(this.defaults.check));if(a.browser.msie&&parseInt(a.browser.version)<7&&!window.XMLHttpRequest){a(this.element).addClass("ie6")}},shutdown:function(){a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();clearInterval(this.interval)},close:function(){a(this.element).find("div.jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}});a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults})(jQuery);if(window.M&&typeof window.M.define=="function"){window.M.define("jq-jgrowl",function(){return jQuery})}M.closure(function(e){var q=e("Storage"),b=1000,p=10000,r=40000,d=120000;$(function(){if(window.Env&&window.Env.UID>0||window.__mfw_uid>0){setTimeout(l,b)}else{setTimeout(j,p)}$("body").delegate(".jGrowl-closer","click",function(t){$.getJSON("/ajax/ajax_msg.php",{a:"closetip"});q.setItem("jgrowl_close_time",+new Date())});M.Event.on("update msg",function(){setTimeout(function(){s();q.setItem("update_msg",+new Date())},1)});q.on("update_msg",function(t){s()});function s(){if(window.Env&&window.Env.UID>0||window.__mfw_uid>0){n("msgdisplay")}else{n("nologinfeed")}}});function l(){setInterval(function(){M.windowFocused&&n("msgdisplay")},r)}function j(){var t,s=1;M.windowFocused&&n("nologinfeed");t=setInterval(function(){M.windowFocused&&n("nologinfeed");s++;if(s==3){clearInterval(t)}},d)}function n(s){$.get("/ajax/ajax_msg.php?a="+s,function(t){if(t){m(t)}},"json")}function m(s){g();M.Event.fire("get new msg",s);if(s.msg){k()}if(s.tips&&!i()){a(s)}}e("jq-jgrowl");function a(s){var t=s.tips.split(s.split_char);M.forEach(t,function(v,u){if(v){setTimeout(function(){$.jGrowl(v,{header:"新鲜事：",closer:false,life:20000})},2000*u+10)}})}function i(){var t=q.getItem("jgrowl_close_time"),s=+new Date();if(t&&s-t<24*60*60*1000){return true}return false}var c,f=0,h=1000,o=document.title;function k(){g();c=setInterval(function(){f++;document.title=f%2===0?"【　　　】 - "+o:"【新消息】 - "+o},h)}function g(){clearInterval(c);document.title=o}});M.define("FrequencyVerifyControl",function(c,b,d){function a(e){this.container=e.container;this.app=e.app;this.successHandler=$.noop;M.mix(this,e);this.init()}a.prototype={init:function(){this.initData();this.refreshImg();this.verifyCon.delegate("img,._j_change_img","click",$.proxy(function(e){this.refreshImg()},this));this.verifyCon.delegate("._j_fre_confirm","click",$.proxy(function(g){var f=this.verifyText.val();var e=$(g.currentTarget);if(e.hasClass("waiting")){return false}e.addClass("waiting");$.get("/note/ajax_any.php",{sAction:"verifyCode",sCode:f,iApp:this.app},$.proxy(function(h){if(!h.error){if(h.payload&&h.payload.ret==1){this.successHandler(this.target);this.verifyCon.hide()}else{this.verifyText.val("");this.verifyText.focus();this.refreshImg()}this.hideErro()}else{if(h.error.errno==10100){this.showErro("错误次数过多，请稍候尝试")}}e.removeClass("waiting")},this),"json")},this));this.verifyCon.delegate("._j_fre_text","keyup",$.proxy(function(e){if(e.keyCode==13){this.verifyCon.find("._j_fre_confirm").trigger("click")}},this))},showErro:function(e){this.errorCon.html(e);this.errorCon.show()},hideErro:function(){this.errorCon.hide()},initData:function(){this.verifyCon=this.container;this.verifyPo=this.verifyCon.find(".protectedYZM");this.verifyImg=this.verifyCon.find("img");this.verifyText=this.verifyCon.find("._j_fre_text");this.errorCon=this.verifyPo.find(".n-error")},refreshImg:function(){var e="/note/ajax_any.php?sAction=getCode&iApp="+this.app+"&s="+new Date().getTime();this.verifyImg.attr("src",e)}};d.exports=a});M.define("FrequencySystemVerify",function(f,e,g){var b=f("dialog/Dialog"),h=f("dialog/Layer"),d=f("FrequencyVerifyControl");var a='<div class="popYzm" style="z-index:inherit;position: relative;width:350px;height: 250px"><div class="protectedYZM" style="border: none;box-shadow: none;padding:25px 15px;"><p>亲爱的蜂蜂，你操作的速度有点像机器人<br>来证明下自己吧~</p><div class="YZMInput"><input class="_j_fre_text" type="text" placeHolder="验证码"></div><div class="YZMInput"><img src="http://images.mafengwo.net/images/home_new2015/verify.gif" width="150px" height="40px"><label><a href="javascript:void(0);" class="_j_change_img">看不清，换一张</a></label></div><div class="YZMSubmit"><a href="javascript:void(0);" class="_j_fre_confirm" title="确定">确定</a><span class="n-error">错误次数过多，请稍候尝试</span></div></div></div>';function c(i){this.app=i.app;this.init()}c.prototype={init:function(){var i=new b({content:a});if(h.getActive()){i.getLayer().setZIndex(h.getActive().getZIndex()+1)}i.show();var j=i.getPanel().find(".popYzm");new d({container:j,app:this.app,successHandler:$.proxy(function(){M.Event.fire("frequency:system:verify:success");i.close()},this)})}};g.exports=c});M.closure(function(d){var b=d("dialog/Dialog"),c=d("FrequencySystemVerify");window.show_login=a;$.ajaxSetup({dataFilter:function(h,g){try{var j=$.parseJSON(h);if(j&&j.unsafe==1){window.location.href="http://www.mafengwo.cn";return"{}"}if(j&&j.error&&j.error.msg=="login:required"){M.Event.fire("login:required");return"{}"}if(j&&j.resource&&j.resource.onload&&j.resource.onload.length){if(j.resource.onload[0]=='K.fire("login:required");'){M.Event.fire("login:required");return"{}"}}if(j&&j.error){var f=0;var k=0;if(typeof(j.error.errno)!=="undefined"){f=j.error.errno;k=j.error.error}else{if(typeof(j.error.code)!=="undefined"){f=j.error.code;k=j.error.msg}}if(f===10000){M.Event.fire("frequency:verify",k);return"{}"}}}catch(i){}return h}});var e=null;function a(){if($.browser.msie&&parseInt($.browser.version,10)<9){document.location.href=(window.Env&&window.Env.P_HTTP)||"https://passport.mafengwo.cn";return}if(!e){e=new b({content:'<iframe frameborder="no" border="0" scrolling="no" width="580" height="292" allowtransparency="true"></iframe>',background:"#aaa",bgOpacity:0.6,reposition:true})}e.show();if(!e.getPanel().find("iframe").attr("src")){M.Event(e).once("aftershow",function(){var f=window.Env.P_HTTP||"https://passport.mafengwo.cn";e.getPanel().find("iframe").attr("src",f+"/login-popup.html")})}}M.Event.on("login:required",a);M.Event.on("frequency:verify",function(f){new c({app:f})});if(M.Event.isFired("login:required")){a()}});M.define("ScrollObserver",function(e,g,c){var h=0,f={},a=false,b,d=true;g.addObserver=function(k){var j="ScrollObserver_"+h;h++;f[j]=k;d=false;return j};g.removeObserver=function(j){delete f[j];if(M.isEmpty(f)){d=true}};function i(){for(var j in f){if(f.hasOwnProperty(j)){f[j]()}}}$(window).scroll(function(){if(d){return}if(!a){b=setInterval(function(){if(a){a=false;clearTimeout(b);i()}},50)}a=true});return g});M.define("QRCode",function(b,a,c){c.exports={gen:function(e,d){var d={text:e,size:d.size||200,eclevel:d.evlevel||"H",logo:d.logo||"",__stk__:window.Env.CSTK};return"http://"+window.Env.WWW_HOST+"/qrcode.php?"+$.param(d)}}});