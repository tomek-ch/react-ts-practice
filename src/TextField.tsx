import React from 'react';

interface Props {
    setText: React.Dispatch<React.SetStateAction<string>>;
    text: string;
    inputRef: React.RefObject<HTMLInputElement>;
}

function TextField({ setText, text, inputRef }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <input
            placeholder="Aa"
            value={text}
            onChange={handleChange}
            ref={inputRef}
        />
    );
}

export default TextField;