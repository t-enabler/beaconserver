const degree = (24901 * 1609) / 360.0;
const dpmLat = 1 / degree;

function getlatlngresults(lat, lng, raidus) {
    var results = [];
    var radiusLat = dpmLat * raidus;
    var minLat = lat - radiusLat;
    results.push(minLat);
    var maxLat = lat + radiusLat;
    results.push(maxLat);
    var mpdLng = degree * Math.cos(lat * (Math.PI / 180));
    var dpmLng = 1 / mpdLng;
    var radiusLng = dpmLng * raidus;
    var minLng = lng - radiusLng;
    results.push(minLng);
    var maxLng = lng + radiusLng;
    results.push(maxLng);
    return results;
}

module.exports = {getlatlngresults};
