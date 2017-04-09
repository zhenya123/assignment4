// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  var data = "data";
  var interests = "interests";
  var programming = "programming";
  var items = {};
  var output = [];

  $.getJSON( 'http://www.mattbowytz.com/simple_api.json?data=all', function(response){
    $.each( response, function( key, val ) {
      items[key] = val;
    });
  });

  $( "#search" ).keyup(function() {
    var input = $(this).val().toLowerCase();
    if(input.length == 0){
      $("#match").slideUp();
    }
    else {
      output = [];
      $.each(items[data], function(key, val){
        $.each(val, function(index, val2){
          if(val2.slice(0, input.length).toLowerCase() == input) {
            $("#match").slideDown();
            var search = val2.split(' ').join('+');
            output.push('<li><a target="_blank" href = "https://www.google.com/#q=' + search + '">' + val2 + '</li>');
            console.log(output);
            $("#match").html(output.join(""));
          }
        });
      });
      if(output.length == 0) {
        console.log(output);
        $("#match").slideUp();
      }
  }
  });

})();
