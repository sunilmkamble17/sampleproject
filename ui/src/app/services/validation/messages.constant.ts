// export namespace Messages {
//   export const required = 'Please enter {name}.';
//   export const requiredImage = 'Please upload {name}.';
//   export const minlength = '{name} must be {min} digits/characters long.';
//   export const maxlength = '{name} cannot be more than {max} digits/characters.';
//   export const email = '{name} is not valid.';
//   export const pattern = '{name} is not valid.';
//   export const amountpattern = '{name} should be in the range of 0-999999999.99 with max. of 2 decimals';
//   export const matchPassword = '{name} is not matched.';
//   export const invalidmobile = 'Only number is allowed.';
//   export const isNumberOnly = 'Only number is allowed.';
//   export const blankPassword = '{name} should not be blank.';
//   export const cardNumber = '{name} not valid.';
//   export const amount = 'Please enter {name} greater than 0';
//   export const expiryDate = '{name} not valid';
//   export const buyRate = '{name} should be greater than or equal to 0';
//   export const emailWithMergeFields = `{name} is not valid (multiple values should be seperated with ; )`;
//   export const numberLimitPattern = '{name} should be in the range of 1-60';
//   export const DiscountAmount = '{name} should be less than Amount';
//   export const Discount = '{name} should be less than Amount';
//   export const MinAmount = '{name} should be less than Maximum Amount';
//   export const getMessage = function (key: any) {
//     return key;
//   }
// }



export const Messages: any = {
  required: 'Please enter {name}.',
  requiredImage: 'Please upload {name}.',
  minlength: '{name} must be {min} digits/characters long.',
  maxlength: '{name} cannot be more than {max} digits/characters.',
  email: '{name} is not valid.',
  pattern: '{name} is not valid.',
  amountpattern: '{name} should be in the range of 0-999999999.99 with max. of 2 decimals',
  matchPassword: '{name} is not matched.',
  invalidmobile: 'Only number is allowed.',
  isNumberOnly: 'Only number is allowed.',
  blankPassword: '{name} should not be blank.',
  cardNumber: '{name} not valid.',
  amount: 'Please enter {name} greater than 0',
  expiryDate: '{name} not valid',
  buyRate: '{name} should be greater than or equal to 0',
  emailWithMergeFields: `{name} is not valid (multiple values should be seperated with ; )`,
  numberLimitPattern: '{name} should be in the range of 1-60',
  DiscountAmount: '{name} should be less than Amount',
  Discount: '{name} should be less than Amount',
  MinAmount: '{name} should be less than Maximum Amount',
}
