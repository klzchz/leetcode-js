function productExceptSelf(nums) {
    const res = new Array(nums.length).fill(1); // Resultado começa com tudo 1

    let prefix = 1;
    

    // 1ª passagem: prefixo da esquerda
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;           // res[i] = produto de todos os elementos à esquerda
        prefix *= nums[i];         // atualiza o prefixo acumulado
    }

    let postfix = 1;

    // 2ª passagem: sufixo da direita
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;         // multiplica o prefixo que já estava lá pelo sufixo
        postfix *= nums[i];        // atualiza o sufixo acumulado
    }

    return res;
}
// Exemplo de uso
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Saída: [24, 12, 8, 6]

// Explicação:          

// Para o índice 0: 2*3*4 = 24
// Para o índice 1: 1*3*4 = 12
// Para o índice 2: 1*2*4 = 8
// Para o índice 3: 1*2*3 = 6