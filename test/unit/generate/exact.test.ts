/**
 * @author WMXPY
 * @namespace Generator_Generate
 * @description Exact
 * @override Unit
 */

import { ExactPattern } from '@sudoo/pattern';
import { expect } from 'chai';
import * as Chance from 'chance';
import { generateExactPattern } from '../../../src';
import { createDefaultGenerateOption } from '../../mock/generator';

describe('Given a [Generator-Exact] Helper Method', (): void => {

    const chance: Chance.Chance = new Chance('generate-generate-exact');

    it('should be able to generate exact pattern', (): void => {

        const value: string = chance.string();
        const pattern: ExactPattern = {
            type: 'exact',
            value,
        };

        const result: string = generateExactPattern(pattern, createDefaultGenerateOption(), []);

        expect(typeof result).to.be.equal('string');
        expect(result).to.be.equal(value);
    });
});
