/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author WMXPY
 * @namespace Generator
 * @description Base
 */

import { BigIntPattern, BooleanPattern, NumberPattern, StringPattern, DatePattern, FunctionPattern } from "@sudoo/pattern";
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

export const generateBooleanPattern: GenerateFunction<BooleanPattern> = (
    pattern: BooleanPattern,
    option: GenerateOption,
    stack: StackElement[],
): boolean => {

    if (pattern.ensureFalse) {
        return false;
    }
    if (pattern.ensureTrue) {
        return true;
    }

    const randomNumber: number = Math.random();

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (randomNumber > 0.5) {
        return true;
    }
    return false;
};

export const generateDatePattern: GenerateFunction<DatePattern> = (
    pattern: DatePattern,
    option: GenerateOption,
    stack: StackElement[],
): Date | string => {

    if (pattern.allowString) {
        return new Date().toISOString();
    }
    return new Date();
};

export const generateFunctionPattern: GenerateFunction<FunctionPattern> = (
    pattern: FunctionPattern,
    option: GenerateOption,
    stack: StackElement[],
): (() => any) => {

    return () => {
        return randomString();
    };
};
