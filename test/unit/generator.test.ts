/**
 * @author WMXPY
 * @namespace Generator
 * @description Generator
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Generator } from '../../src';
import { createMockStringPattern } from '../mock/pattern';

describe('Given a {Generator} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('generator-generator');

    it('should be able to create', (): void => {

        const verifier: Generator = Generator.create(createMockStringPattern());

        expect(verifier).to.be.instanceOf(Generator);
    });
});
