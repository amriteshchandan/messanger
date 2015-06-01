// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require chosen-jquery
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$(document).on( "click",".send_message", function(e){
     e.preventDefault();
     url = $(".send_message_form").attr("action");
     var post_data=$(".send_message_form").serialize();
        
    $.ajax(
    {
        url : url,
        type: "POST",
        data : post_data,
        success:function(data) 
        {
            //data: return data from server
            $("html").html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            //if fails      
        }
    });
   
	});
});