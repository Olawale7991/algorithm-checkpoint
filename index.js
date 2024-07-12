function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        length++;

        if (vowels.has(char)) {
            vowelCount++;
        }

        if (char === ' ' && sentence[i - 1] !== ' ') {
            wordCount++;
        }
    }

    if (sentence[sentence.length - 1] === '.') {
        wordCount++;
    }

    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

analyzeSentence("This is a test sentence.");
