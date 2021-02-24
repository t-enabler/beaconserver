const client = require('./MySQLUtil');

const getBeaconuuidlist = function () {
    let sql = "SELECT distinct b_uuid FROM beaconsever.beaconlist;"
    return pros(sql);
}

const getBeacondetail = function (b_uuid, b_major, b_minor) {
    let sql = "SELECT * FROM beaconsever.beaconlist where b_uuid =" + "'" + b_uuid + "'and b_major= '" + b_major + "'and b_minor = '" + b_minor + "';"
    return pros(sql);
}

const getAllBeacondetail = function () {
    let sql = "SELECT * FROM beaconsever.beaconlist ;"
    return pros(sql);
}

const getAllAreadetail = function () {
    let sql = "SELECT * FROM beaconsever.arealist ;"
    return pros(sql);
}

const insertnewbeacon = function (b_name, b_uuid, b_major, b_minor, b_txpower, b_lon, b_lat, b_alt, b_floor, b_note) {
    let sql = "Insert into beaconsever.beaconlist(b_name,b_uuid,b_major,b_minor,b_txpower,b_lon,b_lat,b_alt,b_floor,b_note) VALUES (" + "'" + b_name + "','" + b_uuid + "','" + b_major + "','" + b_minor +
        "','" + b_txpower + "','" + b_lon + "','" + b_lat + "','" + b_alt + "','" + b_floor + "','" + b_note + "');"
    return pros(sql);
}

const getBeaconByid = function (b_id) {
    let sql = "SELECT * FROM beaconsever.beaconlist where b_id=" + "'" + b_id + "';"
    return pros(sql);
}

const deleteBeacon = function (b_id) {
    let sql = "DELETE FROM beaconsever.beaconlist where b_id=" + "'" + b_id + "';"
    return pros(sql);
}

const updateBeaconPosition = function (b_id, b_lon, b_lat, b_alt, b_floor) {
    let sql = "UPDATE beaconsever.beaconlist set b_lon =" + "'" + b_lon + "', b_lat ='" + b_lat + "', b_alt ='" + b_alt + "', b_floor ='" + b_floor + "' where b_id = '" + b_id + "';"
    return pros(sql);
}

const updateBeacon = function (b_id, b_name, b_uuid, b_major, b_minor, b_txpower, b_lon, b_lat, b_alt, b_floor, b_note) {
    let sql = "UPDATE beaconsever.beaconlist set b_name = " + "'" + b_name + "',b_uuid = '" + b_uuid + "', b_major ='" + b_major + "', b_minor ='" + b_minor + "', b_txpower ='" + b_txpower +
        "', b_lon ='" + b_lon + "', b_lat ='" + b_lat + "', b_alt ='" + b_alt + "', b_floor ='" + b_floor + "', b_note ='" + b_note + "' where b_id = '" + b_id + "';"
    return pros(sql);
}

const getAreaName = function () {
    let sql = "Select * from beaconsever.areadefinition;"
    return pros(sql);
}

const addareadetail = function (area_name, area_nameeng, area_type, area_latlng, area_note, area_lat, area_lng) {
    let sql = "Insert into beaconsever.arealist(area_name,area_nameeng,area_type,area_latlng,area_note,area_lat,area_lng) VALUES (" + "'" + area_name + "','" + area_nameeng + "','" + area_type + "','" + area_latlng +
        "','" + area_note + "','" + area_lat + "','" + area_lng + "');"
    return pros(sql);
}

const addindoorareadetail = function (area_name, area_nameeng, area_type, area_latlng, area_note, area_lat, area_lng, area_alt, area_svgfile) {
    let sql = "Insert into beaconsever.arealist(area_name,area_nameeng,area_type,area_latlng,area_note,area_lat,area_lng,area_alt,area_svgfile) VALUES (" + "'" + area_name + "','" + area_nameeng + "','" + area_type + "','" + area_latlng +
        "','" + area_note + "','" + area_lat + "','" + area_lng + "','" + area_alt + "','" + area_svgfile + "');"
    return pros(sql);
}

const deletearea = function (area_id) {
    let sql = "DELETE FROM beaconsever.arealist where area_id=" + "'" + area_id + "';"
    return pros(sql);
}

const getareadetail = function (area_id) {
    let sql = "Select * from beaconsever.arealist where area_id=" + "'" + area_id + "';"
    return pros(sql);
}

const updateareadetail = function (area_id, area_name, area_nameeng, area_type, area_latlng, area_note, area_lat, area_lng) {
    let sql = "UPDATE beaconsever.arealist set area_name =" + "'" + area_name + "', area_nameeng ='" + area_nameeng +
        "', area_type ='" + area_type + "', area_latlng ='" + area_latlng + "', area_note ='" + area_note +
        "', area_lat ='" + area_lat + "', area_lng ='" + area_lng + "' where area_id = '" + area_id + "';"
    return pros(sql);
}

const pros = function (sql) {
    return new Promise((resolve, reject) => {
        client.connection.query(sql, (error, result, fields) => {
            if (error) {
                console.log(error.message);
                reject(error.message);
            } else {
                resolve(result);
            }
        });
    })
};

module.exports = {
    getBeaconuuidlist,
    getBeacondetail,
    getAllBeacondetail,
    insertnewbeacon,
    getBeaconByid,
    deleteBeacon,
    updateBeacon,
    updateBeaconPosition,
    getAllAreadetail,
    getAreaName,
    addareadetail,
    getareadetail,
    deletearea,
    updateareadetail,
    addindoorareadetail
}
