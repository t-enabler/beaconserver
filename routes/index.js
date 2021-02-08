var express = require('express');
var router = express.Router();
const beaconpro = require('../dao/ProBeacon');


router.get('/getbeaconuuidlist', async function (req, res, next) {
    try {
        const result = await beaconpro.getBeaconuuidlist();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/getbeacondetail', async function (req, res, next) {
    try {
        const result = await beaconpro.getBeacondetail(req.body.data.beaconlist[0].uuid, req.body.data.beaconlist[0].mj, req.body.data.beaconlist[0].mn);
        var time=new Date().toISOString();
        res.json({
            "uid": req.body.data.uid,
            "lon": result[0].b_lon,
            "lat": result[0].b_lat,
            "alt": result[0].b_alt,
            "flr": result[0].b_floor,
            "tim": time,
            "did": req.body.data.did
        });
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/insertnewbeacon', async function (req, res, next) {
    try {
        const result = await beaconpro.insertnewbeacon(req.body.data.b_name, req.body.data.b_uuid, req.body.data.b_major, req.body.data.b_minor, req.body.data.b_txpower, req.body.data.b_lon, req.body.data.b_lat, req.body.data.b_alt, req.body.data.b_floor, req.body.data.b_note);
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/deleteBeacon', async function (req, res, next) {
    try {
        await beaconpro.deleteBeacon(req.body.data.b_id);
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/updateBeacon', async function (req, res, next) {
    try {
        await beaconpro.updateBeacon(req.body.data.b_id,req.body.data.b_name, req.body.data.b_uuid, req.body.data.b_major, req.body.data.b_minor, req.body.data.b_txpower, req.body.data.b_lon, req.body.data.b_lat, req.body.data.b_alt, req.body.data.b_floor, req.body.data.b_note);
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});


router.get('/getAllBeacondetail', async function (req, res, next) {
    try {
        const result = await beaconpro.getAllBeacondetail();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.get('/getBeaconByid/:Bid', async function (req, res, next) {
    try {
        const result = await beaconpro.getBeaconByid(req.params.Bid);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});


module.exports = router;
