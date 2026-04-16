// promise chaining and error handling

const fetchData = (label, ms, shouldFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) return reject(new Error(label + " failed"));
      resolve(label + " ok");
    }, ms);
  });

fetchData("step1", 100)
  .then((res) => {
    console.log(res);
    return fetchData("step2", 150);
  })
  .then((res) => {
    console.log(res);
    return fetchData("step3", 100, true);
  })
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Done"));
