const stepper = document.querySelector(".stepper");
const emailForm = document.querySelector("#email form");
const passwordForm = document.querySelector("#password form");
const submitForm = document.querySelector("#submit form");
function addState(state) {
  stepper.className = "stepper";
  stepper.classList.add(`state-${state}`);
}
function onSubmit(event, state) {
  event.preventDefault();
  addState(state);
}
emailForm.addEventListener("submit", function(event) {
  onSubmit(event, "password");
  document.querySelector("#password form input").focus();
});
passwordForm.addEventListener("submit", function(event) {
  onSubmit(event, "submit");
});
submitForm.addEventListener("submit", function(event) {
  onSubmit(event, "thankyou");
});
