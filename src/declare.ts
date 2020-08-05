/**
 * @author WMXPY
 * @namespace Generator
 * @description Declare
 */

export type GenerateOption = {
};

export type GenerateFunction<P extends any = any> = (pattern: P, option: GenerateOption, stack: StackElement[]) => any;

export type StackElement = string | number;
