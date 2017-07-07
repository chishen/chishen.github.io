/**
 * Created by Administrator on 2016/11/29.
 */
$(function () {
    var HEIGHT = document.body.clientHeight;
    active();
    function active() {
        var $active = $('#navbar .active');
        $active.find('div').addClass('navbar-ul-li-div').parent().next().css('height',HEIGHT - 264).children().show('slow');
        $('#navbar li:not(.active)').find('div').removeClass('navbar-ul-li-div').parent().next().css('height',0).children().hide();
        var data = $active.data('value');
        if(data == 'red'){
            $('[class|="div-canvas"]').hide();
            canvasRed(100);
            $('.div-canvas-red').fadeIn();
        }else if(data == 'green'){
            $('[class|="div-canvas"]').hide();
            canvasGreen(100);
            $('.div-canvas-green').fadeIn();
        }else if(data == 'blue'){
            $('[class|="div-canvas"]').hide();
            canvasBlue(100);
            $('.div-canvas-blue').fadeIn();
        }else if(data == 'custom'){
            $('[class|="div-canvas"]').hide();
        }
    }
    //窗口大小变化事件
    $(window).resize(function () {
        HEIGHT = document.body.clientHeight;
    });
    //点击关闭按钮事件
    $('#header').find('.glyphicon-plus').click(function (){
        $(this).toggleClass('bars-rotate');
        $('#navbar').toggleClass('navbar-width');
        $('.div-canvas-red,.div-canvas-green,.div-canvas-blue').toggleClass('marginRight');
    });
    //菜单栏悬浮事件
    $('#navbar').find('ul li button').hover(function () {
        $(this).prev().addClass('navbar-ul-li-div');
    },function () {
        if(!$(this).parent().hasClass('active')){
            $(this).prev().removeClass('navbar-ul-li-div');
        }
    });
    //菜单栏点击事件
    $('#navbar').find('ul li button').click(function () {
        var $li = $(this).parent();
        if($li.hasClass('active')){
            $li.removeClass('active');
            active();
        }else{
            $('#navbar .active').removeClass('active');
            $li.addClass('active');
            active();
        }
    });
    //红色slider事件
    $('#redSlider').slider({
        classes: {
            'ui-slider': 'ui-slider',
            'ui-slider-handle': 'ui-slider-handle-red',
            'ui-slider-range': 'ui-slider-range-red'
        },
        orientation: 'vertical',
        range: 'min',
        min: 0,
        max: 255,
        value: 100,
        slide: function( event, ui ) {
            canvasRed(ui.value);
            var $this = $(event.target);
            $this.find('.ui-slider-handle').text(ui.value);
        },
        create: function( event, ui ) {
            var $this = $(event.target);
            $this.find('.ui-slider-handle').text('100');
        }
    });

    //绿色slider事件
    $('#greenSlider').slider({
        classes: {
            'ui-slider': 'ui-slider',
            'ui-slider-handle': 'ui-slider-handle-green',
            'ui-slider-range': 'ui-slider-range-green'
        },
        orientation: 'vertical',
        range: 'min',
        min: 0,
        max: 255,
        value: 100,
        slide: function( event, ui ) {
            canvasGreen(ui.value);
            var $this = $(event.target);
            $this.find('.ui-slider-handle').text(ui.value);
        },
        create: function( event, ui ) {
            var $this = $(event.target);
            $this.find('.ui-slider-handle').text('100');
        }
    });

    //蓝色slider事件
    $('#blueSlider').slider({
        classes: {
            'ui-slider': 'ui-slider',
            'ui-slider-handle': 'ui-slider-handle-blue',
            'ui-slider-range': 'ui-slider-range-blue'
        },
        orientation: 'vertical',
        range: 'min',
        min: 0,
        max: 255,
        value: 100,
        slide: function( event, ui ) {
            canvasBlue(ui.value);
            var $this = $(event.target);
            $this.find('.ui-slider-handle').text(ui.value);
        },
        create: function( event, ui ) {
            var $this = $(event.target);
            $this.find('.ui-slider-handle').text('100');
        }
    });

    //绘制画布red
    function canvasRed(red){
        var canvas = document.getElementById('canvas-red');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,512,512);
        for(var x = 0; x < 512; x += 2){
            for(var y = 0; y < 512; y += 2){
                context.fillStyle = 'rgb('+red+','+x/2+','+y/2+')';
                context.fillRect(x,y,2,2);
            }
        }
    }

    //绘制画布green
    function canvasGreen(green){
        var canvas = document.getElementById('canvas-green');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,512,512);
        for(var x = 0; x < 512; x += 2){
            for(var y = 0; y < 512; y += 2){
                context.fillStyle = 'rgb('+x/2+','+green+','+y/2+')';
                context.fillRect(x,y,2,2);
            }
        }
    }

    //绘制画布blue
    function canvasBlue(blue){
        var canvas = document.getElementById('canvas-blue');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,512,512);
        for(var x = 0; x < 512; x += 2){
            for(var y = 0; y < 512; y += 2){
                context.fillStyle = 'rgb('+x/2+','+y/2+','+blue+')';
                context.fillRect(x,y,2,2);
            }
        }
    }

    //画布点击事件
    $('#canvas-red,#canvas-green,#canvas-blue').click(function (e) {
        var dataValue = $('#navbar .active').data('value');
        var canvas,box,x,y,red,green,blue,rgb,hex;
        console.log(dataValue);
        if(dataValue == 'red'){
            canvas = document.getElementById('canvas-red');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            red = $('#redSlider').find('.ui-slider-handle').text();
            $('body').css('backgroundColor','rgb('+red+','+Math.floor(x/2)+','+Math.floor(y/2)+')');
            rgb = 'RGB('+red+','+Math.floor(x/2)+','+Math.floor(y/2)+')';
        }else if(dataValue == 'green'){
            canvas = document.getElementById('canvas-green');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            green = $('#greenSlider').find('.ui-slider-handle').text();
            $('body').css('backgroundColor','rgb('+Math.floor(x/2)+','+green+','+Math.floor(y/2)+')');
            rgb = 'RGB('+Math.floor(x/2)+','+green+','+Math.floor(y/2)+')';
        }else if(dataValue == 'blue'){
            canvas = document.getElementById('canvas-blue');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            blue = $('#blueSlider').find('.ui-slider-handle').text();
            $('body').css('backgroundColor','rgb('+Math.floor(x/2)+','+Math.floor(y/2)+','+blue+')');
            rgb = 'RGB('+Math.floor(x/2)+','+Math.floor(y/2)+','+blue+')';
        }
        hex = RGBToHex(rgb);
        $('.colorValue').html(rgb + '<br>' + hex);
    });
});
/*RGB颜色转换为16进制*/
function RGBToHex(rgb){
    var regexp = /[0-9]{0,3}/g;
    var re = rgb.match(regexp);//利用正则表达式去掉多余的部分，将rgb中的数字提取
    var hexColor = "#";
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (var i = 0; i < re.length; i++) {
        var r = null, c = re[i], l = c;
        var hexAr = [];
        while (c > 16){
            r = c % 16;
            c = (c / 16) >> 0;
            hexAr.push(hex[r]);
        } hexAr.push(hex[c]);
        if(l < 16&&l != ""){
            hexAr.push(0)
        }
        hexColor += hexAr.reverse().join('');
    }
    return hexColor;
}