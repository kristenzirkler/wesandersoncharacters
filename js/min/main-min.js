$(function(){$("#ItemList").mixItUp({load:{sort:"random"},callbacks:{onMixEnd:function(i){var e=$('[data-filter="'+i.activeFilter+'"]').html();void 0!==e&&$("#filter-name").html('<i class="fa fa-filter"></i>'+e).show("fast")}}}),$(".mix").click(function(){var i=$(this).data("movie"),e=$(".movie-"+i).data("video");$(".movie-"+i+" iframe").attr("src","//www.youtube.com/embed/"+e+"?autohide=1&modestbranding=1&rel=0&showinfo=0"),$(".movie-"+i).show("slow")}),$(".movie").click(function(){$(".movie").hide("fast"),$(".movie iframe").attr("src","")}),$(document).scroll(function(){var i=$(document).scrollTop(),e=$(".container").offset().top;i>e?$(".controls").fadeIn():$(".controls").fadeOut()}),$(".dropdown label").click(function(){$(this).parent().hasClass("active")?$(".dropdown").removeClass("active"):($(".dropdown label i").removeClass("fa-times").addClass("fa-ellipsis-h"),$(".dropdown").removeClass("active"),$(this).parent().toggleClass("active")),$(this).find("i").toggleClass("fa-ellipsis-h").toggleClass("fa-times")}),$(".filter").click(function(){$(".dropdown").removeClass("active"),$(".dropdown label i").removeClass("fa-times").addClass("fa-ellipsis-h")}),$("#filter-name").click(function(){$(this).hide()}),$("#filter-name").hover(function(){$(this).find("i").toggleClass("fa-filter").toggleClass("fa-close")})});