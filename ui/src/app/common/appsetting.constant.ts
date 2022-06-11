// baseUrl: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
// baseUrl: '', // Test Environment
// baseUrl: '', // UAT Environment
// baseUrl: '', // Prod Environment

import { environment } from 'src/environments/environment';

export class AppSetting {
  static baseUrlEventBus = environment.baseUrlEventBus;
  static baseUrlOrder = environment.baseUrlOrder;
  static baseUrlProduct = environment.baseUrlProduct;
  static baseUrlUser = environment.baseUrlUser;

  static signup = {
    register: AppSetting.baseUrlUser + `/register`,
  }

  static login = {
    userlogin: AppSetting.baseUrlUser + `/userlogin`,
  }

  static forgotPassword = {
    forgotPassword: AppSetting.baseUrlUser + `/forgotPassword`,
  }

  static user = {
    addUser: AppSetting.baseUrlUser + `/register`,
    // editUser: AppSetting.baseUrlUser + `/editUser`,
    // deleteUser: AppSetting.baseUrlUser + `/deleteUser`,
    // getUserById: AppSetting.baseUrlUser + `/getUserById`,
    // getAllUser: AppSetting.baseUrlUser + `/getAllUser`,
  }

  static product = {
    addProduct: AppSetting.baseUrlProduct + `/createeditproduct`,
    editProduct: AppSetting.baseUrlProduct + `/createeditproduct`,
    deleteProduct: AppSetting.baseUrlProduct + `/deleteproduct`,
    // getProductById: AppSetting.baseUrlProduct + `/getproduct/{productId}`,
    getAllProduct: AppSetting.baseUrlProduct + `/getalliproducts`,
  }

  static order = {
    addOrder: AppSetting.baseUrlOrder + `/orderitem`,
    // editOrder: AppSetting.baseUrlOrder + `/orderitem`,
    // deleteOrder: AppSetting.baseUrlOrder + `/orderitem`,
    getAllOrder: AppSetting.baseUrlOrder + `/getordereditems`,
  }


}
