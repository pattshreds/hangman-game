type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
};

export function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: HangmanWordProps) {
    return (
        <div
            style={{
                border: '2px solid red',
                maxWidth: '100vw',
                display: 'flex',
                gap: '.25em',
                fontSize: 'clamp(2rem, 12vw, 6rem)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
            }}
        >
            {wordToGuess.split('').map((letter, index) => (
                <span style={{ borderBottom: '.1em solid black' }} key={index}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? 'visible'
                                    : 'hidden',
                            color:
                                !guessedLetters.includes(letter) && reveal
                                    ? 'red'
                                    : 'black',
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}
