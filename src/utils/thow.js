
const innerFunction = () => {
  // throw new Error('Im a string!');
  // throw new Promise((resolve => resolve('Im a resolved promise')));
}

const wrapperFunction = () => {
  try {
    return innerFunction();
  } catch (error) {
    console.error(error);
  }
}

wrapperFunction();

console.log('proceed the execution');