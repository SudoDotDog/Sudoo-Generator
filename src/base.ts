/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author WMXPY
 * @namespace Generator
 * @description Base
 */

import { AnyPattern, BigIntPattern, BooleanPattern, CustomPattern, DatePattern, EmptyPattern, ExactPattern, FunctionPattern, NumberPattern, StringPattern } from "@sudoo/pattern";
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

    const integerValue: number = randomIntegerBetween(min, max);
    if (pattern.integer) {
        return integerValue;
    }

    if (pattern.float) {
        const floatValue: number = Math.random();
        return integerValue + floatValue;
    }

    return integerValue;
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
): ((...args: any[]) => any) => {

    return () => {
        return randomString();
    };
};

export const generateCustomPattern: GenerateFunction<CustomPattern> = (
    pattern: CustomPattern,
    option: GenerateOption,
    stack: StackElement[],
): any => {

    return randomString();
};

export const generateExactPattern: GenerateFunction<ExactPattern> = (
    pattern: ExactPattern,
    option: GenerateOption,
    stack: StackElement[],
): any => {

    return pattern.value;
};

export const generateEmptyPattern: GenerateFunction<EmptyPattern> = (
    pattern: EmptyPattern,
    option: GenerateOption,
    stack: StackElement[],
): any => {

    if (pattern.allowNull) {
        return null;
    }
    if (pattern.allowUndefined) {
        return undefined;
    }
    return undefined;
};

export const generateAnyPattern: GenerateFunction<AnyPattern> = (
    pattern: AnyPattern,
    option: GenerateOption,
    stack: StackElement[],
): any => {

    if (pattern.banishNull) {
        return randomString();
    }
    if (pattern.banishUndefined) {
        return randomString();
    }
    return randomString();
};
