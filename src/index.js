
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || Array.isArray(matrix) && (matrix.length === 0)) {
    return [];
  }
  let temp = [];
//   let result;
//   temp = matrix.map((el, ind) => {
//       let res;
//       if (ind % 2 !== 0) {
//           res = el.map((el) => el).reverse() 
//       } else if (ind % 2 === 0) {
//           res = el.map(el => el)
//       }
//       return +res.join('');
//   })

    temp = matrix.reduce((ac, el, ind) => {
        if(ind % 2 === 0) {
            el.forEach(elem => {
                ac.push(elem)
            })
            return ac
        } else if(ind % 2 !== 0) {
            el = el.reverse();
            el.forEach(elem => {
                ac.push(elem)
            })
            return ac
        }
    }, []);

  return temp;

}
