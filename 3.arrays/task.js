function compareArrays(arr1, arr2) {
  let result =
    arr1.length === arr2.length && arr1.every((a, b) => a === arr2[b]);

  return result; // boolean
}
//
//
//
//
//

function advancedFilter(arr) {
  let resultArr = arr
    .filter(
      (multiple) =>
        (multiple > 0 && multiple !== undefined && multiple % 3) === 0
    )
    .map((tenX) => tenX * 10);

  return resultArr; // array
}
