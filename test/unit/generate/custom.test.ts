/**
 * @author WMXPY
 * @namespace Generator_Generate
 * @description Custom
 * @override Unit
 */

import { CustomPattern } from '@sudoo/pattern';
import { expect } from 'chai';
import * as Chance from 'chance';
import { generateCustomPattern } from '../../../src';
import { createDefaultGenerateOption } from '../../mock/generator';

describe('Given a [Generator-Custom] Helper Method', (): void => {

    const chance: Chance.Chance = new Chance('generate-generate-custom');

    it('should be able to generate custom pattern', (): void => {

        const pattern: CustomPattern = {
            type: 'custom',
            validate: () => false,
            generate: () => chance.integer(),
        };

        const result: string = generateCustomPattern(pattern, createDefaultGenerateOption(), []);

        expect(typeof result).to.be.equal('number');
    });
});
