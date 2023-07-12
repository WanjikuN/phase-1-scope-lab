// Write your solution in this file!
var customerName = "bob";
var bestCustomer ;
const leastFavoriteCustomer = "you";
function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
    // console.log(customerName.toUpperCase());   
}
function setBestCustomer(){
    bestCustomer = `not bob`;
    // return bestCustomer;
}
// console.log(upperCaseCustomerName())
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "maybe you";
}