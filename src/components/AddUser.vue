<template>
  <div>
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="agregarUsuario" v-if="roles.length > 0">
      <input v-model="nombres" placeholder="Nombres" required />
      <input v-model="apellidos" placeholder="Apellidos" required />
      <input v-model="identificacion" placeholder="Identificación" required />
      <input v-model="correo" placeholder="Correo" required type="email" />
      
      <select v-model="rolSeleccionado" required>
        <option disabled value="">Seleccione un rol</option>
        <option v-for="rol in roles" :key="rol._id" :value="rol._id">{{ rol.nombre }}</option>
      </select>

      <button type="submit">Agregar Usuario</button>
    </form>
    <div v-else>
      <p>Debe crear al menos un rol antes de agregar usuarios.</p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      nombres: '',
      apellidos: '',
      identificacion: '',
      correo: '',
      rolSeleccionado: '',
      roles: []
    };
  },
  async created() {
    const res = await api.get('/roles');
    this.roles = res.data;
  },
  methods: {
    async agregarUsuario() {
      try {
        await api.post('/users', {
          nombres: this.nombres,
          apellidos: this.apellidos,
          identificacion: this.identificacion,
          correo: this.correo,
          rol: this.rolSeleccionado
        });
        alert('Usuario agregado');
        this.nombres = '';
        this.apellidos = '';
        this.identificacion = '';
        this.correo = '';
        this.rolSeleccionado = '';
      } catch (error) {
        alert('Error al agregar usuario');
        console.error(error);
      }
    }
  }
};
</script>
