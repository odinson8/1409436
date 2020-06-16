AJS.$(document).ready(function(){
    var timeout = 10000;

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
        if ( settings.url.includes("AssignIssue") ) {

            var commentDiv=AJS.$(".sd-comment-field-edit-root");
            commentDiv.hide();
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