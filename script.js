document.getElementById('translateBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
    const outputText = document.getElementById('outputText');

    if (inputText.trim() === '') {
        return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.responseData) {
                outputText.value = data.responseData.translatedText;
            } else {
                outputText.value = 'Error: Could not translate text.';
            }
        })
        .catch(error => {
            console.error('Translation error:', error);
            outputText.value = 'Error: Could not connect to the translation service.';
        });
});
