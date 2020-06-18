AJS.$(document).ready(function(){
    var timeout = 10000;

    AJS.$(document).ajaxComplete(function() {


        if (AJS.$('div.form-body > label').length) {
            if (AJS.$("div.form-body > label").text().includes("Comment on this request...")) {
                console.log("Starting refreshPage Script");
                if (sessionStorage.getItem('key')) {
                    AJS.$(window).on('beforeunload', function () {
                        //console.log("beforeUnload event!");
                        sessionStorage.removeItem("key");
                        //Remove the sessionStorage
                    });
                } else {
                    setTimeout(function () {
                        sessionStorage.setItem('key', 'refreshed');
                        AJS.$(window).on('beforeunload', function () {
                            console.log("Did NOT Remove the sessionStorage!");
                        });
                        window.location.reload();
                        // you can pass true to reload function to ignore the client cache and reload from the server
                    }, timeout);
                }
            }
        }
    });
});