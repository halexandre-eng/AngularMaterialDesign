app.register.controller("animationsCtrl", function($scope, $http, $ocLazyLoad, $route) {

    $ocLazyLoad.load(["plugins/bootstrap-select/js/bootstrap-select.js","plugins/bootstrap-select/css/bootstrap-select.css"]).then(function(){ 
      
        $('.js-animations').selectpicker();
    });

    $('.js-animations').bind('change', function () {
        var animation = $(this).val();
        $('.js-animating-object').animateCss(animation);
    });

    //Copied from https://github.com/daneden/animate.css
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

});