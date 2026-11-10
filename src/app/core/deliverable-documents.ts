import { A01, type A01Document } from './a01.data';
import { A02 } from './a02.data';
import { A03 } from './a03.data';
import { A04 } from './a04.data';
import { A05 } from './a05.data';
import { B01 } from './b01.data';
import { B02 } from './b02.data';

const DOCUMENTS: Readonly<Record<string, A01Document>> = {
  'A-01': A01,
  'A-02': A02,
  'A-03': A03,
  'A-04': A04,
  'A-05': A05,
  'B-01': B01,
  'B-02': B02,
};

export function findDocument(code: string | null | undefined): A01Document | null {
  if (!code) {
    return null;
  }

  return DOCUMENTS[code.toUpperCase()] ?? null;
}
