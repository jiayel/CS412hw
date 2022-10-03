function* F() {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}

//let x = F()
//console.log(x.next())
//console.log(x.next())

function* fib(){
    let fibnum = F()
    let count =0
    while (count<6){
        result = fibnum.next().value
        if (result%2==0){
            console.log(result)
            count++
        }
        else{
            result
        }
    }

}

let xx = fib();
fib().next();