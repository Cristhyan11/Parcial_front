<template>
  <div>
    <h2>Agregar Rol</h2>
    <form @submit.prevent="agregarRol">
      <input v-model="nombre" placeholder="Nombre del rol" required />
      <input v-model="descripcion" placeholder="Descripción (opcional)" />
      <button type="submit">Agregar Rol</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      nombre: '',
      descripcion: ''
    };
  },
  methods: {
    async agregarRol() {
      try {
        await api.post('/roles', {
          nombre: this.nombre,
          descripcion: this.descripcion
        });
        alert('Rol agregado exitosamente');
        this.nombre = '';
        this.descripcion = '';
      } catch (error) {
        alert('Error al agregar rol');
        console.error(error);
      }
    }
  }
};
</script>
