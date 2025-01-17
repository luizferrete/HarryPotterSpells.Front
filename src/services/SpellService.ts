import http from '../http';
import { SpellResponse } from '../models/SpellResponse';

export async function getSpells(): Promise<SpellResponse[]> {
    return await http.get<SpellResponse[]>('/spell');
}