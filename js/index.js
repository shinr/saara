exports.saaraize = function(item, array) {
    return Array.isArray(array) ? 
        array.reduce(function(coll, val, index) {
            return index === 1 ? 
                [].concat(coll, item, val) :
                [].concat(coll, val) 
        }, []) : array;
}
function __reverse(coll, val) {
    return [].concat(val, coll)
}
exports.saaraVisionize = function (item, array) {
    return Array.isArray(array) ? 
        exports.saaraize(item, array.reduce(__reverse, []))
            .reduce(__reverse, []) 
    : array;
}
