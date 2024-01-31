let words = ['hi', 'potatoe',"Hi", 'car', 'hi', 'hi', 'car', "hello", "hi", "HI", "Hi"]
let duplicateWords = words.filter((word, index)=> words.indexOf(word) != index)
console.log([... new Set (duplicateWords)])


let wordOccurenceObj = {}
words.forEach(
    word =>{
        wordOccurenceObj = {...wordOccurenceObj, 
            [word]: wordOccurenceObj[word] ? wordOccurenceObj[word]+=1 : 1 }
    }
)
console.log(wordOccurenceObj)