/**
 * @author WMXPY
 * @namespace Generator
 * @description Generator
 */

import { ListPattern, Pattern } from "@sudoo/pattern";
import { randomIntegerBetween, randomString } from "@sudoo/random";
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
        case 'exact-list': return generateExactList;
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

    return elements.map(() => {

        const element: any = 
    });

    const result: string = randomString(length);
    return result;
};