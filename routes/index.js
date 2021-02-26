var express = require('express');
var router = express.Router();
const beaconpro = require('../dao/ProBeacon');


router.get('/getbeaconuuidlist', async function (req, res, next) {
    try {
        const result = await beaconpro.getBeaconuuidlist();
        var templist = [];
        for (let i = 0; i < result.length; i++) {
            templist.push(result[i].b_uuid);
        }
        res.send(templist);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/getbeacondetail', async function (req, res, next) {
    try {
        const result = await beaconpro.getBeacondetail(req.body.data.beaconlist[0].uuid, req.body.data.beaconlist[0].mj, req.body.data.beaconlist[0].mn);
        var time = new Date().toISOString();
        res.json({
            "uid": req.body.data.uid,
            "lon": result[0].b_lon,
            "lat": result[0].b_lat,
            "alt": result[0].b_alt,
            "flr": result[0].b_floor,
            "tim": time,
            "did": req.body.data.did,
            "uuid": req.body.data.beaconlist[0].uuid,
            "mj": req.body.data.beaconlist[0].mj,
            "mn": req.body.data.beaconlist[0].mn
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
        await beaconpro.updateBeacon(req.body.data.b_id, req.body.data.b_name, req.body.data.b_uuid, req.body.data.b_major, req.body.data.b_minor, req.body.data.b_txpower, req.body.data.b_lon, req.body.data.b_lat, req.body.data.b_alt, req.body.data.b_floor, req.body.data.b_note);
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

router.get('/getAllAreadetail', async function (req, res, next) {
    try {
        const result = await beaconpro.getAllAreadetail();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.get('/getAreaDetailsPhone/:lat/:lng/:distance', async function (req, res, next) {
    try {
        const result = await beaconpro.getAllAreadetail();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "error"});
    }
});



router.get('/getAreaName', async function (req, res, next) {
    try {
        const result = await beaconpro.getAreaName();
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

router.get('/getareadetail/:areaid', async function (req, res, next) {
    try {
        const result = await beaconpro.getareadetail(req.params.areaid);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.get('/getareadetailbyname/:svgfilename', async function (req, res, next) {
    try {
        const result = await beaconpro.getareadetailbyname(req.params.svgfilename);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/updateBeaconPosition', async function (req, res, next) {
    try {
        await beaconpro.updateBeaconPosition(req.body.data.b_id, req.body.data.b_lon, req.body.data.b_lat, req.body.data.b_alt, req.body.data.b_floor);
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/addareadetail', async function (req, res, next) {
    try {
        await beaconpro.addareadetail(req.body.data.area_name, req.body.data.area_nameeng, req.body.data.area_type, req.body.data.area_latlng, req.body.data.area_note, parseFloat(req.body.data.area_lat), parseFloat(req.body.data.area_lng));
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/addindoorareadetail', async function (req, res, next) {
    try {
        await beaconpro.addindoorareadetail(req.body.data.area_name, req.body.data.area_nameeng, req.body.data.area_type, req.body.data.area_latlng, req.body.data.area_note, parseFloat(req.body.data.area_lat), parseFloat(req.body.data.area_lng),req.body.data.area_alt,req.body.data.area_svgfile);
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/deletearea', async function (req, res, next) {
    try {
        await beaconpro.deletearea(req.body.data.area_id);
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});

router.post('/updateareadetail', async function (req, res, next) {
    try {
        await beaconpro.updateareadetail(req.body.data.area_id,req.body.data.area_name, req.body.data.area_nameeng, req.body.data.area_type, req.body.data.area_latlng, req.body.data.area_note, parseFloat(req.body.data.area_lat), parseFloat(req.body.data.area_lng));
        res.json({"status": "success"});
    } catch (e) {
        console.log(e);
        res.json({"status": "failed"});
    }
});



module.exports = router;
