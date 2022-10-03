function* emitSentence(){
    const str = yield
    wordlist = str.split(' ')
    for (const x of wordlist){
        console.log(x)
    }
}

let x = emitSentence();  //init
x.next();  //start generator
x.next("All I know is something like a bird within her sang"); //pass value to the generator
