/*global*/

function runApp() {
    "use strict";

    function delay(delayTime) {
        setTimeout(function () {
            console.log("Delay %d", delayTime);
        }, delayTime);
    }

    console.log("Start");
    delay(1000);
    console.log("Finish");
}

// function runApp() {
//     "use strict";

//     function delay(delayTime, callback) {
//         setTimeout(function () {
//             console.log("Delay %d", delayTime);
//             callback();
//         }, delayTime);
//     }

//     console.log("Start");
//     delay(1000, function () {
//         console.log("Finish");
//     });
// }

// the callback is a side effect
// function runApp() {
//     "use strict";

//     function delay(delayTime, callback) {
//         setTimeout(function () {
//             console.log("Delay %d", delayTime);
//             throw new Error("oops");
//             callback();
//         }, delayTime);
//     }

//     console.log("Start");
//     delay(1000, function () {
//         console.log("Finish");
//     });
// }

// how to synchronise two callbacks?
// how to sequence two callbacks
// how to only act on the first returning callback
// function runApp() {
//     "use strict";

//     function delay(delayTime, callback) {
//         setTimeout(function () {
//             console.log("Delay %d", delayTime);
//             callback();
//         }, delayTime);
//     }

//     console.log("Start");
//     delay(1000, function () {
//         console.log("Finish");
//     });
//     delay(2000, function () {
//         console.log("Finish");
//     });
// }

// A Promise
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve) {
//             setTimeout(function () {
//                 console.log("Delay %d", delayTime);
//                 resolve();
//             }, delayTime);
//         });
//     }

//     console.log("Start");
//     delay(1000).then(function () {
//         console.log("Finish");
//     });
// }

// A Promise
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve) {
//             setTimeout(function () {
//                 console.log("Delay %d", delayTime);
//                 throw new Error("oops");
//                 resolve();
//             }, delayTime);
//         });
//     }

//     console.log("Start");
//     delay(1000)
//         .then(function () {
//             console.log("Finish");
//         });
// }

// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     throw new Error("oops");
//                     resolve();
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }

//     console.log("Start");
//     delay(1000)
//         .then(function () {
//             console.log("Finish");
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

//return a value
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     resolve(delayTime);
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }

//     console.log("Start");
//     delay(1000)
//         .then(function (response) {
//             console.log("Finish delayed %d", response);
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// sequence promises
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     resolve(delayTime);
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }

//     console.log("Start");
//     delay(1000)
//         .then(function (response) {
//             console.log("Finish delayed %d", response);
//             delay(1000).then(function (resp) {
//                 console.log("Finish delayed %d", response);
//             });
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }


// sequence promises
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     resolve(delayTime);
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }

//     function log(response) {
//         console.log("Finish delayed %d", response);
//         // HEADS UP -> removing return here as an example
//         return delay(1000);
//     }

//     function log2(response) {
//         console.log("Finish delayed %d", response);
//     }

//     console.log("Start");
//     delay(1000)
//         .then(log)
//         .then(log2)
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// let them race
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     resolve(delayTime);
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }

//     function log(response) {
//         console.log("Finish delayed %d", response);
//     }

//     var race = [];
//     race.push(delay(1000));
//     race.push(delay(2000));
//     race.push(delay(500));

//     console.log("Start");
//     Promise.race(race)
//         .then(log)
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// let them wait for each other
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     resolve(delayTime);
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }

//     function log(response) {
//         response.forEach(function (resp) {
//             console.log("Finish delayed %d", resp);
//         });
//     }

//     var noRace = [];
//     noRace.push(delay(1000));
//     noRace.push(delay(2000));
//     noRace.push(delay(500));

//     console.log("Start");
//     Promise.all(noRace)
//         .then(log)
//         .catch(function (err) {
//             console.log(err);
//         });
// }


// chain unknown amount of promises
// function runApp() {
//     "use strict";

//     function delay(delayTime) {
//         return function () {
//             return new Promise(function (resolve, reject) {
//                 setTimeout(function () {
//                     try {
//                         console.log("Delay %d", delayTime);
//                         resolve(delayTime);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 }, delayTime);
//             });
//         }
//     }

//     function log(response) {
//         response.forEach(function (resp) {
//             console.log("Finish delayed %d", resp);
//         });
//     }

//     var noRace = [];
//     noRace.push(delay(1000));
//     noRace.push(delay(2000));
//     noRace.push(delay(500));

//     console.log("Start");
//     noRace.reduce(function (promise, item) {
//         var p = Promise.resolve();
//         return promise
//             .then(function (response) {
//                 return (item());
//             })
//             .catch(console.error);
//     }, Promise.resolve()).then(function () {
//         p;
//     });
// }

// queue promises
// var queue = require("queue");

// function runApp() {
//     "use strict";

//     function delay(delayTime, cb) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     console.log("Delay %d", delayTime);
//                     cb();
//                     resolve(delayTime);
//                 } catch (e) {
//                     reject(e);
//                 }
//             }, delayTime);
//         });
//     }



//     var noRace = [];

//     console.log("Start");
//     var q;
//     q = queue();
//     q.concurrency = 3;
//     [1000, 5000, 3000, 500, 60, 777, 500, 60, 777].forEach(function (del) {
//         q.push(function (cb) {
//             delay(del, cb);
//         });
//     });
//     console.log("Added %d files to the queue", q.length);
//     q.start(function (err) {
//         if (err) {
//             reject(err);
//         }
//         console.log("Done");
//         return;
//     });
// }


runApp();