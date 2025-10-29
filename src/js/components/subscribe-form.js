import { validateForms } from '../functions/validate-forms.js';
import vars from "../_vars.js";

if (vars.subscribeForm) {
  const rules1 = [
    {
      ruleSelector: ".subscribe__input",
      rules: [
        {
          rule: "email",
          value: true,
          errorMessage: "Введите корректный E-mail!"
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните E-mail!",
        },
      ],
    },
  ];

  const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
  };

  validateForms(".subscribe__form", rules1, afterForm);
}

