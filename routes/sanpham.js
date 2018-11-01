var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SanPham = require('../models/SanPham.js');
var LoaiSanPham = require('../models/LoaiSanPham.js');

/* GET ALL BOOKS */
/*router.get('/', function(req, res, next) {
  SanPham.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});*/
router.get('/', function(req, res, next) {
  SanPham.find().populate({path:'maLoaiSP',select:'tenLoai'}).exec(function(err,sanpham){
    if (err) return next(err);
    res.json(sanpham);
    console.log(sanpham[0]);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  SanPham.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  SanPham.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  SanPham.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  SanPham.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
