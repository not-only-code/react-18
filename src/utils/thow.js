
const innerFunction = () => {
  // throw new Error('Guacamole!');
  // throw new Promise((resolve => resolve('cucu')));
  throw new Promise(((resolve, reject) => reject('cucu')));
}

const wrapperFunction = () => {
  try {
    return innerFunction();
  } catch (error) {
    // log Instana, Sentry or whatever you want
    console.error(error);
  }
}

wrapperFunction();
console.log('do another thing');