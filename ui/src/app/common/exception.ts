export class Exception {
  static exceptionMessage(error: any) {
    const errormessage = [];
    if (error.status === 401) {
      errormessage.push(this.getExceptionMessage('User is not authorized to access this resource'));
      return errormessage;
    } else if (error.status === 403 || error.status === 404 || error.status === 400) {
      errormessage.push(this.getExceptionMessage(''));
      return errormessage;
    } else if (error.status === 500) {
      errormessage.push('Internal server error. Please contact administrator.');
      return errormessage;
    }
    errormessage.push('Something went wrong. Please contact administrator.');
    return errormessage;
  }

  static getExceptionMessage(error: any) {
    let toastMessage = '';
    error = error.charAt(0).toUpperCase() + error.slice(1);
    switch (error) {
            
      case 'Key_InvalidEmail':
        toastMessage = 'Email Id is invalid';
        break;

      default:
        toastMessage = 'Something went wrong. Please contact administrator.';
        // toastMessage = error
        //   .replace(/([A-Z]+)/g, ' $1')
        //   .replace(/([A-Z][a-z])/g, ' $1')
        //   .replace('Key_', ' ');
    }
    return toastMessage;
  }
}
