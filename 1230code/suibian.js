var port2 = null;
onmessage = function (event) {
    if (event.data.type === 'connect') {
        port2 = event.ports[0];
        port2.onmessage = function (event) {
            var res = [];
            for(var i = 0;i<event.data;i++){
                res.push([i]);
            }
            port2.postMessage(res);

        }
    };
    // console.log(event.data);
    // var res = 0;

};