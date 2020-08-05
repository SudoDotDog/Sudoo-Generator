/**
 * @author WMXPY
 * @namespace Generate
 * @description Complex
 * @override Scenario
 */

import { Pattern } from '@sudoo/pattern';
import { expect } from 'chai';
import * as Chance from 'chance';
import { Generator } from '../../src/generator';

describe('Given a (Complex) Scenario', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('scenario-complex');

    it('should be able to generate within complex scenario', (): void => {

        const pattern: Pattern = {
            type: 'map',
            map: {
                first: {
                    type: 'number',
                },
                second: {
                    type: 'list',
                    element: {
                        type: 'string',
                    },
                },
            },
        };

        const generator: Generator = Generator.create(pattern);

        const result: any = generator.generate();

        expect(typeof result.first).to.be.equal('number');
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(Array.isArray(result.second)).to.be.true;
        expect(result.second.length).to.be.greaterThan(0);
        expect(result.second.length).to.be.lte(16);

        for (const each of result.second) {
            expect(typeof each).to.be.equal('string');
        }
    });
});
