"use strict";

function Y(){};
Y.prototype = Object.create(Error.prototype);

(function(){
    var root = this;
    
    var testProtosBuildInInheritance = function (N){

        var t1 = Date.now();
        for(var i = 0; i<= N; i++){
            const b = new Y();
        }

        var t2 = Date.now();
        // console.log('Proto w/ inheritance from build-in object completed creating ', N, ' instances in: ', t2 - t1, 'ms');

        return t2 - t1;
    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = testProtosBuildInInheritance;
        }
        exports.testProtosBuildInInheritance = testProtosBuildInInheritance;
    } 
    else {
        root.testProtosBuildInInheritance = testProtosBuildInInheritance;
    }
}).call(this);