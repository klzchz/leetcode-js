function twoSum(nums, target) {
    const prevMap = {}; // Armazena valores já vistos (val -> index)
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]; // Diferença necessária para formar a soma
        console.log(diff in prevMap)
        if (diff in prevMap) {
            return [prevMap[diff], i]; // Retorna os índices se encontrar a soma
        }

        prevMap[nums[i]] = i; // Armazena o número atual e seu índice
    }

    return []; // Retorna array vazio se não encontrar solução
}


console.log("Result: "+twoSum([2, 7, 11, 15], 9)); // [0, 1]


/*
    [2, 7, 11, 15] nums

    [0, 1, 2, 3] index

    Target: 9

   hashMap = {} # primeiro loop
    diff = 9 - 2 =7 
 


*/