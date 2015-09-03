# jQuery Nebri

The simple and easy-to-use package for making Nebri api requests from a jQuery application.

This app is intended for use with a Nebri instance. Visit https://nebrios.com to sign up for free!

<h2>Installation</h2>
Copy jquery.nebri.js to the appropriate location in your application.

<h2>Usage</h2>
In order to use this component to make Nebri api requests, you must instantiate the object.
```
var nebri = $.NebriClient('instance_name');
```
- instance name is your Nebri instance name. i.e. https://<strong>instance_name</strong>.nebrios.com

<h2>Public Functions</h2>
<strong>api_request</strong>: has 4 required arguments
- api_module: the name of the api module stored on your Nebri instance
- view_name: the name of the target function contained in the given api module
- method: the desired HTTP request method
- payload: an object containing params and values, can be an empty object
- callback (optional): the function to execute after a successful api request. this callback will receive all data included in your view's response
- error_callback (optional): the function to execute after an unsuccessful api request.


<h2>Examples</h2>
```
var nebri = $.NebriClient('instance_name');
var request = nebri.api_request('greeting_api', 'start_greeting', "GET", {"greeting":"hello"}, function(data){
    console.log(data); //outputs {"identifier": "02fe4cee4d484b9bae044bd640bce76"}
});
```
```
var callback_func = function(data) {
    console.log(data); //outputs {"identifier": "02fe4cee4d484b9bae044bd640bce76"}
};
var nebri = $.NebriClient('instance_name');
var request = nebri.api_request('greeting_api', 'start_greeting', "GET", {"greeting":"hello"}, callback_func);
```
```
var callback_func = function(data) {
    console.log(data);
};
var error_callback_func = function(data) {
    console.log(data); //outputs Bad Request Response because greeting isn't supported
};
var nebri = $.NebriClient('instance_name');
var request = nebri.api_request('greeting_api', 'start_greeting', "GET", {"greeting":"hi"}, callback_func, error_callback_func);
```

<h2>Requirements</h2>
jQuery>=1.7.2
