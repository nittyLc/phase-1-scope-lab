// Write your solution in this file!
// Declare customerName in the global scope
var customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declared as a global variable implicitly
}

// Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Function to change the least favorite customer (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // Attempting to reassign a constant
}
