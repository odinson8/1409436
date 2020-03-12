AJS.$(document).ready(function(){
    //console.log("Starting SD CV Hide javascript");
    //console.log("sessionStorage= " + sessionStorage.getItem('key'));
    //window.location.hash = 'hash-test';

    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg") && !navigator.userAgent.includes("OPR")) {
        var shouldBreak = 0;
        var i = 1;                              //set counter to 1

        function hideLoop() {                   //create a loop function
            setTimeout(function () {    //call a 0.5s setTimeout when the loop is called

                if (AJS.$('div.cv-description > p').length) {
                    AJS.$('div.cv-description > p').hide();
                    shouldBreak = true;
                }

                i++;                            //  increment the counter
                if (i < 10) {
                    if (!shouldBreak) {
                        hideLoop();               //  ..  again which will trigger another
                    }                           //  if the counter < 6, call the loop function
                }                               //  ..  setTimeout()
            }, 488)
        }
        hideLoop();
    }

    var counter = 1;
    var shouldContinue = "true";

    function refreshPage() {                //  create a loop function
        setTimeout(function () {    //  call a 0.5s setTimeout when the loop is called
            ifFirstVisit();
            counter++;                      //  increment the counter
            if (counter < 4) {
                if (shouldContinue) {
                    refreshPage();          //  ..  again which will trigger another
                }                           //  if the counter < 6, call the loop function
            }                               //  ..  setTimeout()
        }, 2500)
    }

   // refreshPage();

    function ifFirstVisit() {
        if (AJS.$('div.form-body > label').length) {
            if (AJS.$("div.form-body > label").text().includes("Comment on this request...")) {
                console.log("Starting refreshPage Script");
                console.log("sessionStorage= " + sessionStorage.getItem('key'));
                console.log("----");

                if (sessionStorage.getItem('key')) {
                    AJS.$(window).on('beforeunload', function () {
                        console.log("beforeUnload event!");
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
                    }, 2000);
                }
            }
        }
    }
});