<template>
  <header class="header">
    <div class="header__top _flex _ai-c _jc-c">
      <div class="header__logo _image">
        <img src="../assets/img/logo.png" alt="" />
      </div>
    </div>
    <div class="header__container _container">
      <div class="header__bottom">
        <div class="bottom-header__start">
          <span>Харків</span>
          <a href="tel=0509175657">+38 050 917 5657</a>
        </div>
        <div class="bottom-header__end">
          <div>
            <i class="material-icons">person</i>
            Увійти
          </div>
          <i class="material-icons">shopping_basket</i>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  &__top {
    background-color: #ece00fff;
    padding: 20px 0;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #8f8787;
    padding: 18px 0;
  }
}
</style>
