export const suspend = (promise) => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender; // We throw here a promise
      } else if (status === "error") {
        throw result; // We throw an error
      } else if (status === "success") {
        return result; // We throw the result
      }
    },
  };
}

export const swrFetcher = async url => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json();
}