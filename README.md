# Content

A vueJs miniApp with a mocked server.

## To Start App

###### install dependencies  
In the main repo folder run `npm install` to get all the needed dependencies.

###### start mock API
Go to the folder 'server' and run `npm install` and `npm run start`.
It will run a fake server/api for our client app at localhost:8081. Run this before running the client application, as all the requests depend on a working api   

###### Finally start client app
`npm run start` It will run at localhost:8080   

## Choices
This small webapp is done with VueJs. I have done extensive work with both ReactJs and VueJs, as you will see from other projects on this repo. Since this was a small task, VueJs will do just fine, as the initial configuration to have something running is minimal.

The files are served on a fake server/api because it made no sense to have a JSON file just pasted in the components. Since we didn't have a working API, I just structured a fake one. In this way calls are still being made and makes the whole application more 'realistic'.

To get each venue page, the app is using routing and getting the routing params to populate the data in the venue page.

For the Maps I am using Bing Maps API. Mainly because google maps api requires billing and Bing, at least for now, it's free. It may be off putting at first but It helps to paint a realistic picture of how the app would work, and in any case, we could switch to googleMaps API quite easily.

For styling I am using SCSS, as it makes it easier to write and saves some time.
