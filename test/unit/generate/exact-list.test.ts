/**
 * @author WMXPY
 * @namespace Generator_Generate
 * @description Exact List
 * @override Unit
 */

import { TuplePattern } from '@sudoo/pattern';
import { expect } from 'chai';
import * as Chance from 'chance';
import { generateTuplePattern } from '../../../src';
import { createDefaultGenerateOption } from '../../mock/generator';

describe('Given a [Generator-Exact-List] Helper Method', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('generate-generate-exact-list');

    it('should be able to generate exact list pattern', (): void => {

        const pattern: TuplePattern = {
            type: 'tuple',
            list: [{
                type: 'string',
            }, {
                type: 'number',
            }],
        };

        const result: string = generateTuplePattern(pattern, createDefaultGenerateOption(), []);

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(Array.isArray(result)).to.be.true;
        expect(typeof result[0]).to.be.equal('string');
        expect(typeof result[1]).to.be.equal('number');
    });
});
