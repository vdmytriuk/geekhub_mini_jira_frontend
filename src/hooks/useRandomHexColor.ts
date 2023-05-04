import { useMemo } from 'react';

const darken = (color: string, amount: number): string => {
    const parseColor = (hex: string): number[] => hex.replace(/^#/, '').match(/.{1,2}/g)?.map(v => parseInt(v, 16)) ?? [];

    const darkerColor = parseColor(color).map(v => Math.floor(v * (1 - amount)));
    return `#${darkerColor.map(v => v.toString(16).padStart(2, '0')).join('')}`;
};

const useRandomHexColor = (): [string, string] => {
    const color = useMemo(() => {
        let randomColor = '';
        do {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } while (randomColor === '#000000' || randomColor.startsWith('#00'));

        const darkerColor = darken(randomColor, 0.2);
        return [randomColor, darkerColor];
    }, []);

    const linearGradient = useMemo(() => {
        return `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;
    }, [color]);

    return [color[0], linearGradient];
};

export default useRandomHexColor;
