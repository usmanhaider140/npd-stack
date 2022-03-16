import * as bcrypt from 'bcrypt';

export function encodePassword(password: string): string {
  const SALT_ROUNDS = 10;
  const SALT = bcrypt.genSaltSync(SALT_ROUNDS);
  return bcrypt.hashSync(password, SALT);
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}
