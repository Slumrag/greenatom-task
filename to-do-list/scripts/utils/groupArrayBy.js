export function groupArrayBy(arr, field) {
  return arr.reduce((acc, curr) => {
    const newKey = curr[field];
    delete curr[field];
    // console.log(arr, curr, _);
    return { ...acc, [newKey]: curr };
  }, {});
}
