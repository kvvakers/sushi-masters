<template>
  <header class="header">
    <div class="header__top _flex _ai-c _jc-c">
      <RouterLink to="/catalogue" class="header__logo _image">
        <img src="../assets/img/logo.png" alt="" />
      </RouterLink>
    </div>
    <div class="header__container _container">
      <div class="header__bottom">
        <div class="bottom-header__start">
          <span>Харків</span>
          <a href="tel=0509175657">+38 050 917 5657</a>
        </div>
        <div class="bottom-header__end">
          <div class="_flex _jc-sb _ai-c">
            <RouterLink to="/account" class="_flex _ai-c login">
              <i class="material-icons">person</i>
              Увійти
            </RouterLink>
            <RouterLink to="/cart">
              <i class="material-icons basket">shopping_basket</i>
            </RouterLink>
          </div>
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
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #8f8787;
    padding: 18px 0;
    .bottom-header__start {
      span {
        font-size: 24px;
        margin-right: 25px;
      }
      a {
        font-size: 18px;
      }
      a:hover {
        color: #071f77;
      }
    }
    .bottom-header__end {
      font-size: 18px;
      .login {
        margin-right: 30px;
      }
      .login:hover,
      .basket:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
