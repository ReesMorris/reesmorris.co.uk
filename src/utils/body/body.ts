// Add a class to the body
const addClass = (name: string) => {
  document.body.classList.add(name);
};

// Remove a class from the body
const removeClass = (name: string) => {
  document.body.classList.remove(name);
};

const body = {
  addClass,
  removeClass
};

export default body;
