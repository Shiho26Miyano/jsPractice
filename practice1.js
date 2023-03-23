function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log('found it', match, 'at', i)
        }else{
            console.log('no match at all', i)
        }
    }
}

letterFinder("test", "t")
