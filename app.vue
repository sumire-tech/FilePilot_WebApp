<template>
  <div class="app-container">
    <aside class="sidebar">
      <h2>FilePilot</h2>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/import-files">Import Files</NuxtLink></li>
        </ul>
      </nav>
    </aside>

    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
  font-family: sans-serif;
}

.sidebar {
  width: 200px;
  background-color: #eeb6b0;
  padding: 20px;
}

.sidebar h2 {
  margin-top: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
