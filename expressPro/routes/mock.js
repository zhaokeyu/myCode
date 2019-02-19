var express = require('express');
var router = express.Router();

//导入假数据.json文件
var herosData = require('../mock_data/heros.json');
var gamesData = require('../mock_data/games.json');
var applyLists = require('../mock_data/applyLists.json');

//路由级中间件进行二级路由匹配
router.get('/applyLists', function(req, res, next) {
    res.json(applyLists);
});

router.get('/heros', function(req, res, next) {
    res.json(herosData);
});

router.get('/games', function(req, res, next) {
    res.json(gamesData);
});

module.exports = router;