import React, { Component } from "react";
import UserService from "../services/auth.service";

export default class MyShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      san_pham: [],
      currentUser: { username: "" }
    };
  }
  componentDidMount() {
    UserService.getDataShop().then(
      response => {
        this.setState({
          san_pham: response.data.san_pham
        })
        console.log(this.state.san_pham)
        console.log("Okay")
      },
      error => {
        console.log(this.state.san_pham)
        console.log(error)

      }
    );
  }
  render() {
    return (
      <div>
        <a href="/add" className="btn btn-sm btn-primary" style={{ width: '150px' }}>Thêm Sản Phẩm</a>
        <br />
        <br />

        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              {/* <th>Số Lượng</th>
              <th>hình ảnh</th> */}
              {/* <th className="text-center">Hình ảnh</th> */}
            </tr>
          </thead>
          {this.state.san_pham.map(item => {
            return <tbody key={item._id}>
              <tr>
                <td>{item.ten_san_pham}</td>
                <td>{item.gia}</td>
                {/* <td className="text-center"><img src={'http://localhost:3000/' + item.image} alt="" width="40px" height="40px" /></td> */}
                {/* <td>{item.so_luong}</td> */}
                <td>
                  <a href={"/edit/"+item._id }className="btn btn-sm btn-primary">Sửa</a>
                  <a href="" className="btn btn-sm btn-danger" style={{ marginLeft: '10px' }}>Xóa</a>
                </td>
              </tr>
            </tbody>
          })
          }
        </table>
      </div>
    )
  }
}