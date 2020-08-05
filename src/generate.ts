/**
 * @author WMXPY
 * @namespace Generator
 * @description Generate
 */

import { AndPattern, ExactListPattern, ListPattern, MapPattern, OrPattern, Pattern, RecordPattern } from "@sudoo/pattern";
import { randomIntegerBelow, randomIntegerBetween } from "@sudoo/random";
import { generateAnyPattern, generateBigIntPattern, generateBooleanPattern, generateCustomPattern, generateDatePattern, generateEmptyPattern, generateExactPattern, generateFunctionPattern, generateNumberPattern, generateStringPattern } from "./base";
import { GenerateFunction, GenerateOption, StackElement } from "./declare";

export const getGenerateFunction = (pattern: Pattern): GenerateFunction => {

    switch (pattern.type) {

        case 'string': return generateStringPattern;
        case 'number': return generateNumberPattern;
        case 'bigint': return generateBigIntPattern;
        case 'boolean': return generateBooleanPattern;
        case 'date': return generateDatePattern;
        case 'function': return generateFunctionPattern;
        case 'list': return generateListPattern;
        case 'exact-list': return generateExactListPattern;
        case 'map': return generateMapPattern;
        case 'record': return generateRecordPattern;
        case 'custom': return generateCustomPattern;
        case 'or': return generateOrPattern;
        case 'and': return generateAndPattern;
        case 'exact': return generateExactPattern;
        case 'empty': return generateEmptyPattern;
        case 'any': return generateAnyPattern;
    }

    return generateAnyPattern;
};

export const generatePattern = (
    pattern: Pattern,
    option: GenerateOption,
    stack: StackElement[],
): any => {

    const generateFunction: GenerateFunction = getGenerateFunction(pattern);

    const result: any = generateFunction(pattern, option, stack);
    return result;
};

export const generateListPattern: GenerateFunction<ListPattern> = (
    pattern: ListPattern,
    option: GenerateOption,
    stack: StackElement[],
): any[] => {


    const min: number = pattern.maximumSize ?? 0;
    const max: number = pattern.minimumSize ?? 16;

    const length: number = randomIntegerBetween(min, max);
    const elements: any[] = new Array(length).fill(undefined);

    return elements.map((_, index: number) => {

        const newStack: StackElement[] = [...stack, index];

        const element: any = generatePattern(pattern.element, option, newStack);
        return element;
    });
};

export const generateExactListPattern: GenerateFunction<ExactListPattern> = (
    pattern: ExactListPattern,
    option: GenerateOption,
    stack: StackElement[],
): any[] => {

    return pattern.list.map((each: Pattern, index: number) => {

        const newStack: StackElement[] = [...stack, index];

        const element: any = generatePattern(each, option, newStack);
        return element;
    });
};

export const generateMapPattern: GenerateFunction<MapPattern> = (
    pattern: MapPattern,
    option: GenerateOption,
    stack: StackElement[],
): Record<string, any> => {

    const keys: string[] = Object.keys(pattern.map);

    return keys.reduce((previous: Record<string, any>, current: string) => {

        const currentPattern: Pattern = pattern.map[current];

        const newStack: StackElement[] = [...stack, `${current}(key)`];
        const element: any = generatePattern(currentPattern, option, newStack);

        return {
            ...previous,
            [current]: element,
        };
    }, {} as Record<string, any>);
};

export const generateRecordPattern: GenerateFunction<RecordPattern> = (
    pattern: RecordPattern,
    option: GenerateOption,
    stack: StackElement[],
): Record<string, any> => {

    const length: number = randomIntegerBetween(0, 16);
    const keys: any[] = new Array(length).fill(undefined).map((_, index: number) => {

        const newStack: StackElement[] = [...stack, `${index}(key-generation)`];

        const key: any = generatePattern(pattern.key, option, newStack);
        return key;
    });

    return keys.reduce((previous: Record<string, any>, current: string) => {

        const newStack: StackElement[] = [...stack, `${current}(key)`];
        const element: any = generatePattern(pattern.value, option, newStack);

        return {
            ...previous,
            [current]: element,
        };
    }, {} as Record<string, any>);
};

export const generateOrPattern: GenerateFunction<OrPattern> = (
    pattern: OrPattern,
    option: GenerateOption,
    stack: StackElement[],
): any[] => {

    const index: number = randomIntegerBelow(pattern.options.length);

    return generatePattern(pattern.options[index], option, stack);
};

export const generateAndPattern: GenerateFunction<AndPattern> = (
    pattern: AndPattern,
    option: GenerateOption,
    stack: StackElement[],
): any[] => {

    const index: number = randomIntegerBelow(pattern.requirements.length);

    return generatePattern(pattern.requirements[index], option, stack);
};
