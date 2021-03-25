<template>
  <div id="app">
    <section class="l-grid-system">
      <TheHeader />

      <transition>
        <router-view />
      </transition>

      <TheFooter />
    </section>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
@import "./assets/css/settings.css";
@import "./assets/css/casesStyle.css";

.v-enter {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active {
  transition: all 0.4s;
}
</style>
