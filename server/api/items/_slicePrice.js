module.exports = amount => {
  const float = /(\d+)\.(\d+)/.exec(String(amount));
  return float
    ? {
        amount: Number(float[1]),
        decimals: Number(float[2])
      }
    : {
        amount,
        decimals: 0
      };
};
