(function($) {
    var NebriOSClient;
    NebriOSClient = (function() {
        var instance_name = '';
        function NebriOSClient(instance_name){
            this.instance = instance_name;
        }
        NebriOSClient.prototype.api_request = function(api_module, view_name, method, payload, callback, error_callback) {
            var me = this;
            me.callback = callback;
            me.error_callback = error_callback;
            var url = 'https://' + this.instance + '.nebrios.com/api/v1/' + api_module + '/' + view_name;
            if (method == "GET"){
                var params = $.param(payload);
                $.ajax({
                    type: method,
                    url: url + '?' + params,
                    success: function(data) {
                        me.returnData(data);
                    },
                    error: function(data) {
                        me.returnError(data);
                    }
                });
            } else if (method == "POST" || method == "PUT") {
                $.ajax({
                    type: method,
                    url: url,
                    data: payload,
                    success: function(data) {
                        me.returnData(data);
                    },
                    error: function(data) {
                        me.returnError(data);
                    }
                });
            } else {
                $.ajax({
                    type: method,
                    url: url,
                    success: function(data) {
                        me.returnData(data);
                    },
                    error: function(data) {
                        me.returnError(data);
                    }
                });
            }
        };
        NebriOSClient.prototype.returnData = function(data) {
            if (this.callback != null) {
                return (this.callback)(data);
            }
        };
        NebriOSClient.prototype.returnError = function(data) {
            if (this.error_callback != null) {
                return (this.error_callback)(data);
            }
        };
        return NebriOSClient;
    })();
    $.nebriosclient = function(instance_name) {
        if (!this.nebriosClientInstance) {
            this.nebriosClientInstance = new NebriOSClient(instance_name || 'demo');
        }
        return this.nebriosClientInstance;
    };
})(jQuery);