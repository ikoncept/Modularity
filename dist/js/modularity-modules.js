!function(t){var e={};function a(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=12)}([,,,,,,,,,,,,function(t,e,a){a(13),a(14),a(15),a(16),t.exports=a(17)},function(t,e){jQuery(document).ready((function(t){function e(e){0===t('#modularity-sorted-by select optgroup[label="Post fields"]').length&&t("#modularity-sorted-by select").prepend('<optgroup label="Post fields">').append("</optgroup>"),t.post(ajaxurl,e,(function(e){t('#modularity-sorted-by select option[value^="_metakey_"], #modularity-sorted-by select optgroup[label="Post meta"]').remove(),e.meta_keys.length>0&&(t("#modularity-sorted-by select").append('<optgroup label="Post meta">'),t.each(e.meta_keys,(function(a,o){var s="";null!==e.curr&&(s=o.meta_key==e.curr.replace("_metakey_","")?"selected":""),t("#modularity-sorted-by select").append('<option value="_metakey_'+o.meta_key+'" '+s+">"+o.meta_key+"</option>")})),t("#modularity-sorted-by select").append("</optgroup>"))}),"json")}function a(e){t("#modularity-latest-taxonomy select").empty(),t("#modularity-latest-taxonomy .acf-label label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,(function(e){0!==e.types.length?(t.each(e.types,(function(a,o){var s="";null!==e.curr&&(s=o.name==e.curr?"selected":""),t("#modularity-latest-taxonomy select").append('<option value="'+o.name+'" '+s+">"+o.label+"</option>")})),t("#modularity-latest-taxonomy .acf-label label .spinner").remove(),o({action:"get_taxonomy_values",tax:t("#modularity-latest-taxonomy select").val(),post:modularity_current_post_id})):t("#modularity-latest-taxonomy .acf-label label .spinner").remove()}),"json")}function o(e){t("#modularity-latest-taxonomy-value select").empty(),t("#modularity-latest-taxonomy-value .acf-label label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,(function(e){t.each(e.tax,(function(a,o){var s=t.inArray(o.name.replace("&amp;","&"),e.curr)>-1?"selected":"";t("#modularity-latest-taxonomy-value select").append('<option value="'+o.name+'" '+s+">"+o.name+"</option>")})),t("#modularity-latest-taxonomy-value .acf-label label .spinner").remove()}),"json")}e({action:"get_sortable_meta_keys",posttype:t("#modularity-latest-post-type select").val(),post:modularity_current_post_id}),t("#modularity-latest-post-type select").on("change",(function(){e({action:"get_sortable_meta_keys",posttype:t(this).val(),post:modularity_current_post_id})})),a({action:"get_taxonomy_types",posttype:t("#modularity-latest-post-type select").val(),post:modularity_current_post_id}),t("#modularity-latest-post-type select").on("change",(function(){a({action:"get_taxonomy_types",posttype:t(this).val(),post:modularity_current_post_id})})),t("#modularity-latest-taxonomy select").on("change",(function(){o({action:"get_taxonomy_values",tax:t(this).val(),post:modularity_current_post_id})}))}))},function(t,e){var a=a||{};a.Posts=a.Posts||{},a.Posts.LoadMoreButton=function(t){function e(){this.init()}return e.prototype.init=function(){t(document).on("click",".js-mod-posts-load-more",function(e){var a=t(e.target),o=JSON.parse(a.attr("data-mod-posts-load-more"));if(this.attributesExists(["postsPerPage","offset","target","ajaxUrl","nonce","bladeTemplate"],Object.keys(o))){var s=t(o.target)[0];if(void 0===s)throw'Error: Could not find target "'+o.target+'"';this.toggleLoader(a),this.loadMorePosts(a,s,o)}}.bind(this))},e.prototype.toggleLoader=function(t){if(t.hasClass("hidden"))return t.removeClass("hidden"),void this.removeLoader(t);t.addClass("hidden"),t.after('<div class="loading"><div></div><div></div><div></div><div></div></div>')},e.prototype.loadMorePosts=function(e,a,o){console.log("loadMorePosts()");var s=o;s.action="mod_posts_load_more",t.ajax({type:"post",url:s.ajaxUrl,data:s,success:function(s,n){return console.log(s),console.log(n),"success"==n?(t(a).append(s.join("")),o.postsPerPage>s.length?(this.removeLoader(e),void e.remove()):(this.toggleLoader(e),o.offset=parseInt(o.offset)+parseInt(o.postsPerPage),void e.attr("data-mod-posts-load-more",JSON.stringify(o)))):"nocontent"==n?(this.removeLoader(e),e.after("<p>No more posts to show…</p>"),void e.remove()):void 0}.bind(this),error:function(t,e,a){console.log(a)}})},e.prototype.removeLoader=function(e){t(e.next()).hasClass("loading")&&e.next().remove()},e.prototype.attributesExists=function(t,e){var a=!0;return t.forEach((function(t){if(!e.includes(t))throw a=!1,'ValidationError: Missing required data-attribute key "'+t+'"'})),a},new e}(jQuery)},function(t,e){jQuery(document).ready((function(t){function e(e){0===t('#modularity-sorted-by select optgroup[label="Post fields"]').length&&t("#modularity-sorted-by select").prepend('<optgroup label="Post fields">').append("</optgroup>"),t("#modularity-latest-meta-key label, #modularity-sorted-by label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,(function(e){t('#modularity-sorted-by select option[value^="_metakey_"], #modularity-sorted-by select optgroup[label="Post meta"]').remove(),t("#modularity-latest-meta-key select").empty(),e.meta_keys.length>2&&(t("#modularity-sorted-by select").append('<optgroup label="Post meta">'),t.each(e.meta_keys,(function(a,o){var s=null!=e.sort_curr&&o.meta_key==e.sort_curr.replace("_metakey_","")?"selected":"",n=null!=e.filter_curr&&o.meta_key==e.filter_curr.replace("_metakey_","")?"selected":"";t("#modularity-sorted-by select").append('<option value="_metakey_'+o.meta_key+'" '+s+">"+o.meta_key+"</option>"),t("#modularity-latest-meta-key select").append('<option value="'+o.meta_key+'" '+n+">"+o.meta_key+"</option>")})),t("#modularity-sorted-by select").append("</optgroup>")),t("#modularity-latest-meta-key .spinner, #modularity-sorted-by .spinner").remove()}),"json")}function a(e){t("#modularity-latest-taxonomy select").empty(),t("#modularity-latest-taxonomy .acf-label label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,(function(e){0!==e.types.length?(t.each(e.types,(function(a,o){var s=o.name==e.curr?"selected":"";t("#modularity-latest-taxonomy select").append('<option value="'+o.name+'" '+s+">"+o.label+"</option>")})),t("#modularity-latest-taxonomy .acf-label label .spinner").remove(),o({action:"get_taxonomy_values_v2",tax:t("#modularity-latest-taxonomy select").val(),post:modularity_current_post_id})):t("#modularity-latest-taxonomy .acf-label label .spinner").remove()}),"json")}function o(e){t("#modularity-latest-taxonomy-value select").empty(),t("#modularity-latest-taxonomy-value .acf-label label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,(function(e){t.each(e.tax,(function(a,o){var s=o.slug==e.curr?"selected":"";t("#modularity-latest-taxonomy-value select").append('<option value="'+o.slug+'" '+s+">"+o.name+"</option>")})),t("#modularity-latest-taxonomy-value .acf-label label .spinner").remove()}),"json")}"mod-posts"===pagenow&&(e({action:"get_sortable_meta_keys_v2",posttype:t("#modularity-latest-post-type select").val(),post:modularity_current_post_id}),t("#modularity-latest-post-type select").on("change",(function(){e({action:"get_sortable_meta_keys_v2",posttype:t(this).val(),post:modularity_current_post_id})})),a({action:"get_taxonomy_types_v2",posttype:t("#modularity-latest-post-type select").val(),post:modularity_current_post_id}),t("#modularity-latest-post-type select").on("change",(function(){a({action:"get_taxonomy_types_v2",posttype:t(this).val(),post:modularity_current_post_id})})),t("#modularity-latest-taxonomy select").on("change",(function(){o({action:"get_taxonomy_values_v2",tax:t(this).val(),post:modularity_current_post_id})})))}))},function(t,e){$(document).ready((function(){$(".datatable").DataTable({dom:"lf<'clearfix'>trip<'clearfix'>",oLanguage:{sEmptyTable:datatablesLang.sEmptyTable,sInfo:datatablesLang.sInfo,sInfoEmpty:datatablesLang.sInfoEmpty,sInfoFiltered:"("+datatablesLang.sInfoFiltered+")",sInfoPostFix:"",sInfoThousands:",",sLengthMenu:datatablesLang.sLengthMenu,sLoadingRecords:datatablesLang.sLoadingRecords,sProcessing:datatablesLang.sProcessing,sSearch:"",sZeroRecords:datatablesLang.sZeroRecords,oPaginate:{sFirst:datatablesLang.sFirst,sLast:datatablesLang.sLast,sNext:datatablesLang.sNext,sPrevious:datatablesLang.sPrevious},oAria:{sSortAscending:datatablesLang.sSortAscending,sSortDescending:datatablesLang.sSortDescending}}})}))},function(t,e){jQuery(document).ready((function(t){setTimeout((function(){t(".acf-field-dynamic-table").each((function(e,a){t(this).find("td:not([class])").append('                <div class="table-tools">                <ul>                    <li data-action="bold"><i class="mce-ico mce-i-bold"></i></li>                    <li data-action="italic"><i class="mce-ico mce-i-italic"></i></li>                    <li data-action="strikethrough"><i class="mce-ico mce-i-strikethrough"></i></li>                    <li data-action="link"><i class="mce-ico mce-i-link"></i></li>                </ul>                </div>            ')}))}),1e3),t(document).on("click",(function(e){t(".table-tools").hide(),t(e.target).parents("td").find(".table-tools").show()})),t("body").on("click",".acf-field-dynamic-table td",(function(){var e=t(".table-tools").html();t(".table-tools").remove(),t(this).append('<div class="table-tools">'+e+"</div>")})),t("body").on("focus",".acf-field-dynamic-table td:not([class]) input",(function(e){t(this).siblings(".table-tools").show()})),t("body").on("click",".table-tools [data-action]",(function(e){e.preventDefault();var a=t(this).parents("td").find("input").first(),o=t(this).data("action"),s={start:a[0].selectionStart,end:a[0].selectionEnd},n=a.val(),l="";switch(o){case"bold":l=n.substr(0,s.start)+"<strong>"+n.substr(s.start,s.end-s.start)+"</strong>"+n.substr(s.end);break;case"italic":l=n.substr(0,s.start)+'<span style="font-style:italic;">'+n.substr(s.start,s.end-s.start)+"</span>"+n.substr(s.end);break;case"strikethrough":l=n.substr(0,s.start)+"<s>"+n.substr(s.start,s.end-s.start)+"</s>"+n.substr(s.end);break;case"link":var r=window.prompt("What URL do you want to link to?","#");l=n.substr(0,s.start)+'<a href="'+r+'">'+n.substr(s.start,s.end-s.start)+"</a>"+n.substr(s.end);break;default:return}a.val(l)}))}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvbW9kdWxhcml0eS1tb2R1bGVzLWpzLjU3NTJkZTc5NGNjOTk5ZjA1ZDBmLmpzIl0sIm5hbWVzIjpbIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJnZXRQb3N0TWV0YSIsImRhdGEiLCJsZW5ndGgiLCJwcmVwZW5kIiwiYXBwZW5kIiwicG9zdCIsImFqYXh1cmwiLCJyZXNwb25zZSIsInJlbW92ZSIsIm1ldGFfa2V5cyIsImVhY2giLCJpbmRleCIsIml0ZW0iLCJpc19zZWxlY3RlZCIsImN1cnIiLCJtZXRhX2tleSIsInJlcGxhY2UiLCJnZXRUYXhvbm9teVR5cGVzIiwiZW1wdHkiLCJ0eXBlcyIsImxhYmVsIiwiZ2V0VGF4b25vbXlWYWx1ZXMiLCJhY3Rpb24iLCJ0YXgiLCJ2YWwiLCJtb2R1bGFyaXR5X2N1cnJlbnRfcG9zdF9pZCIsImluQXJyYXkiLCJwb3N0dHlwZSIsIm9uIiwidGhpcyIsIk1vZHVsYXJpdHkiLCJQb3N0cyIsIkxvYWRNb3JlQnV0dG9uIiwiaW5pdCIsImUiLCJidXR0b24iLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwiSlNPTiIsInBhcnNlIiwiYXR0ciIsImF0dHJpYnV0ZXNFeGlzdHMiLCJrZXlzIiwidG9nZ2xlTG9hZGVyIiwibG9hZE1vcmVQb3N0cyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVMb2FkZXIiLCJhZGRDbGFzcyIsImFmdGVyIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ0eXBlIiwidXJsIiwiYWpheFVybCIsInN1Y2Nlc3MiLCJwb3N0cyIsInN0YXR1cyIsImpvaW4iLCJwb3N0c1BlclBhZ2UiLCJvZmZzZXQiLCJwYXJzZUludCIsInN0cmluZ2lmeSIsImVycm9yIiwianFYSFIiLCJfZXJyb3IiLCJuZXh0IiwicmVxdWlyZWRLZXlzIiwiYXR0cmlidXRlS2V5cyIsImV4aXN0cyIsImZvckVhY2giLCJpbmNsdWRlcyIsInNvcnRfc2VsZWN0ZWQiLCJzb3J0X2N1cnIiLCJmaWx0ZXJfc2VsZWN0ZWQiLCJmaWx0ZXJfY3VyciIsInNsdWciLCJwYWdlbm93IiwiRGF0YVRhYmxlIiwiZG9tIiwib0xhbmd1YWdlIiwic0VtcHR5VGFibGUiLCJkYXRhdGFibGVzTGFuZyIsInNJbmZvIiwic0luZm9FbXB0eSIsInNJbmZvRmlsdGVyZWQiLCJzSW5mb1Bvc3RGaXgiLCJzSW5mb1Rob3VzYW5kcyIsInNMZW5ndGhNZW51Iiwic0xvYWRpbmdSZWNvcmRzIiwic1Byb2Nlc3NpbmciLCJzU2VhcmNoIiwic1plcm9SZWNvcmRzIiwib1BhZ2luYXRlIiwic0ZpcnN0Iiwic0xhc3QiLCJzTmV4dCIsInNQcmV2aW91cyIsIm9BcmlhIiwic1NvcnRBc2NlbmRpbmciLCJzU29ydERlc2NlbmRpbmciLCJzZXRUaW1lb3V0IiwiZWxlbWVudCIsImZpbmQiLCJoaWRlIiwicGFyZW50cyIsInNob3ciLCJ0YWJsZVRvb2wiLCJodG1sIiwic2libGluZ3MiLCJwcmV2ZW50RGVmYXVsdCIsIiRpbnB1dCIsImZpcnN0Iiwic2VsZWN0aW9uIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImVuZCIsInNlbGVjdGlvbkVuZCIsIm5ld1ZhbCIsInN1YnN0ciIsImxpbmtVcmwiLCJ3aW5kb3ciLCJwcm9tcHQiXSwibWFwcGluZ3MiOiJD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RUFBRSxnQkFBZ0JTLFNBQ2xCVCxFQUFFOEIsTUFBTXpCLE9BQU8sNEJBQThCd0csRUFBWSxhQUUzRDdHLEVBQUUsUUFBUTZCLEdBQUcsUUFBUyxrREFBa0QsU0FBVU0sR0FDaEZuQyxFQUFFOEIsTUFBTWlGLFNBQVMsZ0JBQWdCSCxVQUduQzVHLEVBQUUsUUFBUTZCLEdBQUcsUUFBUyw4QkFBOEIsU0FBVU0sR0FDNURBLEVBQUU2RSxpQkFDRixJQUFJQyxFQUFTakgsRUFBRThCLE1BQU02RSxRQUFRLE1BQU1GLEtBQUssU0FBU1MsUUFDN0MzRixFQUFTdkIsRUFBRThCLE1BQU01QixLQUFLLFVBQ3RCaUgsRUFBWSxDQUNkQyxNQUFPSCxFQUFPLEdBQUdJLGVBQ2pCQyxJQUFLTCxFQUFPLEdBQUdNLGNBRWI5RixFQUFNd0YsRUFBT3hGLE1BQ2IrRixFQUFTLEdBRWIsT0FBUWpHLEdBQ04sSUFBSyxPQUNIaUcsRUFBUy9GLEVBQUlnRyxPQUFPLEVBQUdOLEVBQVVDLE9BQVMsV0FBYTNGLEVBQUlnRyxPQUFPTixFQUFVQyxNQUFPRCxFQUFVRyxJQUFNSCxFQUFVQyxPQUFTLFlBQWMzRixFQUFJZ0csT0FBT04sRUFBVUcsS0FDekosTUFFRixJQUFLLFNBQ0hFLEVBQVMvRixFQUFJZ0csT0FBTyxFQUFHTixFQUFVQyxPQUFTLG9DQUFzQzNGLEVBQUlnRyxPQUFPTixFQUFVQyxNQUFPRCxFQUFVRyxJQUFNSCxFQUFVQyxPQUFTLFVBQVkzRixFQUFJZ0csT0FBT04sRUFBVUcsS0FDaEwsTUFFRixJQUFLLGdCQUNIRSxFQUFTL0YsRUFBSWdHLE9BQU8sRUFBR04sRUFBVUMsT0FBUyxNQUFRM0YsRUFBSWdHLE9BQU9OLEVBQVVDLE1BQU9ELEVBQVVHLElBQU1ILEVBQVVDLE9BQVMsT0FBUzNGLEVBQUlnRyxPQUFPTixFQUFVRyxLQUMvSSxNQUVGLElBQUssT0FDSCxJQUFJSSxFQUFVQyxPQUFPQyxPQUFPLG1DQUFvQyxLQUNoRUosRUFBUy9GLEVBQUlnRyxPQUFPLEVBQUdOLEVBQVVDLE9BQVMsWUFBY00sRUFBVSxLQUFPakcsRUFBSWdHLE9BQU9OLEVBQVVDLE1BQU9ELEVBQVVHLElBQU1ILEVBQVVDLE9BQVMsT0FBUzNGLEVBQUlnRyxPQUFPTixFQUFVRyxLQUN0SyxNQUVGLFFBQ0UsT0FHSkwsRUFBT3hGLElBQUkrRiIsImZpbGUiOiJqcy9tb2R1bGFyaXR5LW1vZHVsZXMuanMiLCJzb3VyY2VSb290IjoiIn0=