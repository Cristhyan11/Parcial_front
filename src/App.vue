<template>
  <nav>
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/roles">Roles</router-link> |
    <router-link to="/users">Usuarios</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  margin-bottom: 2rem;
}
router-link {
  margin-right: 1rem;
}
</style>