import { breeds, normalize } from '../data/breeds';

export interface DogProfile { nom: string; age: string; race: string; group: string | null }
const KEY = 'oslo-dog';

export function findGroup(race: string): string | null {
  const q = normalize(race);
  if (!q) return null;
  const exact = breeds.find((b) => normalize(b.name) === q);
  if (exact) return exact.group;
  // "berger australien croisé", "labrador sable"… : first breed whose name is contained in the input, longest first
  const contained = [...breeds].sort((a, b) => b.name.length - a.name.length).find((b) => q.includes(normalize(b.name)));
  if (contained) return contained.group;
  const partial = breeds.find((b) => normalize(b.name).startsWith(q) && q.length >= 4);
  return partial?.group ?? null;
}

export function saveDog(p: DogProfile) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {}
  document.dispatchEvent(new CustomEvent('oslo:dog', { detail: p }));
}

export function loadDog(): DogProfile | null {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; }
}

export function clearDog() {
  try { localStorage.removeItem(KEY); } catch {}
  document.dispatchEvent(new CustomEvent('oslo:dog', { detail: null }));
}

export function dogUrl(p: DogProfile) {
  const qs = new URLSearchParams({ nom: p.nom, age: p.age, race: p.race }).toString();
  return p.group ? `/races/${p.group}/?${qs}` : `/races/?${qs}`;
}
