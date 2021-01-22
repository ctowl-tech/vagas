import { isValidCnpj } from '@brazilian-utils/is-valid-cnpj';
import { isValidCpf } from '@brazilian-utils/is-valid-cpf';

export function validateCnpj(value: string) {
  if (!isValidCnpj(value)) {
    throw new Error('CNPJ is invalid');
  }
  return value;
}

export function validateCpf(value: string) {
  if (!isValidCpf(value)) {
    throw new Error('CPF is invalid');
  }
  return value;
}
