function RGBToHex(e){for(var a=/[0-9]{0,3}/g,i=e.match(a),t="#",n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],l=0;l<i.length;l++){for(var r=null,d=i[l],s=d,o=[];d>16;)r=d%16,d=d/16>>0,o.push(n[r]);o.push(n[d]),s<16&&""!=s&&o.push(0),t+=o.reverse().join("")}return t}$(function(){function e(){var e=$("#navbar .active");e.find("div").addClass("navbar-ul-li-div").parent().next().css("height",n-264).children().show("slow"),$("#navbar li:not(.active)").find("div").removeClass("navbar-ul-li-div").parent().next().css("height",0).children().hide();var l=e.data("value");"red"==l?($('[class|="div-canvas"]').hide(),a(100),$(".div-canvas-red").fadeIn()):"green"==l?($('[class|="div-canvas"]').hide(),i(100),$(".div-canvas-green").fadeIn()):"blue"==l?($('[class|="div-canvas"]').hide(),t(100),$(".div-canvas-blue").fadeIn()):"custom"==l&&$('[class|="div-canvas"]').hide()}function a(e){var a=document.getElementById("canvas-red"),i=a.getContext("2d");i.clearRect(0,0,512,512);for(var t=0;t<512;t+=2)for(var n=0;n<512;n+=2)i.fillStyle="rgb("+e+","+t/2+","+n/2+")",i.fillRect(t,n,2,2)}function i(e){var a=document.getElementById("canvas-green"),i=a.getContext("2d");i.clearRect(0,0,512,512);for(var t=0;t<512;t+=2)for(var n=0;n<512;n+=2)i.fillStyle="rgb("+t/2+","+e+","+n/2+")",i.fillRect(t,n,2,2)}function t(e){var a=document.getElementById("canvas-blue"),i=a.getContext("2d");i.clearRect(0,0,512,512);for(var t=0;t<512;t+=2)for(var n=0;n<512;n+=2)i.fillStyle="rgb("+t/2+","+n/2+","+e+")",i.fillRect(t,n,2,2)}var n=document.body.clientHeight;e(),$(window).resize(function(){n=document.body.clientHeight}),$("#header").find(".glyphicon-plus").click(function(){$(this).toggleClass("bars-rotate"),$("#navbar").toggleClass("navbar-width"),$(".div-canvas-red,.div-canvas-green,.div-canvas-blue").toggleClass("marginRight")}),$("#navbar").find("ul li button").hover(function(){$(this).prev().addClass("navbar-ul-li-div")},function(){$(this).parent().hasClass("active")||$(this).prev().removeClass("navbar-ul-li-div")}),$("#navbar").find("ul li button").click(function(){var a=$(this).parent();a.hasClass("active")?(a.removeClass("active"),e()):($("#navbar .active").removeClass("active"),a.addClass("active"),e())}),$("#redSlider").slider({classes:{"ui-slider":"ui-slider","ui-slider-handle":"ui-slider-handle-red","ui-slider-range":"ui-slider-range-red"},orientation:"vertical",range:"min",min:0,max:255,value:100,slide:function(e,i){a(i.value);var t=$(e.target);t.find(".ui-slider-handle").text(i.value)},create:function(e,a){var i=$(e.target);i.find(".ui-slider-handle").text("100")}}),$("#greenSlider").slider({classes:{"ui-slider":"ui-slider","ui-slider-handle":"ui-slider-handle-green","ui-slider-range":"ui-slider-range-green"},orientation:"vertical",range:"min",min:0,max:255,value:100,slide:function(e,a){i(a.value);var t=$(e.target);t.find(".ui-slider-handle").text(a.value)},create:function(e,a){var i=$(e.target);i.find(".ui-slider-handle").text("100")}}),$("#blueSlider").slider({classes:{"ui-slider":"ui-slider","ui-slider-handle":"ui-slider-handle-blue","ui-slider-range":"ui-slider-range-blue"},orientation:"vertical",range:"min",min:0,max:255,value:100,slide:function(e,a){t(a.value);var i=$(e.target);i.find(".ui-slider-handle").text(a.value)},create:function(e,a){var i=$(e.target);i.find(".ui-slider-handle").text("100")}}),$("#canvas-red,#canvas-green,#canvas-blue").click(function(e){var a,i,t,n,l,r,d,s,o,c=$("#navbar .active").data("value");console.log(c),"red"==c?(a=document.getElementById("canvas-red"),i=a.getBoundingClientRect(),t=e.clientX-i.left*(a.width/i.width),n=e.clientY-i.top*(a.height/i.height),l=$("#redSlider").find(".ui-slider-handle").text(),$("body").css("backgroundColor","rgb("+l+","+Math.floor(t/2)+","+Math.floor(n/2)+")"),s="RGB("+l+","+Math.floor(t/2)+","+Math.floor(n/2)+")"):"green"==c?(a=document.getElementById("canvas-green"),i=a.getBoundingClientRect(),t=e.clientX-i.left*(a.width/i.width),n=e.clientY-i.top*(a.height/i.height),r=$("#greenSlider").find(".ui-slider-handle").text(),$("body").css("backgroundColor","rgb("+Math.floor(t/2)+","+r+","+Math.floor(n/2)+")"),s="RGB("+Math.floor(t/2)+","+r+","+Math.floor(n/2)+")"):"blue"==c&&(a=document.getElementById("canvas-blue"),i=a.getBoundingClientRect(),t=e.clientX-i.left*(a.width/i.width),n=e.clientY-i.top*(a.height/i.height),d=$("#blueSlider").find(".ui-slider-handle").text(),$("body").css("backgroundColor","rgb("+Math.floor(t/2)+","+Math.floor(n/2)+","+d+")"),s="RGB("+Math.floor(t/2)+","+Math.floor(n/2)+","+d+")"),o=RGBToHex(s),$(".colorValue").html(s+"<br>"+o)})});