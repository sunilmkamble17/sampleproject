export class ValidationConstant {
  static email_regex =
    // tslint:disable-next-line: max-line-length
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static charactersOnlyWithSpace_regex = '^[a-zA-Z]+([a-zA-Z ]+)*$';
  static alphanumeric_regex = '^[a-zA-Z0-9]*$';
  static alphanumericWithSpace_regex = '^[a-zA-Z0-9]+([a-zA-Z0-9 ]+)*$';
  static numbersOnly_regex = '^[0-9]*$';
  static phoneFormat_regex = '^[0-9-]*$';
  // Need to check alternative regex for "allow everything except space"
  static spaceNotAccepted_regex =
    '^[a-zA-Z0-9~!@#$%^&*()_+{}|:"<>?`\\-=\\[\\]\\\\;\',./]+([a-zA-Z0-9~!@#$%^&*()_+{}|:"<>?`\\-=\\[\\]\\\\;\',./ \r\n|\r|\n]+)*$';
  // First Name, Last Name, Customer Name
  static firstNameLastName_regex = "^[a-zA-Z]+([a-zA-Z ,.'-]+)*$";
  static amount_regex = '^([0-9]{1,9})(\\.[0-9]{1,2})?$';
  static amount_regex_amountGreaterThanZero = new RegExp(/^(?=.*[1-9])\d{0,9}(?:\.\d{0,2})?$/);
  static percentage_regex = '(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,2})?$)';

  static common = {
    title: { name: 'Title', minLength: 5, maxLength: 50 },
    firstName: { name: 'First Name', minLength: 5, maxLength: 50 },
    middleName: { name: 'Middle Name', minLength: 5, maxLength: 50 },
    lastName: { name: 'Last Name', minLength: 5, maxLength: 50 },
    fax: { name: 'Fax', maxLength: 20, minLength: 10 },
    countryCode: { name: 'Country Code', maxLength: 10, minLength: 2 },
    mobile: { name: 'Phone', maxLength: 12, minLength: 10},    
    email: { name: 'Email', maxLength: 256, minLength: 5 },
    url: { name: 'URL', maxLength: 50, minLength: 5 },
    addressLine1: { name: 'Address Line 1', maxLength: 50, minLength: 5 },
    addressLine2: { name: 'Address Line 2', maxLength: 50, minLength: 5 },
    city: { name: 'City', maxLength: 50, minLength: 5 },
    state: { name: 'State', maxLength: 50 },
    country: { name: 'Country', maxLength: 50 },
    postalCode: { name: 'Postal (Zip) Code', maxLength: 10, minLength: 5 },
  };

  static login = {
    username: { name: 'User Name', maxLength: 50, minLength: 7 },
    password: { name: 'Password', maxLength: 50, minLength: 8 },
  };

  static forgotPassword = {
    username: { name: 'User Name', maxLength: 50, minLength: 7 },
  };

  static resetPassword = {
    oldPassword: { name: 'Old Password', maxLength: 50, minLength: 8 },
    newPassword: { name: 'New Password', maxLength: 50, minLength: 8 },
    confirmPassword: { name: 'Confirm Password', maxLength: 50, minLength: 8 },
  };

  static product = {
    name: { name: 'Name', maxLength: 50, minLength: 1 },
    price: { name: 'Price', maxLength: 50, minLength: 1 },
    quantity: { name: 'Quantity', maxLength: 50, minLength: 1 },
  };

}
