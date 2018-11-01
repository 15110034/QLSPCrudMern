var mongoose = require('mongoose');

var LoaiSanPhamSchema = new mongoose.Schema({
  tenLoai: String,
  tinhTrang: String
  
});

module.exports = mongoose.model('LoaiSanPham', LoaiSanPhamSchema);
