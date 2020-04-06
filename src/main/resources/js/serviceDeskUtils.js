AJS.$(document).ready(function(){
    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg") && !navigator.userAgent.includes("OPR")) {
        var shouldBreak = 0;
        var i = 1;                              //set counter to 1
        var i2 = 1;                              //set counter to 1
        var i3 = 1;                              //set counter to 1

        function hideLoop() {                   //create a loop function
            setTimeout(function () {    //call a 0.5s setTimeout when the loop is called

                if (AJS.$('div.cv-description > p').length) {
                    AJS.$('div.cv-description > p').hide();
                    shouldBreak = true;
                }

                i++;                            //  increment the counter
                if (i < 10) {
                    if (!shouldBreak) {
                        hideLoop();             //  ..  again which will trigger another
                    }                           //  if the counter < 6, call the loop function
                }                               //  ..  setTimeout()
            }, 488)
        }
        hideLoop();
    }

    var shouldBreakForASB = 0;
    function addASBtextToTheUsernames() {                   //create a loop function
        setTimeout(function () {    //call a 0.5s setTimeout when the loop is called

            var usernames = AJS.$("header.clearfix h4:not([title='Details'])");
            if (usernames.length) {
                    usernames.each(function () {
                        AJS.$("<time>answered as below</time>").insertAfter(AJS.$(this))
                    });
                    shouldBreakForASB = true;
            }

            i2++;                            //  increment the counter
            if (i2 < 10) {
                if (!shouldBreakForASB) {
                    addASBtextToTheUsernames();             //  ..  again which will trigger another
                }                           //  if the counter < 6, call the loop function
            }                               //  ..  setTimeout()
        }, 500)
    }
    addASBtextToTheUsernames();

    var shouldBreakForSwap = 0;
    function swapLoop() {                   //create a loop function
        setTimeout(function () {    //call a 0.5s setTimeout when the loop is called
            console.log("Swap process begun");
            if (AJS.$("li.header-links-Reports.intensoLinks").length) {
                var reportLi=AJS.$(AJS.$("li.header-links-Reports.intensoLinks").get(0));
                var secondItem=AJS.$(AJS.$(".aui-header  ul.aui-nav").children()[1]);
                secondItem.css("background-color", "blue");
                secondItem.css("border-radius", "7px");
                AJS.$(reportLi).before(secondItem);
                shouldBreakForSwap = true;
            }

            i3++;                            //  increment the counter
            if (i3 < 10) {
                if (!shouldBreakForSwap) {
                    swapLoop();             //  ..  again which will trigger another
                }                           //  if the counter < 6, call the loop function
            }                               //  ..  setTimeout()
        }, 400)
    }
    swapLoop();

    // var counter = 1;
    // var shouldContinue = "true";

   //  function refreshPage() {                //  create a loop function
   //      setTimeout(function () {    //  call a 0.5s setTimeout when the loop is called
   //          ifFirstVisit();
   //          counter++;                      //  increment the counter
   //          if (counter < 4) {
   //              if (shouldContinue) {
   //                  refreshPage();          //  ..  again which will trigger another
   //              }                           //  if the counter < 6, call the loop function
   //          }                               //  ..  setTimeout()
   //      }, 2500)
   //  }
   //
   // // refreshPage();
   //
   //  function ifFirstVisit() {
   //      if (AJS.$('div.form-body > label').length) {
   //          if (AJS.$("div.form-body > label").text().includes("Comment on this request...")) {
   //              console.log("Starting refreshPage Script");
   //              console.log("sessionStorage= " + sessionStorage.getItem('key'));
   //              console.log("----");
   //
   //              if (sessionStorage.getItem('key')) {
   //                  AJS.$(window).on('beforeunload', function () {
   //                      console.log("beforeUnload event!");
   //                      sessionStorage.removeItem("key");
   //                      //Remove the sessionStorage
   //                  });
   //              } else {
   //                  setTimeout(function () {
   //                      sessionStorage.setItem('key', 'refreshed');
   //                      AJS.$(window).on('beforeunload', function () {
   //                          console.log("Did NOT Remove the sessionStorage!");
   //                      });
   //                      window.location.reload();
   //                      // you can pass true to reload function to ignore the client cache and reload from the server
   //                  }, 2000);
   //              }
   //          }
   //      }
   //  }
});