<template>
  <header class="l-page-header">
    <router-link to="/">
      <img
        src="@/assets/img/logo-corona.svg"
        alt="Imagem do logotipo da página do site"
        class="c-page-header__image"
      />
    </router-link>

    <router-link to="/about" class="about">Sobre</router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
</style>