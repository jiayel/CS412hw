const applyFunction=(str, func)=>{
    return func(str);
}

let str = 'supercalifragilisticexpialidocious'
console.log(applyFunction(str, (str)=>str.replace(/c/g, ' c').split(' ')))

console.log(applyFunction(str, (str)=>{
    let object ={
        originalString: str,
        modifiedString:str.replace(/a/g,'A'),
        numberReplaced: str.match(/a/g).length,
        length:str.replace(/a/g,'A').length,
    }
    return object}
    ))

