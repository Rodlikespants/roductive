import {expect, test} from 'vitest'
import {sum} from './sum.ts'

test('adds 1 to 2', () => {
    expect(sum(1, 2), 'This should be 3').toBe(3);
});