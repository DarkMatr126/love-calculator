const compareWords = (w1,w2) => {
    var cs1 = w1.toLowerCase().match(/[a-z]/g).map(v => v.charCodeAt(0));
    var cs2 = w2.toLowerCase().match(/[a-z]/g).map(v => v.charCodeAt(0));

    var stan1 = Math.stanDev(...cs1);
    var stan2 = Math.stanDev(...cs2);
    
    return 1 - Math.abs(stan1/12.5 - stan2/12.5);
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