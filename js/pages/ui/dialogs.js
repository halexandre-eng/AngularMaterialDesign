app.register.controller("dialogsCtrl", function($scope, $http, $ocLazyLoad, $route) {

    

    //These codes takes from http://t4t5.github.io/sweetalert/
    $scope.showBasicMessage = function() {
        swal("Here's a message!");
    }

    $scope.showWithTitleMessage = function() {
        swal("Here's a message!", "It's pretty, isn't it?");
    }

    $scope.showSuccessMessage = function() {
        swal("Good job!", "You clicked the button!", "success");
    }

    $scope.showConfirmMessage = function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function () {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    }

    $scope.showCancelMessage = function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    }

    $scope.showWithCustomIconMessage = function() {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "../../images/thumbs-up.png"
        });
    }

    $scope.showHtmlMessage = function() {
        swal({
            title: "HTML <small>Title</small>!",
            text: "A custom <span style=\"color: #CC0000\">html<span> message.",
            html: true
        });
    }

    $scope.showAutoCloseTimerMessage = function() {
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    }

    $scope.showPromptMessage = function() {
        swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        }, function (inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!"); return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    }

    $scope.showAjaxLoaderMessage = function() {
        swal({
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function () {
            setTimeout(function () {
                swal("Ajax request finished!");
            }, 2000);
        });
    }

});

