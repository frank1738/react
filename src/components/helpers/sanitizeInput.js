export const sanitizeInput = (input, maxLength) => {
  const sanitizedInput = input.replace(/[^0-9]+/g, '');
  const formatedInput = [];

  if (sanitizedInput.length > maxLength) {
    return input.slice(0, -1);
  }

  for (let i = 0; i < sanitizedInput.length; i++) {
    if (sanitizedInput.length > 3 && i === 0) {
      formatedInput.push('(');
    }

    formatedInput.push(sanitizedInput[i]);
    if (sanitizedInput.length > 3 && i === 2) {
      formatedInput.push(')');
    }
    if (sanitizedInput.length > 6 && i === 5) {
      formatedInput.push('-');
    }
  }

  return formatedInput.join('');
};
