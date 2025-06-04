<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario._id">
        {{ usuario.nombres }} {{ usuario.apellidos }} - Rol: {{ usuario.rol?.nombre }}
      </li>
    </ul>

    <h2>Lista de Roles</h2>
    <ul>
      <li v-for="rol in roles" :key="rol._id">
        {{ rol.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      usuarios: [],
      roles: []
    };
  },
  async created() {
    const [usuariosRes, rolesRes] = await Promise.all([
      api.get('/users'),
      api.get('/roles')
    ]);
    this.usuarios = usuariosRes.data;
    this.roles = rolesRes.data;
  }
};
</script>
