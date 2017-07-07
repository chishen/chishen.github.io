$(function(){
    canvasHue(0,1);
    //点击关闭按钮事件
    $('#header').find('.glyphicon-plus').click(function (){
        $(this).toggleClass('bars-rotate');
        $('.navbar').toggleClass('navbar-width');
        $('.div-canvas-hue,.div-canvas-saturation,.div-canvas-lightness').toggleClass('marginRight');
    });
    //tab键切换事件
    $('.tab').on('click','div',function () {
        $('.tab div').removeClass('active');
        $(this).addClass('active');
        if($(this).data('value') === 'hue'){
            $('.div-canvas-saturation,.div-canvas-lightness,#saturation,#lightness').hide();
            $('.div-canvas-hue,#hue').show();
            var $hue = $('#hue');
            canvasHue($hue.find('.slider-hue .drag-button b').text(),$hue.find('.slider-alpha .drag-button b').text());
        }else if($(this).data('value') === 'saturation'){
            $('.div-canvas-hue,.div-canvas-lightness,#hue,#lightness').hide();
            $('.div-canvas-saturation,#saturation').show();
            var $saturation = $('#saturation');
            canvasSaturation($saturation.find('.slider-saturation .drag-button b').text(),$saturation.find('.slider-alpha .drag-button b').text());
        }else if($(this).data('value') === 'lightness'){
            $('.div-canvas-hue,.div-canvas-saturation,#hue,#saturation').hide();
            $('.div-canvas-lightness,#lightness').show();
            var $lightness = $('#lightness');
            canvasLightness($lightness.find('.slider-lightness .drag-button b').text(),$lightness.find('.slider-alpha .drag-button b').text());
        }
    });
    //规定drag-button在父元素内垂直拖动
    $('.drag-button').draggable({
        axis: 'y',
        containment: 'parent'
    });
    //色调slider拖动事件
    $('#hue').find('.slider-hue .drag-button').on('drag', function(){
        var position = $(this).position();
        var marginTop = position.top;
        $(this).find('b').text(359-marginTop);
        canvasHue($(this).find('b').text(),$('#hue').find('.slider-alpha .drag-button b').text());
    });
    //饱和度slider拖动事件
    $('#saturation').find('.slider-saturation .drag-button').on('drag', function(){
        var position = $(this).position();
        var marginTop = position.top;
        $(this).find('b').text(Math.floor((300-marginTop)/3));
        canvasSaturation($(this).find('b').text(),$('#saturation').find('.slider-alpha .drag-button b').text());
    });
    //亮度slider拖动事件
    $('#lightness').find('.slider-lightness .drag-button').on('drag', function(){
        var position = $(this).position();
        var marginTop = position.top;
        $(this).find('b').text(Math.floor((300-marginTop)/3));
        canvasLightness($(this).find('b').text(),$('#lightness').find('.slider-alpha .drag-button b').text());
    });
    //透明度slider拖动事件
    $('.slider-alpha .drag-button').on('drag', function(){
        var position = $(this).position();
        var marginTop = position.top;
        $(this).find('b').text(Math.floor((300-marginTop)/3)/100);
        var dataValue = $('.tab .active').data('value');
        if(dataValue == 'hue'){
            canvasHue($('#hue').find('.slider-hue .drag-button b').text(),$(this).find('b').text());
        }else if(dataValue == 'saturation'){
            canvasSaturation($('#saturation').find('.slider-saturation .drag-button b').text(),$(this).find('b').text());
        }else if(dataValue == 'lightness'){
            canvasLightness($('#lightness').find('.slider-lightness .drag-button b').text(),$(this).find('b').text());
        }
    });
    //色调增大事件
    $('#hue').find('.slider-hue .glyphicon-plus').on('click', function(){
        var $hue = $('#hue');
        var dragButton = $hue.find('.slider-hue .drag-button');
        var marginTop = dragButton.position().top;
        if(marginTop > 0){
            dragButton.css({'top': marginTop - 1}).find('b').text(360-marginTop);
        }else if(marginTop <= 0){
            dragButton.css({'top': 0}).find('b').text(359);
        }
        canvasHue(dragButton.find('b').text(),$hue.find('.slider-alpha .drag-button b').text());
    });
    //色调减小事件
    $('#hue').find('.slider-hue .glyphicon-minus').on('click', function(){
        var $hue = $('#hue');
        var dragButton = $hue.find('.slider-hue .drag-button');
        var marginTop = dragButton.position().top;
        if(marginTop < 359){
            dragButton.css({'top': marginTop + 1}).find('b').text(358-marginTop);
        }else if(marginTop >= 359){
            dragButton.css({'top': 359}).find('b').text(0);
        }
        canvasHue(dragButton.find('b').text(),$hue.find('.slider-alpha .drag-button b').text());
    });
    //饱和度增大事件
    $('#saturation').find('.slider-saturation .glyphicon-plus').on('click', function(){
        var $saturation = $('#saturation');
        var $dragButton = $saturation.find('.slider-saturation .drag-button');
        var marginTop = $dragButton.position().top;
        var top = parseInt((marginTop-3)/3)*3;
        if(top > 0){
            $dragButton.css({'top': top}).find('b').text((100-top/3));
        }else if(top <= 0){
            $dragButton.css({'top': 0}).find('b').text(100);
        }
        canvasSaturation($dragButton.find('b').text(),$saturation.find('.slider-alpha .drag-button b').text());
    });
    //饱和度减小事件
    $('#saturation').find('.slider-saturation .glyphicon-minus').on('click', function(){
        var $saturation = $('#saturation');
        var $dragButton = $saturation.find('.slider-saturation .drag-button');
        var marginTop = $dragButton.position().top;
        var top = parseInt((marginTop+3)/3)*3;
        if(top < 300){
            $dragButton.css({'top': top}).find('b').text((100-top/3));
        }else if(top >= 300){
            $dragButton.css({'top': 300}).find('b').text(0);
        }
        canvasSaturation($dragButton.find('b').text(),$saturation.find('.slider-alpha .drag-button b').text());
    });
    //亮度增大事件
    $('#lightness').find('.slider-lightness .glyphicon-plus').on('click', function(){
        var $lightness = $('#lightness');
        var $dragButton = $lightness.find('.slider-lightness .drag-button');
        var marginTop = $dragButton.position().top;
        var top = parseInt((marginTop-3)/3)*3;
        if(top > 0){
            $dragButton.css({'top': top}).find('b').text((100-top/3));
        }else if(top <= 0){
            $dragButton.css({'top': 0}).find('b').text(100);
        }
        canvasLightness($dragButton.find('b').text(),$lightness.find('.slider-alpha .drag-button b').text());
    });
    //亮度减小事件
    $('#lightness').find('.slider-lightness .glyphicon-minus').on('click', function(){
        var $lightness = $('#lightness');
        var $dragButton = $lightness.find('.slider-lightness .drag-button');
        var marginTop = $dragButton.position().top;
        var top = parseInt((marginTop+3)/3)*3;
        console.log(top);
        if(top < 300){
            $dragButton.css({
                'top': top
            }).find('b').text((100-top/3));
        }else if(top >= 300){
            $dragButton.css({
                'top': 300
            }).find('b').text(0);
        }
        canvasLightness($dragButton.find('b').text(),$lightness.find('.slider-alpha .drag-button b').text());
    });
    //透明度增大事件
    $('.slider-alpha .glyphicon-plus').on('click', function(){
        var dataValue = $('.tab .active').data('value');
        if(dataValue == 'hue'){
            var $hue = $('#hue');
            var $dragButton = $hue.find('.slider-alpha .drag-button');
            var marginTop = $dragButton.position().top;
            var top = parseInt((marginTop-3)/3)*3;
            if(top > 0){
                $dragButton.css({'top': top}).find('b').text((1-top/300).toFixed(2));
            }else if(top <= 0){
                $dragButton.css({'top': 0}).find('b').text(1);
            }
            canvasHue($hue.find('.slider-hue .drag-button b').text(),$dragButton.find('b').text());
        }else if(dataValue == 'saturation'){
            var $saturation = $('#saturation');
            var $dragButton = $saturation.find('.slider-alpha .drag-button');
            var marginTop = $dragButton.position().top;
            var top = parseInt((marginTop-3)/3)*3;
            if(top > 0){
                $dragButton.css({'top': top}).find('b').text((1-top/300).toFixed(2));
            }else if(top <= 0){
                $dragButton.css({'top': 0}).find('b').text(1);
            }
            canvasSaturation($saturation.find('.slider-saturation .drag-button b').text(),$dragButton.find('b').text());
        }else if(dataValue == 'lightness'){
            var $lightness = $('#lightness');
            var $dragButton = $lightness.find('.slider-alpha .drag-button');
            var marginTop = $dragButton.position().top;
            var top = parseInt((marginTop-3)/3)*3;
            if(top > 0){
                $dragButton.css({'top': top}).find('b').text((1-top/300).toFixed(2));
            }else if(top <= 0){
                $dragButton.css({'top': 0}).find('b').text(1);
            }
            canvasLightness($lightness.find('.slider-lightness .drag-button b').text(),$dragButton.find('b').text());
        }
     });
    //透明度减小事件
    $('.slider-alpha .glyphicon-minus').on('click', function(){
        var dataValue = $('.tab .active').data('value');
        if(dataValue == 'hue'){
            var $hue = $('#hue');
            var $dragButton = $hue.find('.slider-alpha .drag-button');
            var marginTop = $dragButton.position().top;
            var top = parseInt((marginTop+3)/3)*3;
            if(top < 300){
                $dragButton.css({'top': top}).find('b').text((1-top/300).toFixed(2));
            }else if(top >= 300){
                $dragButton.css({'top': 300}).find('b').text(0);
            }
            canvasHue($hue.find('.slider-hue .drag-button b').text(),$dragButton.find('b').text());
        }else if(dataValue == 'saturation'){
            var $saturation = $('#saturation');
            var $dragButton = $saturation.find('.slider-alpha .drag-button');
            var marginTop = $dragButton.position().top;
            var top = parseInt((marginTop+3)/3)*3;
            if(top < 300){
                $dragButton.css({'top': top}).find('b').text((1-top/300).toFixed(2));
            }else if(top >= 300){
                $dragButton.css({'top': 300}).find('b').text(0);
            }
            canvasSaturation($saturation.find('.slider-saturation .drag-button b').text(),$dragButton.find('b').text());
        }else if(dataValue == 'lightness'){
            var $lightness = $('#lightness');
            var $dragButton = $lightness.find('.slider-alpha .drag-button');
            var marginTop = $dragButton.position().top;
            var top = parseInt((marginTop+3)/3)*3;
            if(top < 300){
                $dragButton.css({'top': top}).find('b').text((1-top/300).toFixed(2));
            }else if(top >= 300){
                $dragButton.css({'top': 300}).find('b').text(0);
            }
            canvasLightness($lightness.find('.slider-lightness .drag-button b').text(),$dragButton.find('b').text());
        }
    });
    //绘制画布Hue
    function canvasHue(hue,alpha){
        var canvas = document.getElementById('canvas-hue');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,404,404);
        for(var x = 0; x <= 400; x += 4){
            for(var y = 0; y <= 400; y += 4){
                context.fillStyle = "hsla("+hue+","+(x/4)+"%,"+(y/4)+"%,"+alpha+")";
                context.fillRect(x,y,4,4);
            }
        }
    }
    //绘制画布Saturation
    function canvasSaturation(saturation,alpha){
        var canvas = document.getElementById('canvas-saturation');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,720,404);
        for(var x = 0; x < 720; x += 2){
            for(var y = 0; y <= 400; y += 4){
                context.fillStyle = "hsla("+(x/2)+","+saturation+"%,"+(y/4)+"%,"+alpha+")";
                context.fillRect(x,y,2,4);
            }
        }
    }
    //绘制画布Lightness
    function canvasLightness(lightness,alpha){
        var canvas = document.getElementById('canvas-lightness');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,720,404);
        for(var x = 0; x < 720; x += 2){
            for(var y = 0; y <= 400; y += 4){
                context.fillStyle = "hsla("+(x/2)+","+(y/4)+"%,"+lightness+"%,"+alpha+")";
                context.fillRect(x,y,2,4);
            }
        }
    }
    //鼠标在画布上移动事件
    $('#canvas-hue,#canvas-saturation,#canvas-lightness').mousemove(function(e){
        $('#div-color-magnifier').hide();
        var dataValue = $('.tab .active').data('value');
        var canvas,box,x,y,h,s,l,a;
        if(dataValue == 'hue'){
            var $hue = $('#hue');
            canvas = document.getElementById('canvas-hue');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            h = $hue.find('.slider-hue .drag-button b').text();
            a = $hue.find('.slider-alpha .drag-button b').text();
            $('#div-color-magnifier').css({
                'left':e.clientX,
                'top':e.clientY
            }).find('#color-magnifier')
                .css('backgroundColor',"hsla("+h+","+Math.floor(x/4)+"%,"+Math.floor(y/4)+"%,"+a+")")
                .parent().show();
        }else if(dataValue == 'saturation'){
            var $saturation = $('#saturation');
            canvas = document.getElementById('canvas-saturation');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            s = $saturation.find('.slider-saturation .drag-button b').text();
            a = $saturation.find('.slider-alpha .drag-button b').text();
            $('#div-color-magnifier').css({
                'left':e.clientX,
                'top':e.clientY
            }).find('#color-magnifier')
                .css('backgroundColor',"hsla("+Math.floor(x/2)+","+s+"%,"+Math.floor(y/4)+"%,"+a+")")
                .parent().show();
        }else if(dataValue == 'lightness'){
            var $lightness = $('#lightness');
            canvas = document.getElementById('canvas-lightness');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            l = $lightness.find('.slider-lightness .drag-button b').text();
            a = $lightness.find('.slider-alpha .drag-button b').text();
            $('#div-color-magnifier').css({
                'left':e.clientX,
                'top':e.clientY
            }).find('#color-magnifier')
                .css('backgroundColor',"hsla("+Math.floor(x/2)+","+Math.floor(y/4)+"%,"+l+"%,"+a+")")
                .parent().show();
        }
    });
    //画布中颜色点击事件
    $('#canvas-hue,#canvas-saturation,#canvas-lightness').click(function(e){
        var dataValue = $('.tab .active').data('value');
        var canvas,box,x,y,h,s,l,a;
        if(dataValue == 'hue'){
            var $hue = $('#hue');
            canvas = document.getElementById('canvas-hue');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            h = $hue.find('.slider-hue .drag-button b').text();
            a = $hue.find('.slider-alpha .drag-button b').text();
            $('body').css('backgroundColor',"hsla("+h+","+Math.floor(x/4)+"%,"+Math.floor(y/4)+"%,"+a+")");
            $('#color-value').text("hsla("+h+","+Math.floor(x/4)+"%,"+Math.floor(y/4)+"%,"+a+")");
            $hue.find('.gradient-alpha').css('background','linear-gradient(hsla('+h+',100%,50%,1),hsla('+h+',100%,50%,0))');
        }else if(dataValue == 'saturation'){
            var $saturation = $('#saturation');
            canvas = document.getElementById('canvas-saturation');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            s = $saturation.find('.slider-saturation .drag-button b').text();
            a = $saturation.find('.slider-alpha .drag-button b').text();
            $('body').css('backgroundColor',"hsla("+Math.floor(x/2)+","+s+"%,"+Math.floor(y/4)+"%,"+a+")");
            $('#color-value').text("hsla("+Math.floor(x/2)+","+s+"%,"+Math.floor(y/4)+"%,"+a+")");
            $saturation.find('.gradient-saturation').css('background','linear-gradient(hsla('+Math.floor(x/2)+',100%,50%,1),hsla('+Math.floor(x/2)+',0%,50%,1))');
            $saturation.find('.gradient-alpha').css('background','linear-gradient(hsla('+Math.floor(x/2)+',100%,50%,1),hsla('+Math.floor(x/2)+',100%,50%,0))');
        }else if(dataValue == 'lightness'){
            var $lightness = $('#lightness');
            canvas = document.getElementById('canvas-lightness');
            box = canvas.getBoundingClientRect();
            x =  e.clientX - box.left * (canvas.width/box.width);
            y = e.clientY - box.top * (canvas.height/box.height);
            l = $lightness.find('.slider-lightness .drag-button b').text();
            a = $lightness.find('.slider-alpha .drag-button b').text();
            $('body').css('backgroundColor',"hsla("+Math.floor(x/2)+","+Math.floor(y/4)+"%,"+l+"%,"+a+")");
            $('#color-value').text("hsla("+Math.floor(x/2)+","+Math.floor(y/4)+"%,"+l+"%,"+a+")");
            $lightness.find('.gradient-alpha').css('background','linear-gradient(hsla('+Math.floor(x/2)+',100%,50%,1),hsla('+Math.floor(x/2)+',100%,50%,0))');
        }
    });
    //鼠标移出画布事件
    $('#canvas-hue,#canvas-saturation,#canvas-lightness').mouseleave(function(e){
        var dataValue = $('.tab .active').data('value');
        var canvas;
        if(dataValue == 'hue'){
            canvas = document.getElementById('canvas-hue');
        }else if(dataValue == 'saturation'){
            canvas = document.getElementById('canvas-saturation');
        }else if(dataValue == 'lightness'){
            canvas = document.getElementById('canvas-lightness');
        }
        var box = canvas.getBoundingClientRect();
        var x =  e.clientX - box.left * (canvas.width/box.width);
        var y = e.clientY - box.top * (canvas.height/box.height);
        if(!(x >= 0 && x < canvas.width && y >= 0 && y < canvas.height)){
            $('#div-color-magnifier').hide();
        }
    })
});
