(function($) {
    function NebriClient(instance_name){
        this.instance = instance_name;
    }
    NebriClient.prototype.api_request = function(api_module, view_name, method, payload, callback, error_callback) {
        var me = this;
        var url = 'https://' + this.instance + '.nebrios.com/api/v1/' + api_module + '/' + view_name;
        if (method == "GET"){
            var params = $.param(payload);
            $.ajax({
                type: method,
                url: url + '?' + params,
                beforeSend: function(xhr) {
                    if ('basic_auth' in payload){
                        xhr.setRequestHeader("Authorization", payload['basic_auth']);
                    }
                },
                success: function(data) {
                    me.returnData(data, callback);
                },
                error: function(data) {
                    me.returnError(data, error_callback);
                }
            });
        } else if (method == "POST" || method == "PUT") {
            $.ajax({
                type: method,
                url: url,
                data: payload,
                beforeSend: function(xhr) {
                    if ('basic_auth' in payload){
                        xhr.setRequestHeader("Authorization", payload['basic_auth']);
                    }
                },
                success: function(data) {
                    me.returnData(data, callback);
                },
                error: function(data) {
                    me.returnError(data, error_callback);
                }
            });
        } else {
            $.ajax({
                type: method,
                url: url,
                beforeSend: function(xhr) {
                    if ('basic_auth' in payload){
                        xhr.setRequestHeader("Authorization", payload['basic_auth']);
                    }
                },
                success: function(data) {
                    me.returnData(data, callback);
                },
                error: function(data) {
                    me.returnError(data, error_callback);
                }
            });
        }
    };
    NebriClient.prototype.returnData = function(data, callback) {
        if (callback != null) {
            return callback(data);
        }
    };
    NebriClient.prototype.returnError = function(data, callback) {
        if (callback != null) {
            return callback(data);
        }
    };
    $.NebriClient = NebriClient;
})(jQuery);