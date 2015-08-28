# jQuery Nebrios

The simple and easy-to-use package for making NebriOS api requests from a jQuery application.

This app is intended for use with a NebriOS instance. Visit https://nebrios.com to sign up for free!

<h2>Installation</h2>
Copy jquery.nebrios.js to the appropriate location in your application.

<h2>Usage</h2>
In order to use this component to make NebriOS api requests, you must instantiate the object.
```
var nebri = $.nebriosclient('instance_name');
```
- instance name is your NebriOS instance name. i.e. https://<instance_name>.nebrios.com

<h2>Public Functions</h2>
<strong>api_request</strong>: takes 5 arguments
- api_module: the name of the api file stored on your NebriOS instance
- view_name: the name of the target function contained in the given api module
- method: the desired HTTP request method
- payload: an object containing params and values, can be an empty object
- callback: the function to execute after a successful api request. this callback will receive all data included in your view's response


<h2>Example</h2>
```
var nebri = $.nebriosclient('demo');
var request = nebri.api_request('greeting_api', 'start_greeting', "GET", {"greeting":"hello"}, function(data){
    console.log(data); //outputs {"identifier": "02fe4cee4d484b9bae044bd640bce76"}
});
```

<h2>Requirements</h2>
jQuery>=1.7.2
