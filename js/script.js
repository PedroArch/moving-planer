
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // StreetView API
    var streetVal = $('#street').val();
    var cityVal = $('#city').val();
    var address = (streetVal + ", " + cityVal);

    $('#greeting').text("So, you want to live at " + address + "?");

    var streetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '&key=USE_YOUR_API_KEY_HERE';

    $body.append("<img class='bgimg' src='" + streetViewUrl + "'>");

    // NWT API

    var urlNYT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + cityVal +"&sort=newest&api-key=USE_YOUR_API_KEY_HERE";

    $.getJSON( urlNYT , function(data) {

      $nytHeaderElem.text("New York Times Articles About " + cityVal);

      var docs = data.response.docs;
      for (i = 0; i <= 9; i++) {
        var web_url = docs[i].web_url;
        var headline = docs[i].headline.main;
        var lead_paragraph = docs[i].lead_paragraph;
        $nytElem.append("<li class='article'><a href='" + web_url + "'>" + headline + "</a><p>"+ lead_paragraph +"</p></li>");
      }
    }).error(function(){
      $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    })

    // Wikipedia API

    var wikiResquestTimeout = setTimeout(function(){
      $wikiElem.text("Failed to get wikipedia resources");
    }, 8000);

    var urlWiki = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + cityVal + "&format=json&callback=WikiCallback";

    $.ajax({
      url: urlWiki,
      dataType: "jsonp",
      success: function (data) {
       var articleList = data[1];
       var articleUrls = data[3];
       for (i = 0; i < articleList.length; i++) {
         $wikiElem.append("<li><a href='"+articleUrls[i]+"'>"+articleList[i]+"</a></li>");
       }
       clearTimeout(wikiResquestTimeout);
      }
    })

    return false;
};

// loadData();

$('#form-container').submit(loadData);
