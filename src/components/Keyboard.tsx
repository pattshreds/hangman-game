import styles from './keyboard.module.css';

type KeyboardProps = {
    disabled?: boolean;
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled = false,
}: KeyboardProps) {
    const KEYS = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    return (
        <div
            style={{
                // display: 'grid',
                // gridTemplateColumns:
                //     'repeat(auto-fit, minmax(clamp(40px, 8vw, 75px), 1fr))',
                // gap: '.5rem',
                padding: '0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '.5rem',
            }}
        >
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btns} ${
                            isActive ? styles.active : ''
                        } ${isInactive ? styles.inactive : ''}`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                        style={{
                            fontSize: 'clamp(1.8rem, 2vw, 1.5rem)',
                            padding: 'clamp(0.25rem, 1vw, 0.5rem)',
                            width: 'clamp(40px, 8vw, 75px)',
                        }}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
