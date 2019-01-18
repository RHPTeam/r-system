const validator = require('validator');
module.exports = {
  createUser:  payload => {
    const errors = {};
    let isFormValid = true;
    let message = '';
  
    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0 || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Email is require';
    }
  
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 6) {
      isFormValid = false;
      errors.password = 'Password is require';
    }
  
    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = 'User name is require';
    }
  
    if (!payload || typeof payload.nameDisplay !== 'string') {
      isFormValid = false;
      errors.nameDisplay = 'Name display is require';
    }
  
    if (!isFormValid) {
      message = 'Xảy ra sự cố thông tin bạn cung cấp.';
    }
  
    return {
      success: isFormValid,
      message,
      errors
    };
  }
}
