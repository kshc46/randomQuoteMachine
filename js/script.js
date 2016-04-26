/* array of colors for the background */
var colorArr = ['#528881', '#836579', '#a42f1e', '#149A71', '#149A7', '#818B30', '#abcabc'];
author="";
quote="";

/* runs function on click */
$("#quoteMe").on("click", function(){
  getIt();
});

/* runs function on document ready */
$(document).ready(function() {
  getIt();
});

/* calls the random quote api and uses jquery to display the author, content and change the background color randomly */
var getIt = function () {
  $.ajax({
    url: "http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(data) {
      var colorID = Math.floor(Math.random() * colorArr.length);
      var a = data.shift();
      $(".quote").html(a.content)
      quote = $(".quote").html(a.content).text();
      $(".author").html("<p>&mdash; " + a.title + "</p>")
      author = $(".author").html(a.title).text();
      $("body").css("background-color", colorArr[colorID])
    },
    cache: false
  });
}

/* tweets the quote */
$("#tweeter").on("click", function () {
  window.open('https://twitter.com/intent/tweet?&text=' + encodeURIComponent(quote + "- " + author));
});