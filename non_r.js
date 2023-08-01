/**
 * non repetitive numbers
 * Input: [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
 * Output: [9, 1]
 */

function findRes(input) {
  let res = {};

  input.forEach((i) => {
    let x = i.toString();
    // if(res[x] != null)  {
    if (res[x] == null) {
      res[x] = 1;
    } else {
      let c = parseInt(res[x]);
      res[x] = c + 1;
    }
  });

  return Object.keys(res).filter((k) => res[k] == 1);
}

console.log(findRes([2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]));
