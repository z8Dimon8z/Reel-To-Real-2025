import { validateForms } from '../functions/validate-forms.js';
import vars from "../_vars.js";

if (vars.orderForm) {
  const rules1 = [
    {
      ruleSelector: ".name-input",
      rules: [
        {
          rule: "minLength",
          value: 3,
          errorMessage: "Не менее 3 символов!",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните имя!",
        },
      ],
    },
    {
      ruleSelector: ".surname-input",
      rules: [
        {
          rule: "minLength",
          value: 3,
          errorMessage: "Не менее 3 символов!",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните фамилию!",
        },
      ],
    },
    {
      ruleSelector: ".tel-input",
      tel: true,
      telError: "Введите корректный телефон",
      rules: [
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните телефон!",
        },
      ],
    },
    {
      ruleSelector: ".email-input",
      rules: [
        {
          rule: "email",
          value: true,
          errorMessage: "Введите корректный E-mail!",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните E-mail!",
        },
      ],
    },
    {
      ruleSelector: ".address-input",
      rules: [
        {
          rule: "minLength",
          value: 3,
          errorMessage: "Не менее 3 символов!",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните адрес!",
        },
      ],
    },
    {
      ruleSelector: ".postcode-input",
      rules: [
        {
          rule: "number",
          errorMessage: "Только цифры",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните индекс!",
        },
      ],
    },
    {
      ruleSelector: ".message-textarea",
      rules: [
        {
          rule: "minLength",
          value: 10,
          errorMessage: "Не менее 10 символов!",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните сообщение!",
        },
      ],
    },
  ];

  const afterForm = () => {
    console.log("Произошла отправка, тут можно писать любые действия");
  };

  validateForms(".order-content__form", rules1, afterForm);
}

