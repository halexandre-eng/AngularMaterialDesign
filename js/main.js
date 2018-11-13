
<<<<<<< HEAD
var app = angular.module("myApp", ["ngRoute", "oc.lazyLoad"]);

app.config(['$routeProvider','$controllerProvider','$locationProvider', function($routeProvider,$controllerProvider, $locationProvider) {

    app.register = {
        controller: $controllerProvider.register
    };

    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html",
        controller : "homeCtrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/home.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/jquery-countto/jquery.countTo.js"]
                    },
                    {
                        serie: true,
                        files: ["plugins/morrisjs/morris.css","plugins/raphael/raphael.min.js", "plugins/morrisjs/morris.js"]
                    },
                    {
                        serie: true,
                        files: ["plugins/chartjs/Chart.bundle.js"]
                    },
                    {
                        serie: false,
                        files: ["plugins/jquery-sparkline/jquery.sparkline.js"]
                    },
                    {
                        serie: true,
                        files: ["plugins/flot-charts/jquery.flot.js", "plugins/flot-charts/jquery.flot.resize.js", "plugins/flot-charts/jquery.flot.pie.js", "plugins/flot-charts/jquery.flot.categories.js", "plugins/flot-charts/jquery.flot.time.js"]
                    }
                ]);
            }
        }
    })
    .when("/typography", {
        templateUrl : "pages/typography.html"
    })
    .when("/classes", {
        templateUrl : "pages/helper-classes.html"
    })
    .when("/changelogs", {
        templateUrl : "pages/changelogs.html"
    })
    .when("/widgets/cards/basic", {
        templateUrl : "pages/widgets/cards/basic.html",
        controller : "cardsBasicCtrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/cards/basic.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/waitme/waitMe.css", "plugins/waitme/waitMe.js"]
                    }
                ]);
            }
        }
    })
    .when("/widgets/cards/colored", {
        templateUrl : "pages/widgets/cards/colored.html",
        controller : "cardsColoredCtrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/cards/colored.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/waitme/waitMe.css", "plugins/waitme/waitMe.js"]
                    }
                ]);
            }
        }
    })
    .when("/widgets/cards/no-header", {
        templateUrl : "pages/widgets/cards/no-header.html"
    })
    .when("/widgets/infobox/infobox-1", {
        templateUrl : "pages/widgets/infobox/infobox-1.html",
        controller : "infobox1Ctrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/infobox/infobox-1.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/jquery-countto/jquery.countTo.js"]
                    },
                    {
                        serie: false,
                        files: ["plugins/jquery-sparkline/jquery.sparkline.js"]
                    }
                ]);
            }
        }
    })
    .when("/widgets/infobox/infobox-2", {
        templateUrl : "pages/widgets/infobox/infobox-2.html",
        controller : "infobox2Ctrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/infobox/infobox-2.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/jquery-countto/jquery.countTo.js"]
                    },
                    {
                        serie: false,
                        files: ["plugins/jquery-sparkline/jquery.sparkline.js"]
                    }
                ]);
            }
        }
    })
    .when("/widgets/infobox/infobox-3", {
        templateUrl : "pages/widgets/infobox/infobox-3.html",
        controller : "infobox3Ctrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/infobox/infobox-3.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/jquery-countto/jquery.countTo.js"]
                    },
                    {
                        serie: false,
                        files: ["plugins/jquery-sparkline/jquery.sparkline.js"]
                    }
                ]);
            }
        }
    })
    .when("/widgets/infobox/infobox-4", {
        templateUrl : "pages/widgets/infobox/infobox-4.html",
        controller : "infobox4Ctrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/infobox/infobox-4.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/jquery-countto/jquery.countTo.js"]
                    },
                    {
                        serie: false,
                        files: ["plugins/jquery-sparkline/jquery.sparkline.js"]
                    }
                ]);
            }
        }
    })
    .when("/widgets/infobox/infobox-5", {
        templateUrl : "pages/widgets/infobox/infobox-5.html",
        controller : "infobox5Ctrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/widgets/infobox/infobox-5.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/jquery-countto/jquery.countTo.js"]
                    },
                    {
                        serie: false,
                        files: ["plugins/jquery-sparkline/jquery.sparkline.js"]
                    }
                ]);
            }
        }
    })
    .when("/ui/alerts", {
        templateUrl : "pages/ui/alerts.html"
    })
    .when("/ui/animations", {
        templateUrl : "pages/ui/animations.html",
        controller : "animationsCtrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/ui/animations.js');
            }]
        }
    })
    .when("/ui/badges", {
        templateUrl : "pages/ui/badges.html"
    })
    .when("/ui/breadcrumbs", {
        templateUrl : "pages/ui/breadcrumbs.html"
    })
    .when("/ui/buttons", {
        templateUrl : "pages/ui/buttons.html"
    })
    .when("/ui/collapse", {
        templateUrl : "pages/ui/collapse.html"
    })
    .when("/ui/colors", {
        templateUrl : "pages/ui/colors.html"
    })
    .when("/ui/dialogs", {
        templateUrl : "pages/ui/dialogs.html",
        controller : "dialogsCtrl",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/pages/ui/dialogs.js');
            }],
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ["plugins/sweetalert/sweetalert.css", "plugins/sweetalert/sweetalert.min.js"]
                    }
                ]);
            }
        }
    });
}]);

app.controller("mainController", function ($scope, $location) {

    $scope.getPathURL = $location.$$url;

    $scope.highlightMenu = function(){
        $scope.getPathURL = $location.$$url;
    }

=======
var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/london", {
        templateUrl : "london.htm",
        controller : "londonCtrl"
    })
    .when("/paris", {
        templateUrl : "paris.htm",
        controller : "parisCtrl"
    });
});

app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});

app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
>>>>>>> 79b6a267eef1f77e804d61d740937529adf8d548
});