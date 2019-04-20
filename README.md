## Moving Planer

#### DESCRIPTION
A web application that, after the user enters the address, shows an image of the location in its background. And, with the help of APIS from the New York Times and Wikipedia, it brings information about the city and its latest news. For this program I have used HTML, CSS and JavaScript skills, as well as knowledge of the Google StreetView, New York Times and Wikipedia APIs.



#### RUNNING THE PROGRAM

1. Make your API Key for Google and New York Times API and switch on code.

2. [GOOGLE DEVELOPERS](https://developers.google.com/maps/documentation/embed/get-api-key)

3. [NEW YORK TIMES DEV PAGE](https://developer.nytimes.com/get-started)

4. Switch here:

For Google Street View API
`var streetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '&key=USE_YOUR_API_KEY_HERE';`

For New York Times API
`var urlNYT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + cityVal +"&sort=newest&api-key=USE_YOUR_API_KEY_HERE";`


1. Run index.html in your browser
