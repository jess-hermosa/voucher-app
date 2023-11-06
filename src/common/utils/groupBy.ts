export const groupBy = (input: any, key: any) => {
  return input.reduce((acc: any, currentValue: any) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
};
