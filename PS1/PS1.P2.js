

const parser = (str) =>{
    [left,right] = str.split(/['+'|'*'|'/'|'^'|'%'|/-]/)
    return [parseInt(left), parseInt(right)];
}

const evaluate = (str)=>{
    if (str.includes('+')){
        return (left, right) => left+right
    }else if (str.includes("-")){
        return (left,right) => left-right
    }else if (str.includes("*")){
        return (left,right) => left*right
    }else if (str.includes("/")){
        return (left,right) => left/right
    }else if (str.includes("^")){
        return (left,right) => left**right
    }else if (str.includes("%")){
        return (left,right) => left%right
    }else{
        return false
    }
}
const expression = '3872/33';
let operator = evaluate(expression)
console.log(parser(expression))
console.log(`${expression} = ${operator(parser(expression)[0], parser(expression)[1])}`)




//console.log(evaluate('8%3'))

//console.log(parser('2-2'));
