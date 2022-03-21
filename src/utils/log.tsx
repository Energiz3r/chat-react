const logLevel = 3;

const log = (message: string, level = 1) => {
  if (level >= logLevel) {
    console.log(message);
  }
};

export default log;
