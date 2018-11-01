var mongoose = require('mongoose');
var Schema = mongoose.Schema ;
var SanPhamSchema = Schema({
  tenSP: String,
  donViTinh: String,
  donGia: Number,
  maLoaiSP:{type:Schema.Types.ObjectId,ref:'LoaiSanPham'},
  soLuong: Number,
  
});

module.exports = mongoose.model('SanPham', SanPhamSchema);
