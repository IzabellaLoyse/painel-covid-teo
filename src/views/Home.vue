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
        <span class="c-second-container__update"
          >- Atualizado em : 27/02/2021
        </span>
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

          <p class="c-card-content__cases">700<span> casos </span></p>
        </div>

        <div class="c-card-content">
          <h3 class="c-card-content__title">Em acompanhamento</h3>
          <p class="c-card-content__cases">400 <span> casos </span></p>
        </div>
      </section>

      <section class="l-layout-cards c-suspect-card">
        <div class="c-card-content">
          <h3 class="c-card-content__title c-aligned-text">
            Casos Suspeitos

            <img
              src="@/assets/img/icons/lupa.svg"
              alt="Ícone de lupa"
              class="c-card-content__icon"
            />
          </h3>

          <p class="c-card-content__cases c-spacing">700 <span>casos</span></p>
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

          <p class="c-card-content__cases c-spacing">700 <span>casos</span></p>
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

          <p class="c-card-content__cases">183 <span>óbitos</span></p>
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

          <h4 class="c-card-content__subtitle">1&ordf; dose</h4>
          <p class="c-card-content__cases">3.759</p>

          <h4 class="c-card-content__subtitle">2&ordf; dose</h4>
          <p class="c-card-content__cases">3.250</p>
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

          <p class="c-card-content__cases">700 <span>leitos</span></p>

          <h3 class="c-card-content__title">Leitos ocupados</h3>
          <p class="c-card-content__cases">700 <span>leitos</span></p>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>
