export const createParagraph = (text, className) => {
  const p = document.createElement("p");

  p.textContent = text;
  p.className = className;

  return p;
};

export const createInput = (type, id, className, placeholder) => {
  const input = document.createElement("input");

  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.className = className;

  return input;
};

export const createButton = (id, className, textContent) => {
  const button = document.createElement("button");

  button.id = id;
  button.className = className;
  button.textContent = textContent;

  return button;
};
