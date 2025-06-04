<template>
  <div>
    <h1>Dashboard</h1>

    <section>
      <h2>Roles</h2>
      <ul>
        <li v-for="role in roles" :key="role._id">
          <strong>{{ role.name }}</strong> — {{ role.description || 'Sin descripción' }}
        </li>
      </ul>
    </section>

<section>
  <h2>Usuarios</h2>
  <ul>
        <li v-for="user in users" :key="user._id">
        {{ user.nombres }} {{ user.apellidos }} ({{ user.email }}) — 
        Rol: {{ user.rol?.name || 'Sin rol' }}
        <span v-if="user.rol?.description">— {{ user.rol.description }}</span>
        </li>
  </ul>
</section>

    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      roles: [],
      users: [],
      error: ''
    }
  },
  async created() {
    try {
      const rolesRes = await api.get('/roles')
      this.roles = rolesRes.data
    } catch {
      this.error = 'Error cargando roles'
    }
    try {
      const usersRes = await api.get('/users')
      this.users = usersRes.data
    } catch {
      this.error = 'Error cargando usuarios'
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