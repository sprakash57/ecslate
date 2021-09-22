<template>
  <nav class="nav">
    <section class="links">
      <router-link to="/">Beautify</router-link>
      <router-link to="/compare">Compare</router-link>
      <router-link to="/execute">Execute</router-link>
    </section>
    <section class="links">
      <router-link to="/about">About</router-link>
      <router-link to="/settings">Settings</router-link>
    </section>
  </nav>
</template>

<style scoped>
.nav {
  background-color: var(--gray);
  color: white;
  padding: 2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  min-width: 500px;
}
.links a {
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  background: none;
  padding: 0.8rem;
  margin: 0.5rem;
  box-shadow: 3px 3px 4px hsl(210, 28%, 18%), -3px -2px 4px hsl(210, 9%, 36%);
  border-radius: 1rem;
  color: white;
  min-width: 60px;
}
.links a.router-link-exact-active {
  box-shadow: inset 3px 3px 4px hsl(210, 28%, 18%),
    4px 4px 4px hsl(210, 17%, 33%);
}
</style>