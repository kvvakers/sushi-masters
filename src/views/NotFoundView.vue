<template>
  <div class="not-found _flex _f-dir-col _jc-c _ai-c _gap-y-16">
    <div class="not-found__title">404 &#128530;</div>
    <div class="not-found__text">Page Not Found</div>
    <RouterLink :to="{ name: 'catalogue' }" class="not-found__button">Catalogue</RouterLink>
  </div>
</template>

<style lang="scss">
.not-found {
  height: 100vh;
  &__title {
    font-size: 4rem;
    font-weight: 700;
  }
  &__text,
  a {
    font-size: 3rem;
    font-weight: 600;
  }
  &__title,
  &__text,
  a {
    text-align: center;
  }
  a {
    display: block;
    background-color: #fff;
    border: 1px solid var(--color-red);
    border-radius: 5px;
    color: var(--color-red);
    padding: 6px 16px;
    width: 100%;
    max-width: 300px;
  }
}
</style>
