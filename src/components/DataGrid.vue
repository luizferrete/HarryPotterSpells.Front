<script setup lang="ts">
import { ref, computed, onMounted, defineProps } from 'vue';
import { SpellResponse } from '../models/SpellResponse';
import { getSpells } from '../services/SpellService';

const filter = ref<string>('');
const spells = ref<SpellResponse[]>([]);

onMounted(() => {
  loadSpells();
});

async function loadSpells(): void {
  try {
    const response: SpellResponse[] = await getSpells();
    spells.value = response;
  } catch (error) {
    console.error('Failed to load spells:', error);
  }
}

const filteredSpells: SpellResponse[] = computed(() => {
  return spells.value.filter(spell =>
    spell.name.toLowerCase().includes(filter.value.toLowerCase()) ||
    spell.description.toLowerCase().includes(filter.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <input
      type="text"
      v-model="filter"
      placeholder="Filter spells..."
    />

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spell in filteredSpells" :key="spell.id">
          <td>{{ spell.name }}</td>
          <td>{{ spell.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
