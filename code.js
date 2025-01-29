function sum(a) {
    if (a.length == 0) {
        return 0;
    }
    var total = a[0];
    for(var i = 1; i < a.length; i++) {
        total += a[i];
    }
    
    return total;
}
