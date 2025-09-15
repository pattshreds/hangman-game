// Making this change to push to Github to test Firebase connection

const HEAD = (
    <div
        style={{
            width: '25px',
            height: '25px',
            borderRadius: '100%',
            border: '10px solid black',
            position: 'absolute',
            top: '30px',
            right: '-18px',
        }}
    />
);

const BODY = (
    <div
        style={{
            width: '10px',
            height: '50px',
            background: 'black',
            position: 'absolute',
            top: '70px',
            right: '0',
        }}
    />
);

const RIGHT_ARM = (
    <div
        style={{
            width: '50px',
            height: '8px',
            background: 'black',
            position: 'absolute',
            top: '80px',
            right: '-50px',
            rotate: '-30deg',
            transformOrigin: 'left bottom',
        }}
    />
);

const LEFT_ARM = (
    <div
        style={{
            width: '50px',
            height: '8px',
            background: 'black',
            position: 'absolute',
            top: '80px',
            right: '10px',
            rotate: '30deg',
            transformOrigin: 'right bottom',
        }}
    />
);

const RIGHT_LEG = (
    <div
        style={{
            width: '50px',
            height: '8px',
            background: 'black',
            position: 'absolute',
            top: '110px',
            right: '-42px',
            rotate: '60deg',
            transformOrigin: 'left bottom',
        }}
    />
);

const LEFT_LEG = (
    <div
        style={{
            width: '50px',
            height: '8px',
            background: 'black',
            position: 'absolute',
            top: '110px',
            right: '2px',
            rotate: '-60deg',
            transformOrigin: 'right bottom',
        }}
    />
);

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div
            style={{
                // border: '2px solid red',
                position: 'relative',
                marginRight: '20px',
            }}
        >
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div
                style={{
                    height: '35px',
                    width: '10px',
                    background: 'black',
                    position: 'absolute',
                    top: '0',
                    right: '0px',
                }}
            />
            <div
                style={{
                    height: '10px',
                    width: '100px',
                    background: 'black',
                    marginLeft: '70px',
                }}
            />
            <div
                style={{
                    height: '250px',
                    width: '10px',
                    background: 'black',
                    marginLeft: '70px',
                }}
            />
            <div
                style={{
                    height: '10px',
                    width: '150px',
                    background: 'black',
                }}
            />
        </div>
    );
}
