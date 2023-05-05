// import { useEffect, useState } from 'react';
//
// const INTERVAL_REGEX = /^(\d+)([wdhm])$/;
//
// export function parseInterval(intervalString: string): number | undefined {
//     const match = intervalString.match(INTERVAL_REGEX);
//     if (!match) return undefined;
//
//     const value = parseInt(match[1], 10);
//     const unit = match[2];
//
//     switch (unit) {
//         case 'w':
//             return value * 7 * 24 * 60;
//         case 'd':
//             return value * 24 * 60;
//         case 'h':
//             return value * 60;
//         case 'm':
//             return value;
//         default:
//             return undefined;
//     }
// }
//
// export function minutesToInterval(minutes: number): string {
//     const WEEK_IN_MINUTES = 10080;
//     const DAY_IN_MINUTES = 1440;
//     const HOUR_IN_MINUTES = 60;
//     const isNegative = minutes < 0;
//
//     if (isNegative) minutes = Math.abs(minutes);
//
//     const weeks = Math.floor(minutes / WEEK_IN_MINUTES);
//     minutes = minutes % WEEK_IN_MINUTES;
//     const days = Math.floor(minutes / DAY_IN_MINUTES);
//     minutes = minutes % DAY_IN_MINUTES;
//     const hours = Math.floor(minutes / HOUR_IN_MINUTES);
//     minutes = minutes % HOUR_IN_MINUTES;
//
//     let result = '';
//
//     if (weeks > 0) {
//         result += weeks + 'w';
//         if (minutes !== 0 || hours !== 0 || days !== 0) {
//             result += ', ';
//         }
//     }
//     if (days > 0) {
//         result += days + 'd';
//         if (minutes !== 0 || hours !== 0) {
//             result += ', ';
//         }
//     }
//     if (hours > 0) {
//         result += hours + 'h';
//         if (minutes !== 0) {
//             result += ', ';
//         }
//     }
//     if (minutes !== 0) {
//         result += minutes + 'm';
//     }
//     if (result === '') {
//         result = '0m';
//     }
//     return !isNegative ? result : '-' + result;
// }
//
// export const useIntervalToMinutes = (initialValue: string) => {
//     const [minutes, setMinutes] = useState(() => parseInterval(initialValue));
//
//     useEffect(() => {
//         const newMinutes = parseInterval(initialValue);
//         if (newMinutes !== undefined) {
//             setMinutes(newMinutes);
//         }
//     }, [initialValue]);
//
//     return minutes;
// }

const INTERVAL_REGEX = /^(\d+)([wdhm])$/;

export function parseInterval(intervalString: string): number | undefined {
    const match = intervalString.match(INTERVAL_REGEX);
    if (!match) return undefined;

    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
        case 'w':
            return value * 7 * 24 * 60;
        case 'd':
            return value * 24 * 60;
        case 'h':
            return value * 60;
        case 'm':
            return value;
        default:
            return undefined;
    }
}

export function minutesToInterval(minutes: number): string {
    const WEEK_IN_MINUTES = 10080;
    const DAY_IN_MINUTES = 1440;
    const HOUR_IN_MINUTES = 60;
    const isNegative = minutes < 0;

    if (isNegative) minutes = Math.abs(minutes);

    const weeks = Math.floor(minutes / WEEK_IN_MINUTES);
    minutes = minutes % WEEK_IN_MINUTES;
    const days = Math.floor(minutes / DAY_IN_MINUTES);
    minutes = minutes % DAY_IN_MINUTES;
    const hours = Math.floor(minutes / HOUR_IN_MINUTES);
    minutes = minutes % HOUR_IN_MINUTES;

    let result = '';

    if (weeks > 0) {
        result += weeks + 'w';
        if (minutes !== 0 || hours !== 0 || days !== 0) {
            result += ', ';
        }
    }
    if (days > 0) {
        result += days + 'd';
        if (minutes !== 0 || hours !== 0) {
            result += ', ';
        }
    }
    if (hours > 0) {
        result += hours + 'h';
        if (minutes !== 0) {
            result += ', ';
        }
    }
    if (minutes !== 0) {
        result += minutes + 'm';
    }
    if (result === '') {
        result = '0m';
    }
    return !isNegative ? result : '-' + result;
}

export const intervalToMinutes = (initialValue: string): number => {
    const minutes = parseInterval(initialValue);

    if (minutes !== undefined) {
        return minutes;
    }

    return 0;
}