$(document).ready(function(){function e(){setTimeout(function(){$(".owl-item.active").find($("input:radio")).prop("checked",!0)},100)}function a(){var e=$(".radio-plan:checked").val(),a=document.querySelector(".span-value");select=$("#periodo").val(),a.innerHTML="das",1==e&&3==select&&(a.innerHTML="49"),1==e&&6==select&&(a.innerHTML="79"),1==e&&1==select&&(a.innerHTML="149"),2==e&&3==select&&(a.innerHTML="79"),2==e&&6==select&&(a.innerHTML="149"),2==e&&1==select&&(a.innerHTML="199")}$(".hamburger").click(function(){$(this).hasClass("demo")||($(this).toggleClass("is-active"),$(".nav-content").hasClass("showMenu")?$(".nav-content").removeClass("showMenu").slideUp("slow"):$(".nav-content").addClass("showMenu").slideDown("slow"))}),$(document).on("submit","form",function(e){$(this).find(".submit").prop("disabled",!0).addClass("disabled")}),$(".btn-acount").click(function(){$(".modal").addClass("active")}),$("#create-login").validate({rules:{user_name:{required:!0},user_email:{required:!0,email:!0},user_pass:{required:!0,minlength:6},user_repass:{required:!0,minlength:6,equalTo:"#user_pass"}},messages:{user_name:"Digite seu nome.",user_email:{required:"Digite seu e-mail.",email:"Digite um e-mail válido."},user_pass:{required:"Digite sua senha",minlength:"Digite uma senha com no mínimo 6 caracteres."},user_repass:{required:"Digite sua senha",minlength:"Digite uma senha com no mínimo 6 caracteres.",equalTo:"Por favor, confirma sua senha."}}});var i=new Date("Jan 6, 2018 20:00:00").getTime();setInterval(function(){var e=(new Date).getTime(),a=i-e,n=Math.floor(a/864e5),s=Math.floor(a%864e5/36e5),t=Math.floor(a%36e5/6e4),o=Math.floor(a%6e4/1e3);$(".number-days").text(n),$(".number-hours").text(s),$(".number-minutes").text(t),$(".number-seconds").text(o)},1e3);e(),$(".owl-carousel").on("changed.owl.carousel",function(){e()}),$(".change-dashboard").click(function(e){$(".change-dashboard").removeClass("active"),$(".dashboard-view").removeClass("active"),$(this).addClass("active"),$(".dashboard").find("[data-show='"+$(this).data().menu+"']").addClass("active"),e.preventDefault()}),$("#periodo").change(function(){a()}),$(".radio-plan").change(function(){a()}),a()}),$(window).on("load",function(){$(".slidersingle").owlCarousel({autoHeight:!0,items:1,nav:!0,navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']}),$(".slidertestimonial").owlCarousel({autoHeight:!0,responsive:{0:{items:1},768:{items:2}},loop:!0,nav:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!1}),$("#sliderhome").owlCarousel({items:1,loop:!0,nav:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!1})});