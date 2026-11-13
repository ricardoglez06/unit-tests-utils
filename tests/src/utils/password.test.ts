import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword } from '../../../src/utils/password.util';

describe('tests for hashed passwords', () => {
    const password1 = "firstPassword123!";
    const password2 = "secondPassword456!";

    it('generates hashes that are not empty and differ from the original password', async () => {
        const hash1 = await hashPassword(password1);
        const hash2 = await hashPassword(password2);

        // validate hash1
        expect(hash1).toBeTypeOf('string');
        expect(hash1.length).toBeGreaterThan(0);
        expect(hash1).not.toBe(password1);

        // validate hash2
        expect(hash2).toBeTypeOf('string');
        expect(hash2.length).toBeGreaterThan(0);
        expect(hash2).not.toBe(password2);
    });

    it('returns true if the password matches the hash', async () => {
        const hash1 = await hashPassword(password1);
        const hash2 = await hashPassword(password2);

        const match1 = await comparePassword(password1, hash1);
        const match2 = await comparePassword(password2, hash2);

        expect(match1).toBe(true);
        expect(match2).toBe(true);
    });

    it('returns false if the password does not match the hash', async () => {
        const hash1 = await hashPassword(password1);
        const hash2 = await hashPassword(password2);

        const mismatch1 = await comparePassword(password2, hash1);
        const mismatch2 = await comparePassword(password1, hash2);

        expect(mismatch1).toBe(false);
        expect(mismatch2).toBe(false);
    });
});