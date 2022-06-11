// baseUrl: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
// baseUrl: '', // Test Environment
// baseUrl: '', // UAT Environment
// baseUrl: '', // Prod Environment

import { environment } from 'src/environments/environment';

export class AppSetting {
  static baseUrl = environment.baseUrl;

  static signup = {
    register: AppSetting.baseUrl + `/register`,
  }

  static login = {
    userlogin: AppSetting.baseUrl + `/userlogin`,
  }

  static forgotPassword = {
    forgotPassword: AppSetting.baseUrl + `/forgotPassword`,
  }

  static user = {
    addUser: AppSetting.baseUrl + `/register`,
    // editUser: AppSetting.baseUrl + `/editUser`,
    // deleteUser: AppSetting.baseUrl + `/deleteUser`,
    // getUserById: AppSetting.baseUrl + `/getUserById`,
    // getAllUser: AppSetting.baseUrl + `/getAllUser`,
  }

  static customer = {
    // addCustomer: AppSetting.baseUrl + `/addCustomer`,
    // editCustomer: AppSetting.baseUrl + `/editCustomer`,
    // deleteCustomer: AppSetting.baseUrl + `/deleteCustomer`,
    // getCustomerById: AppSetting.baseUrl + `/getCustomerById`,
    // getAllCustomer: AppSetting.baseUrl + `/getAllCustomer`,
  }

  static product = {
    addProduct: AppSetting.baseUrl + `/createeditproduct`,
    editProduct: AppSetting.baseUrl + `/createeditproduct`,
    deleteProduct: AppSetting.baseUrl + `/deleteproduct`,
    // getProductById: AppSetting.baseUrl + `/getproduct/{productId}`,
    getAllProduct: AppSetting.baseUrl + `/getalliproducts`,
  }

  static order = {
    addOrder: AppSetting.baseUrl + `/orderitem`,
    // editOrder: AppSetting.baseUrl + `/orderitem`,
    // deleteOrder: AppSetting.baseUrl + `/orderitem`,
    getAllOrder: AppSetting.baseUrl + `/getordereditems`,
  }


}
