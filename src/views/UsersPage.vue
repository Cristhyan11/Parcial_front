<template>
  <div>
    <h1>Gestión de Usuarios</h1>
    <form @submit.prevent="submitUser" v-if="roles.length">
      <div>
        <label for="name">Nombre *</label>
        <input id="name" v-model="user.nombres" required />
      </div>
      <div>
        <label for="apellido">Apellido *</label>
        <input id="apellido" v-model="user.apellidos" required />
      </div>
      <div>
        <label for="email">Correo *</label>
        <input id="email" type="email" v-model="user.email" required />
      </div>
      <div>
        <label for="role">Rol *</label>
        <select id="role" v-model="user.rol" required>
          <option value="" disabled>Selecciona un rol</option>
          <option v-for="role in roles" :key="role._id" :value="role._id">{{ role.name }}</option>
        </select>
      </div>
      <button type="submit">Crear Usuario</button>
    </form>
    <p v-else>No hay roles disponibles para crear usuarios.</p>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return {
      roles: [],
      user: { nombres: '', apellidos: '', email: '', rol: '' },
      message: ''
    }
  },
  async created() {
    try {
      const res = await api.get('/roles')
      this.roles = res.data
    } catch {
      this.message = 'Error cargando roles'
    }
  },
  methods: {
    async submitUser() {
      try {
        await api.post('/users', this.user)
        this.message = 'Usuario creado correctamente'
        this.user.nombres = ''
        this.user.apellidos = ''
        this.user.email = ''
        this.user.rol = ''
      } catch (e) {
        this.message = e.message
      }
    }
  }
}
</script>

<style scoped>
body, html {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f6f8fa;
  margin: 0;
  padding: 0;
}

h1, h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

form {
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
  max-width: 400px;
  margin: 2rem auto;
}

form div {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #34495e;
  font-weight: 500;
}

input, select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 1rem;
  background: #f9fafb;
  transition: border 0.2s;
}

input:focus, select:focus {
  border-color: #3498db;
  outline: none;
}

button {
  background: #3498db;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #217dbb;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fff;
  margin-bottom: 10px;
  padding: 14px 18px;
  border-radius: 7px;
  box-shadow: 0 1px 4px rgba(44, 62, 80, 0.05);
  color: #2c3e50;
}

nav {
  background: #3498db;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 0 0 10px 10px;
}

router-link, a {
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

router-link:hover, a:hover {
  color: #e0e0e0;
}

p {
  margin-top: 1rem;
  color: #e74c3c;
  text-align: center;
}
</style>