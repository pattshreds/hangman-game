import { useState } from 'react';
import words from './wordList.json';

function App() {
    const [wordToGuess, useWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });
    console.log(wordToGuess);

    return (
        <>
            <h1>hi</h1>
        </>
    );
}

export default App;
