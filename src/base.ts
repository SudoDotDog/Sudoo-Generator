/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author WMXPY
 * @namespace Generator
 * @description Base
 */

import { NumberPattern, StringPattern, BigIntPattern } from "@sudoo/pattern";
import { randomIntegerBetween, randomString } from "@sudoo/random";
import { GenerateFunction, GenerateOption, StackElement } from "./declare";

declare const BigInt: any;

export const generateStringPattern: GenerateFunction<StringPattern> = (
    pattern: StringPattern,
    option: GenerateOption,
    stack: StackElement[],
): string => {

    const min: number = pattern.minimumLength ?? 0;
    const max: number = pattern.maximumLength ?? 16;

    const length: number = randomIntegerBetween(min, max);
    const result: string = randomString(length);

    return result;
};

export const generateNumberPattern: GenerateFunction<NumberPattern> = (
    pattern: NumberPattern,
    option: GenerateOption,
    stack: StackElement[],
): number => {

    const min: number = pattern.minimum ?? 0;
    const max: number = pattern.maximum ?? 2048;

    const result: number = randomIntegerBetween(min, max);

    return result;
};

export const generateBigIntPattern: GenerateFunction<BigIntPattern> = (
    pattern: BigIntPattern,
    option: GenerateOption,
    stack: StackElement[],
): bigint => {

    const min: number = pattern.minimum
        ? Number(pattern.minimum)
        : 0;
    const max: number = pattern.maximum
        ? Number(pattern.maximum)
        : 2048;

    const result: bigint = BigInt(randomIntegerBetween(min, max));

    return result;
};
