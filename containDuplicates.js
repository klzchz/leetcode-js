/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let hashset = new Set();

    for (let n of nums) {
        if (hashset.has(n)) {
            return true;  // Se o valor já existe, é duplicado
        }
        hashset.add(n);  // Adiciona ao conjunto
    }

    return false;


};

console.log(containsDuplicate([1,2,3,1])) // true