/**
 * @author WMXPY
 * @namespace Generate
 * @description Basic
 * @override Scenario
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Generator } from '../../src/generator';
import { createMockStringPattern } from '../mock/pattern';

describe('Given a (Basic) Scenario', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('scenario-basic');

    it('should be able to generate string', (): void => {

        const generator: Generator = Generator.create(createMockStringPattern());

        const result: string = generator.generate();

        expect(typeof result).to.be.equal('string');
    });
});
