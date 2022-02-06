const Benchmark = require('benchmark');

class ExtendedError extends Error {
};

ExtendedError.prototype.name = 'MongooseError';

class ExtendedDate extends Date {

}
class ExtendedNumber extends Number {

}

new Benchmark.Suite()
    .add('Error', function () {
        const err = new Error()
    })
    .add('ExtendedError', function () {
        const err = new ExtendedError()
    })
    .add('Date', function () {
        const err = new Date()
    })
    .add('ExtendedDate', function () {
        const err = new ExtendedDate()
    })
    .add('Number', function () {
        const err = new Number()
    })
    .add('ExtendedNumber', function () {
        const err = new ExtendedNumber()
    })
    .on('cycle', function (evt) {
        console.log(String(evt.target));
    })
    .run();