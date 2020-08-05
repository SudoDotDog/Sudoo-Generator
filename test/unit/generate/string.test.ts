/**
 * @author WMXPY
 * @namespace Generator_Generate
 * @description String
 * @override Unit
 */

import { StringPattern } from '@sudoo/pattern';
import { expect } from 'chai';
import * as Chance from 'chance';
import { generateStringPattern } from '../../../src';
import { createDefaultGenerateOption } from '../../mock/generator';

describe('Given a [Generator-String] Helper Method', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('generate-generate-string');

    it('should be able to generator', (): void => {

        const pattern: StringPattern = {
            type: 'string',
        };

        const result: string = generateStringPattern(pattern, createDefaultGenerateOption(), []);

        expect(typeof result).to.be.equal('string');
        expect(result.length).to.be.greaterThan(0);
        expect(result.length).to.be.lessThan(16);
    });
});
