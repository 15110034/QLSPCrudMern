import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sanphams: []
    };
  }

  componentDidMount() {
    axios.get('/api/sanpham')
      .then(res => {
        this.setState({ sanphams: res.data });
        console.log(this.state.sanphams);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              SẢN PHẨM CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Product</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Mã Sản phẩm</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Đơn vị tính</th>
                  <th>Đơn giá</th>
                  <th>Mã Loại sản phẩm</th>
                 <th>Tên loại sản phẩm</th>
                  <th>Số lượng</th>
                  
                </tr>
              </thead>
              <tbody>
              {this.state.sanphams.map(sanpham =>
                  <tr>
                    <td><Link to={`/show/${sanpham._id}`}>{sanpham._id}</Link></td>
                    <td>{sanpham.tenSP}</td>
                    <td>{sanpham.donViTinh}</td>
                    <td>{sanpham.donGia}</td>
                    <td>{sanpham.maLoaiSP._id}</td>
                    <td>{sanpham.maLoaiSP.tenLoai}</td>
                    <td>{sanpham.soLuong}</td>
                    
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
