var express = require('express');
var router = express.Router();
const beaconpro = require('../dao/ProBeacon');


router.get('/getbeaconuuidlist', async function (req, res, next) {
    try {
        const dbresult = await beaconpro.getBeaconuuidlist();
        const result = [];
        for (let i = 0; i < dbresult.length; i++) {
            result.push(dbresult[i].b_uuid)
        }
        res.send(result);
    } catch (e) {
        console.log(e);
        res.send("failed");
    }
});

router.post('/getbeacondetail', async function (req, res, next) {
    try {
        const result = await beaconpro.getBeacondetail(req.body.data.beaconlist.values[0].uuid, req.body.data.beaconlist.values[0].mj, req.body.data.beaconlist.values[0].mn);
        res.json({
            "uid": req.body.data.beaconlist.uid,
            "lon": result[0].b_lon,
            "lat": result[0].b_lat,
            "alt": result[0].b_alt,
            "flr": result[0].b_floor,
            "tim": req.body.data.beaconlist.tim,
            "did": req.body.data.beaconlist.did
        });
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

module.exports = router;
