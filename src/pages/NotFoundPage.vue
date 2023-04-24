<template>
  <div class="page-container">
    <div class="container">
      <h1>Not Found - 404</h1>
      <div class="img-div">
        <img src="../assets/not-found.svg" alt="" />
      </div>
      <RouterLink to="/">Back To Home Page</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  /* background-color: red; */
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  text-align: center;
}
.img-div {
  margin: 2rem 0;
}
a {
  color: white;
  padding: 10px;
  background-color: var(--less-purple-color);
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid white;
}
</style>
