export {toGrammaticalNumber}

function toGrammaticalNumber(inputVal) {
    const numeralDictionary = {
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five'
    };

    return numeralDictionary[inputVal] || inputVal;
}