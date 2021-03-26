<template>
  <main class="l-main-content">
    <div class="c-container">
      <h1 class="c-container__title">
        Painel
        <span class="c-container__complement">Corona Vírus</span>
      </h1>
    </div>

    <div class="c-second-container">
      <h2 class="c-second-container__subtitle">
        Teófilo Otoni
        <span v-if="cases" class="c-second-container__update"
          >- Atualizado em : {{ cases.date_at | dateForBR }}
        </span>
        <span v-else>Carregando...</span>

        <button @click="updateAndInit" class="button-update">Atualizar</button>
      </h2>
    </div>

    <section class="l-group-cards">
      <section class="l-layout-cards c-recovered-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title">
            Casos Recuperados

            <img
              src="@/assets/img/icons/heart.svg"
              alt="Ícone de coração"
              class="c-card-content__icon"
            />
          </h3>

          <transition mode="out-in" name="data">
            <p v-if="cases" class="c-card-content__cases">
              {{ cases.recovered }}<span> casos </span>
            </p>
            <p v-else>Carregando...</p>
          </transition>
        </div>

        <div class="c-card-content">
          <h3 class="c-card-content__title">Ativos</h3>
          <transition mode="out-in" name="data">
            <p v-if="cases" class="c-card-content__cases">
              {{ cases.active }} <span> casos </span>
            </p>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>

      <section class="l-layout-cards c-suspect-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title c-aligned-text">
            Casos Descartados

            <img
              src="@/assets/img/icons/lupa.svg"
              alt="Ícone de lupa"
              class="c-card-content__icon"
            />
          </h3>
          <transition mode="out-in" name="data">
            <p v-if="cases" class="c-card-content__cases c-spacing">
              {{ cases.discarded }} <span>casos</span>
            </p>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>

      <section class="l-layout-cards c-confirmed-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title c-aligned-text">
            Casos Confirmados

            <img
              src="@/assets/img/icons/confirme.svg"
              alt="Ícone de confirmação"
              class="c-card-content__icon"
            />
          </h3>

          <transition mode="out-in" name="data">
            <p v-if="cases" class="c-card-content__cases c-spacing">
              {{ cases.confirmed }} <span>casos</span>
            </p>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>

      <section class="l-layout-cards c-death-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title">
            Óbitos Confirmados

            <img
              src="@/assets/img/icons/death.svg"
              alt="Ícone de caveira com o vírus"
              class="c-card-content__icon"
            />
          </h3>
          <transition mode="out-in" name="data">
            <p v-if="deaths" class="c-card-content__cases">
              {{ deaths.confirmed }} <span>óbitos</span>
            </p>
            <p v-else class="c-card-content__cases">Carregando...</p>
          </transition>
        </div>

        <div class="c-card-content">
          <h3 class="c-card-content__title">Óbitos em investigação</h3>
          <p class="c-card-content__cases">00 <span>óbitos</span></p>
        </div>
      </section>

      <section class="l-layout-cards c-vaccinated-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title c-aligned-text">
            Vacinômetro

            <img
              src="@/assets/img/icons/seringa.svg"
              alt="Ícone de seringa"
              class="c-card-content__icon"
            />
          </h3>
          <transition mode="out-in" name="data">
            <span v-if="vaccine">
              <h4 class="c-card-content__subtitle">1&ordf; dose</h4>
              <p class="c-card-content__cases">{{ vaccine[0].applied_dose }}</p>

              <h4 class="c-card-content__subtitle">2&ordf; dose</h4>
              <p class="c-card-content__cases">{{ vaccine[1].applied_dose }}</p>
            </span>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>

      <section class="l-layout-cards c-beds-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title">
            Leitos disponíveis

            <img
              src="@/assets/img/icons/bed.svg"
              alt="Ícone de cama hospitalar"
              class="c-card-content__icon"
            />
          </h3>
          <transition mode="out-in" name="data">
            <span v-if="beds">
              <p class="c-card-content__cases">
                {{ beds.beds }} <span>leitos</span>
              </p>

              <h3 class="c-card-content__title">Leitos ocupados</h3>
              <p class="c-card-content__cases">
                {{ beds.busy_beds }} <span>leitos</span>
              </p>
            </span>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { api } from "@/services/axiosInstance.js";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      cases: null,
      deaths: null,
      hospitalizations: null,
      beds: null,
      vaccine: null,
    };
  },
  filters: {
    dateForBR(date) {
      let dateInstance = new Date(date);

      return dateInstance.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
    },
  },
  methods: {
    updateAndInit() {
      this.loading = true;
      this.cases = null;
      this.deaths = null;
      this.hospitalizations = null;
      this.beds = null;
      this.vaccine = null;
      this.getCases();
      this.getDeaths();
      this.getHospitalizations();
      this.getBeds();
      this.getVaccine();
    },
    getCases() {
      api.get("/casos").then((response) => {
        this.cases = response.data;
      });
    },
    getDeaths() {
      api.get("/obitos").then((response) => {
        this.deaths = response.data;
      });
    },
    getHospitalizations() {
      api.get("/internacoes-uti").then((response) => {
        this.hospitalizations = response.data;
      });
    },
    getBeds() {
      api.get("/leitos-enfermaria").then((response) => {
        this.beds = response.data;
      });
    },
    getVaccine() {
      api.get("/vacina").then((response) => {
        this.vaccine = response.data;
      });
    },
  },
  created() {
    this.updateAndInit();
  },
};
</script>

<style scoped>
.button-update {
  padding: 2px 3px;
  border: 1px solid rgb(45, 43, 43);
  border-radius: 3px;
  background: rgb(245, 246, 249);
}

.button-update:hover {
  transform: scale(1.1);
  box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.24);
  transition: all 0.3s;
}

.data-enter {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.data-enter-active {
  transition: all 0.4s;
}
</style>
