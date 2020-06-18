AJS.$(document).ready(function(){

    // AJS.$.ajaxSetup({
    //     dataFilter: function (data, type) {
    //         //console.log("asdasdasdsad");
    //         data=data.replace("<strong>","")
    //         data=data.replace('</strong>',"")
    //         //console.log(data.replace("SERDAR", "berkoooooooooo"));
    //         return data.replace("SERDAR", "berkoooooooooo");
    //     }
    // });

    AJS.$( document ).ajaxComplete(function( event, xhr, settings ) {
        // console.log("---")
        // console.log(settings.url)
        // console.log(settings.url.includes("orkflowUIDispatcher.jspa") && settings.url.includes("action=31"))
        // console.log("---")
        if ( settings.url.includes("AssignIssue") ) {
            var commentDiv=AJS.$(".sd-comment-field-edit-root");
            commentDiv.hide();
        }

        else if ( settings.url.includes("orkflowUIDispatcher.jspa") && settings.url.includes("action=31")) {
            var shouldBreak;
            breakme: for (i = 0; i < 7; i++) {
                setTimeout(function() {
                    if (document.querySelector("#sd-comment-tabs > li.js-sd-external-comment.menu-item")){
                        document.querySelector("#sd-comment-tabs > li.js-sd-external-comment.menu-item").style.display="none";
                        document.querySelector("#sd-comment-tabs > li.js-sd-internal-comment.menu-item").click();
                        shouldBreak=true;
                    }
                }, 300);
                if (shouldBreak){
                    break;
                }
            }
        }
    });

    // var alterResponse = function (opts) {
    //     /**
    //      * Function modifies $.ajax responses
    //      * by allowing you to modify ajax response object before each bound success callback.
    //      * Currently it supports only `success` callbacks, `error` and `complete` support to come.
    //      * @param {RegExp} opts.urlMatch - use this to filter calls by url
    //      * @param {String} opts.dataType - Optional - use this to filter calls by response type
    //      * @param {Function} opts.successWrapper - function that gets called before each ajax callback
    //      *          - function (options:Object, originalOptions:Object, jqXHR:jQuery.XHR, originalSuccess: Function)
    //      */
    //     var callback = function (options, originalOptions, jqXHR) {
    //         var check = true;
    //         if (opts.urlMatch && !options.url.match(opts.urlMatch)) check = false;
    //         if (opts.typeMatch && !options.type.match(opts.typeMatch)) check = false;
    //         console.log("kes");
    //
    //         if (check) {
    //             var originalSuccess = originalOptions.success || options.success;
    //             var next = function (data) {
    //                 originalSuccess(data);
    //             };
    //             originalOptions.success = options.success = function () {
    //                 // In your wrapper, call next() after you changed the response.
    //                 opts.successWrapper.call(null, options, originalOptions, jqXHR, next);
    //             };
    //         }
    //     };
    //
    //
    //
    //     if (opts.dataTypes) {
    //         AJS.$.ajaxPrefilter(opts.dataTypes, callback);
    //     }
    //     else {
    //         AJS.$.ajaxPrefilter(callback);
    //     }
    // };
    //
    // alterResponse({
    //     urlMatch: '.*/rest/api/2/user/picker.*',
    //     successWrapper: function (options, originalOptions, jqXHR, next) {
    //         var response = JSON.parse(jqXHR.responseText);
    //         console.log("asdasd");
    //         console.log(response);
    //        // response.name = 'Some other name'
    //         next(response);
    //     }
    // });
    //
    //
    // AJS.$.ajaxPrefilter(function( options ) {
    //     console.log("asdsadsssssssssss")
    //     console.log(options);
    // });

});