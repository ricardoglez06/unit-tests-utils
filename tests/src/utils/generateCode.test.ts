import { describe, it, expect } from 'vitest';
import { generateSixDigitCode } from '../../../src/utils/generateCode.util';


describe('tests for 6 digit code generation', () => {
    it('should generate a 6-digit numeric code', () => {
        const code = generateSixDigitCode();

        expect(code).toBeTypeOf('string');
        expect(code).toHaveLength(6);
        expect(/^\d{6}$/.test(code)).toBe(true);
    });

    it('should generate valid and correct codes in successive runs', () => {
        const code1 = generateSixDigitCode();
        const code2 = generateSixDigitCode();

        expect(code1).toBeDefined();
        expect(code2).toBeDefined();
        expect(code1.length).toBe(6);
        expect(code2.length).toBe(6);
    });
});