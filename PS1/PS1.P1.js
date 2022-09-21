const reverseString = str => {
    cleaned_all_punctuations = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    cleaned_all_numbers = cleaned_all_punctuations.replace(/[0-9]/g, "")
    sorted = cleaned_all_numbers.split('').sort().reverse().join('')
    return sorted;
}
console.log(reverseString('exioi')); //result is 'xoiie'
console.log(reverseString('supercalifragilisticexpialidocious'));//result is 'xuutsssrrppoollliiiiiiigfeedcccaaa'
console.log(reverseString('123abc./3')) //result is 'cba'






