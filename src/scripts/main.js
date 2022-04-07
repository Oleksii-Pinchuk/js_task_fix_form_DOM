'use strict';

const allInputs = document.querySelectorAll('.field-text');

[...allInputs].map(input => {
  const upperedName = input.name[0].toUpperCase()
    + input.name.slice(1).replace(/(\B[A-Z])/g, ' $1');

  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for=${input.id}>
      ${upperedName}
    </label>`
  );

  input.placeholder = upperedName;
});
