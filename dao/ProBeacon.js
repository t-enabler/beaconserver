const client = require('./MySQLUtil');

const getBeaconuuidlist = function () {
    let sql = "SELECT distinct b_uuid FROM beaconsever.beaconlist;"
    return pros(sql);
}

const getBeacondetail = function (b_uuid, b_major, b_minor) {
    let sql = "SELECT * FROM beaconsever.beaconlist where b_uuid =" + "'" + b_uuid + "'and b_major= '" + b_major + "'and b_minor = '" + b_minor + "';"
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
    getBeacondetail
}
