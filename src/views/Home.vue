<template>
  <main class="l-main-content" role="main">
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

        <button @click="updateAndInit" class="c-button-update">Atualizar</button>
      </h2>
    </div>

    <section class="l-group-cards" role="region">
      <section class="l-layout-cards c-recovered-card">
        <div class="c-card-content">
        <div class="c-card-content__container">
          <h2 class="c-card-content__title">
            Casos Recuperados
          </h2>

            <img
              src="@/assets/img/icons/heart.svg"
              alt="Ícone de coração"
              class="c-card-content__icon"
            />
          </div>

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

      <section class="l-layout-cards c-hospitalizations-card" role="region">
        <div class="c-card-content">
        <div class="c-card-content__container">
          <h2 class="c-card-content__title">
            Internações
          </h2>

            <img
              src="@/assets/img/icons/pharmacy.svg"
              alt="Ícone de símbolo hospitalar"
              class="c-card-content__icon"
            />
            </div>
         
          <transition mode="out-in" name="data">
            <p v-if="cases" class="c-card-content__cases">
              {{ cases.discarded }} <span>casos</span>
            </p>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>

      <section class="l-layout-cards c-confirmed-card" role="region">
        <div class="c-card-content">
        <div class="c-card-content__container">
          <h2 class="c-card-content__title">
            Casos Confirmados
          </h2>

            <img
              src="@/assets/img/icons/confirm.svg"
              alt="Ícone de confirmação"
              class="c-card-content__icon"
            />
            </div>

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
        <div class="c-card-content__container">
          <h2 class="c-card-content__title">
            Óbitos Confirmados
          </h2>

            <img
              src="@/assets/img/icons/death.svg"
              alt="Ícone de caveira com o vírus"
              class="c-card-content__icon"
            />
          </div>

          <transition mode="out-in" name="data">
            <p v-if="deaths" class="c-card-content__cases">
              {{ deaths.confirmed }} <span>óbitos</span>
            </p>
            <p v-else class="c-card-content__cases">Carregando...</p>
          </transition>
        </div>

        <div class="c-card-content">
          <h3 class="c-card-content__second-title">Óbitos em investigação</h3>
          <p class="c-card-content__cases">00 <span>óbitos</span></p>
        </div>
      </section>

      <section class="l-layout-cards c-vaccinated-card" role="region">
        <div class="c-card-content">
        <div class="c-card-content__container">
          <h2 class="c-card-content__title">
            Vacinômetro
          </h2>

            <img
              src="@/assets/img/icons/seringa.svg"
              alt="Ícone de seringa"
              class="c-card-content__icon"
            />
          </div>

          <transition mode="out-in" name="data">
            <span v-if="vaccine">
              <h3 class="c-card-content__subtitle">1&ordf; dose</h3>
              <p class="c-card-content__cases">{{ vaccine[0].applied_dose }}</p>

              <h4 class="c-card-content__subtitle">2&ordf; dose</h4>
              <p class="c-card-content__cases">{{ vaccine[1].applied_dose }}</p>
            </span>
            <p v-else>Carregando...</p>
          </transition>
        </div>
      </section>

      <section class="l-layout-cards c-beds-card" role="region">
        <div class="c-card-content">
        <div class="c-card-content__container">
          <h3 class="c-card-content__title">
            Leitos disponíveis
          </h3>

            <img
              src="@/assets/img/icons/bed.svg"
              alt="Ícone de cama hospitalar"
              class="c-card-content__icon"
            />
            </div>
          
          <transition mode="out-in" name="data">
            <span v-if="beds">
              <p class="c-card-content__cases">
                {{ beds.beds }} <span>leitos</span>
              </p>

              <h3 class="c-card-content__second-title">Leitos ocupados</h3>
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
.c-button-update {
  width: 8rem;
  height: 2.2rem;
  padding: 3px 3px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  color: var(--card-title-color);
  font-weight: 700;
  background-color:#19BD6F;
  cursor: pointer;
  box-shadow: 0px 4px 4px var(--shadow-color-cards);
  transition: all 200ms ;
}

.c-button-update:hover {
  background-color: #12BD5F;
}

.data-enter {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.data-enter-active {
  transition: all 0.4s;
}
</style>
