import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:3001/";

class AuthService {

  login(email, password) {
    return axios.post(API_URL + "login", {
      email,
      password
    })
  }

  register(ten_shop, ho_va_ten, email, sdt, password) {
    return axios.post(API_URL + "register", {
      ten_shop,ho_va_ten, email, sdt, password
    });
  };

  // add item into shop
  addItem(id_shop, ten_san_pham, gia) {
    return axios.post(API_URL + "createSanPham", {
      id_shop, ten_san_pham, gia
    });
  }
  // update item of shop
  updateItem(id_san_pham, ten_san_pham, gia) {
    return axios.post(API_URL + "updateSanPham", {
      id_san_pham, ten_san_pham, gia
    });
  }
  // them(formData) {
  //   console.log(formData.ten_san_pham)
  //   return axios.post(API_URL + "them", formData);
  // }
  getDataShop() {
    return axios.get(API_URL + "myShop", { headers: authHeader() });
  }
}

export default new AuthService();
