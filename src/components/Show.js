import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/sanpham/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.sanpham._id}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <dl>
              <dt>Tên sản phẩm</dt>
              <dd>{this.state.sanpham.tenSP}</dd>
              <dt>Đơn vị tính:</dt>
              <dd>{this.state.sanpham.donViTinh}</dd>
              <dt>Đơn giá:</dt>
              <dd>{this.state.sanpham.donGia}</dd>
              <dt>Mã loại sản phẩm:</dt>
              <dd>{this.state.sanpham.maLoaiSP}</dd>
              <dt>Số lượng</dt>
              <dd>{this.state.sanpham.soLuong}</dd>
            </dl>
            <Link to={`/edit/${this.state.sanpham._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.sanpham._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
