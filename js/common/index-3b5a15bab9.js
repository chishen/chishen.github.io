$(function(){$("#bars").click(function(){$(this).toggleClass("bars-rotate"),$(".navbar").toggleClass("navbar-width")}),$("#bars").hover(function(){$(this).find(".line").css("background","#4c6cb3")},function(){$(this).find(".line").css("background","#fff")})});