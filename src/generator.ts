/**
 * @author WMXPY
 * @namespace Generator
 * @description Generator
 */

import { Pattern } from "@sudoo/pattern";
import { generatePattern } from "./generate";
import { GenerateOption } from "./declare";

export class Generator {

    public static create(pattern: Pattern): Generator {

        return new Generator(pattern);
    }

    private readonly _pattern: Pattern;

    private constructor(pattern: Pattern) {

        this._pattern = pattern;
    }

    public generate(): any {

        const result: any = generatePattern(
            this._pattern,
            this._getOption(),
            [],
        );
        return result;
    }

    private _getOption(): GenerateOption {

        return {};
    }
}
