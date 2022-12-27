import axios from "axios";

async function getRandomWord() {
    const page = Math.floor(Math.random() * (107 - 1) + 1);
    const options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/',
        params: {
          letters: '5',
          limit: '100',
          page: page
        },
        headers: {
          'X-RapidAPI-Key': '87e7788accmsh7d75e0fe61be5a0p1de395jsn2b871276ac7e',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };    
    let words = await axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    words = words.results.data;
    let word = words[Math.floor(Math.random() * (words.length))];
    for (let i = 0; i < 5; i++) {
        if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
            i = 0
            word = words[Math.floor(Math.random() * (words.length))];
        }
    }
    return word;
}

async function wordExists(word) {
    const options = {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
        headers: {
          'X-RapidAPI-Key': '87e7788accmsh7d75e0fe61be5a0p1de395jsn2b871276ac7e',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    const exists = await axios.request(options).then(function (response) {
        return true
    }).catch(function (error) {
        return false
    });
    return exists;
}

export { getRandomWord, wordExists }