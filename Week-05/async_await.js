// async/await and parallel execution

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const work = async (label, ms) => {
  await delay(ms);
  return label;
};

const run = async () => {
  try {
    const [a, b] = await Promise.all([work("A", 200), work("B", 100)]);
    console.log("Parallel:", a, b);
  } catch (err) {
    console.error("Async error:", err.message);
  }
};

run();
