const emailInput = document.querySelector('input[name="email"]');
const ZIPInput = document.querySelector('input[name="zip-code"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirm-password"]'
);
const submitBtn = document.querySelector("button");

// DIRECTIONS:
// * Perhaps remove required attribute (since we will work on :valid, :invalid pseudo classes later)
// * For every input, include a "change" event as firing the validation everytime user
//   click something is probably making their life harder than they need to be
// * Include some style
// * When the form is successfully submit, do something with the page
