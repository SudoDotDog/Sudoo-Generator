/**
 * @author WMXPY
 * @namespace Generator
 * @description Generator
 */

export class Generator {

    public static create(pattern: Pattern): Generator {

        return new Generator(pattern);
    }
}