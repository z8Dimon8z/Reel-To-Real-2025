import JustValidate from "just-validate";
import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";
import vars from "../_vars.js";

if (vars.enterForm) {
  const telSelector = vars.enterForm.querySelector('input[type="tel"]');

  const inputMask = new Inputmask("+7 (999) 999-99-99");
  inputMask.mask(telSelector);

  const validation = new JustValidate(vars.enterForm);

  validation.addField(".enter-modal__tel", [
    {
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Впишите верный номер телефона",
    },
  ]);

  validation.onSuccess((ev) => {
    vars.enterModalSteps.forEach(step => { step.classList.remove("enter-modal__step--active"); });

    document.querySelector(".enter-modal__step--second").classList.add('enter-modal__step--active');
    ev.target.reset();
  });

  vars.enterModalBack.addEventListener('click', (e) => {
    vars.enterModalSteps.forEach(step => { step.classList.remove("enter-modal__step--active"); });

    document.querySelector(".enter-modal__step--first").classList.add('enter-modal__step--active');
  });
}
