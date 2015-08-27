(function() {
    var nebriosFactory = function(jQuery) {
        var instance_name = '';
        var $ = jQuery || window.jQuery;
        var NebriOSClient = function (instance_name){
            var NebriOSClient = this;
            NebriOSClient.instance = instance_name;
            NebriOSClient.api_request = function(api_module, view_name, method, payload) {
                var url = 'https://' + this.instance + '.nebrios.com/api/v1/' + api_module + '/' + view_name;
                if (method == "GET"){
                    var params = $.param(payload);
                    console.log(params);
                    $.ajax({
                        type: method,
                        url: url + '?' + params,
                        success: function(data) {
                            this.returnData(data);
                        }
                    });
                } else if (method == "POST" || method == "PUT") {
                    $.ajax({
                        type: method,
                        url: url,
                        data: payload,
                        success: function(data) {
                            this.returnData(data);
                        }
                    });
                } else {
                    $.ajax({
                        type: method,
                        url: url,
                        success: function(data) {
                            this.returnData(data);
                        }
                    });
                }
            };
            NebriOSClient.returnData = function(data) {
                console.log(data);
            };
        }
        return NebriOSClient;
    };
}());