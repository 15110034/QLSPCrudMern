import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      tenSP: '',
      donViTinh: '',
      donGia: '',
      maLoaiSP: '',
      soLuong: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  

  onSubmit = (e) => {
    e.preventDefault();

    const { tenSP, donViTinh,donGia, maLoaiSP, soLuong} = this.state;

    axios.post('/api/sanpham', { tenSP, donViTinh,donGia, maLoaiSP, soLuong})
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { tenSP, donViTinh,donGia, maLoaiSP, soLuong}= this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD SAN PHAM
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Product List</Link></h4>
            <h6>Các loại sản phẩm hiện có : </h6>
            <ul>
              <li>Phone: mã loại sản phẩm : 	5bcd27fbc34b362638d01106</li>
              <li>One Plus: mã loại sản phẩm: 5bcd27e4c34b362638d01105</li>
            </ul>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="tenSP">Tên Sản Phẩm:</label>
                <input type="text" class="form-control" name="tenSP" value={tenSP} onChange={this.onChange} placeholder="Tên sản phẩm" />
              </div>
              <div class="form-group">
                <label for="donViTinh">Đơn vị tính:</label>
                <input type="text" class="form-control" name="donViTinh" value={donViTinh} onChange={this.onChange} placeholder="Đơn vị tính" />
              </div>
              <div class="form-group">
                <label for="donGia">Đơn Giá:</label>
                <input type="number" class="form-control" name="donGia" value={donGia} onChange={this.onChange} placeholder="Đơn giá" />
              </div>
              <div class="form-group">
                <label for="maLoaiSP">Mã Loại SP</label>
                <input type="text" class="form-control" name="maLoaiSP" value={maLoaiSP} onChange={this.onChange} placeholder="Mã Loại sản phẩm" />
              </div>
              <div class="form-group">
                <label for="soLuong">Số Lượng:</label>
                <input type="number" class="form-control" name="soLuong" value={soLuong} onChange={this.onChange} placeholder="Số lượng" />
              </div>
             
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
