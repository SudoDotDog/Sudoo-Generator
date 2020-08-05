/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author WMXPY
 * @namespace Generator
 * @description Base
 */

import { StringPattern } from "@sudoo/pattern";
import { randomIntegerBetween, randomString } from "@sudoo/random";
import { GenerateFunction, GenerateOption, StackElement } from "./declare";

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
