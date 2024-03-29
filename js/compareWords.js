const compareWords = (w1,w2) => {
    var cs1 = w1.toLowerCase().match(/[a-z]/g).map(v => v.charCodeAt(0));
    var cs2 = w2.toLowerCase().match(/[a-z]/g).map(v => v.charCodeAt(0));

    var stan1 = Math.stanDev(...cs1);
    var stan2 = Math.stanDev(...cs2);
    var difStan = Math.abs(stan1/12.5 - stan2/12.5)

    // var mean1 = Math.mean(...cs1);
    // var mean2 = Math.mean(...cs2);
    // var difMean = Math.abs(mean2-mean1)/25;
    
    var dif = difStan;

    return 1 - dif;
}

Math.mean = (...args) => {
    var sum = 0;
    args.forEach(v => sum+=v);
    return sum/args.length;
}
Math.stanDev = (...args) => {
    var m = Math.mean(...args);
    var sum = 0;
    args.forEach(v => sum+=Math.pow(v-m,2));
    return Math.sqrt(sum/args.length);
}
