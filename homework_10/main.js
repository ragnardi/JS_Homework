/**************FIRST_TASK***************/
function isPalindrom(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
}

/*************SECOND_TASK***************/
function isAnagram(wordOne, wordTwo) {
    var firstToCompare = wordOne.toLowerCase().split('').sort().join(''),
        secondToCompare = wordTwo.toLowerCase().split('').sort().join('');

    return firstToCompare == secondToCompare;
}

/*************THIRD_TASK***************/
function divideArr(arrToDivide, subArrLength) {
    var subArrContainer = [];

    for (var i = 0; i < arrToDivide.length; i += subArrLength) {
        subArrContainer.push(arrToDivide.slice(i, i + subArrLength));
    }

    return subArrContainer;
}

/*************FOURTH_TASK***************/
function vowelsCount(text) {
    var vowels = ['a', 'e', 'o', 'u', 'y', 'i',
                 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я' ],
        vowelsCounter = 0;

    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i].toLowerCase()) != -1) {
            vowelsCounter++;
        }
    }

    return vowelsCounter;
}
                   /*OR*/
function vowelsCountB(text) {
    var vowelsCounter = 0;

    for (var i = 0; i < text.length; i++) {
        if (text[i].match(/[aeouyiаеёиоуыэюя]/gi)) {
            vowelsCounter++;
        }
    }

    return vowelsCounter;
}

/*************FIFTH_TASK***************/
function repeatCount(text) {
    var singleWords = text.toLowerCase().match(/[\wа-яё]+/g);

    var repeatCounter = 0,
        maxRepeatWord = '';

    for (var i = 0; i < singleWords.length; i++) {
        var preCounter = 1;

        for (var j = i + 1; j < singleWords.length; j++) {
            if (singleWords[i] === singleWords[j]) {
                preCounter++;
            }
        }

        if (preCounter > repeatCounter) {
            repeatCounter = preCounter;
            maxRepeatWord = singleWords[i];
        }
    }

    return 'Максимальное число повторений у слова \"' + maxRepeatWord + '\" - ' + repeatCounter + '.';
}

/*************SIXTH_TASK***************/
function splitOnSentences(text) {
    var sentences = text.split(/[.!?]+/g);

    if (!sentences[sentences.length - 1].length) {
        sentences.pop(sentences[sentences.length - 1]);
    }

    for (var i = 0; i < sentences.length; i++) {
        console.log(sentences[i].trim() + ': Letters quantity is: ' + sentences[i].match(/[a-zа-яё]/gi).length);
    }
}