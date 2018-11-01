import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sanpham: {}
    };
  }

  componentDidMount() {
    axios.get('/api/sanpham/'+this.props.match.params.id)
      .then(res => {
        this.setState({ sanpham: res.data });
        console.log(this.state.sanpham);
      });
  }

  onChange = (e) => {
    const state = this.state.sanpham
    state[e.target.name] = e.target.value;
    this.setState({sanpham:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { tenSP, donViTinh,donGia, maLoaiSP, soLuong} = this.state.sanpham;

    axios.put('/api/sanpham/'+this.props.match.params.id, { tenSP, donViTinh,donGia, maLoaiSP, soLuong})
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT PRODUCT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.sanpham._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Product </Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="tenSP">Tên Sản Phẩm:</label>
                <input type="text" class="form-control" name="tenSP" value={this.state.sanpham.tenSP} onChange={this.onChange} placeholder="Tên sản phẩm" />
              </div>
              <div class="form-group">
                <label for="donViTinh">Đơn vị tính:</label>
                <input type="text" class="form-control" name="donViTinh" value={this.state.sanpham.donViTinh} onChange={this.onChange} placeholder="Đơn vị tính" />
              </div>
              <div class="form-group">
                <label for="donGia">Đơn Giá:</label>
                <input type="number" class="form-control" name="donGia" value={this.state.sanpham.donGia} onChange={this.onChange} placeholder="Đơn giá" />
              </div>
              <div class="form-group">
                <label for="maLoaiSP">Mã Loại SP</label>
                <input type="text" class="form-control" name="maLoaiSP" value={this.state.sanpham.maLoaiSP} onChange={this.onChange} placeholder="Mã Loại sản phẩm" />
              </div>
              <div class="form-group">
                <label for="soLuong">Số Lượng:</label>
                <input type="number" class="form-control" name="soLuong" value={this.state.sanpham.soLuong} onChange={this.onChange} placeholder="Số lượng" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
