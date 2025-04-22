/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';
import JustValidate from 'just-validate';

/**
 * Write any other JavaScript below
 */

+(function () {
  const validator = new JustValidate('.contact__form', {
    validateBeforeSubmitting: true,
  });

  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'El nombre es obligatorio',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'El correo es obligatorio',
      },
      {
        rule: 'email',
        errorMessage: 'Correo inválido',
      },
    ])
    .addField('#message', [
      {
        rule: 'required',
        errorMessage: 'El mensaje no puede estar vacío',
      },
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Mínimo 10 caracteres',
      },
    ]);
})();
