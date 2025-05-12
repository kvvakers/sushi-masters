<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__top">
        <ol class="footer__contacts _flex _jc-sb _f-wrap-w _gap-x-16 _gap-y-32">
          <li>
            <div class="title">SUSHI MASTER</div>
            <ul>
              <li><a href="#">{{ $t("about-company") }}</a></li>
              <li><a href="#">{{ $t("reviews") }}</a></li>
              <li><a href="#">{{ $t("promotion") }}</a></li>
              <li><a href="#">{{ $t("bonus") }}</a></li>
            </ul>
          </li>
          <li>
            <div class="title">{{ $t("legal-info") }}</div>
            <ul>
              <li><a href="#">{{ $t("public-offer") }}</a></li>
              <li><a href="#">{{ $t("politics") }}</a></li>
            </ul>
          </li>
          <li>
            <div class="title">{{ $t("shipping-restaraunts") }}</div>
            <ul>
              <li><a href="#">{{ $t("shipping-self-pickup") }}</a></li>
              <li><a href="#">{{ $t("our-restaraunts") }}</a></li>
            </ul>
          </li>
          <li>
            <div class="title">{{ $t("support") }}</div>
            <ul>
              <li><a href="tel=0509175657">+38 050 917 5657</a></li>
              <li><a href="mailto:alina.tokmakova@nure.ua">sushimasters@gmail.com</a></li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="footer__bottom _flex _ai-c _jc-sb _gap-x-16">
        <div class="footer_socials _flex _ai-c _jc-sb _gap-x-8">
          <a href="https://t.me/camish_risuet" class="_image">
            <img src="../assets/img/icons8-tg.svg" alt="" />
          </a>
          <a href="https://t.me/camish_risuet" class="_image">
            <img src="../assets/img/icons8-facebook.svg" alt="" />
          </a>
          <a href="https://t.me/camish_risuet" class="_image">
            <img src="../assets/img/icons8-instagram.svg" alt="" />
          </a>
        </div>
        <div class="footer__copy">All rights reserved</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {

  &__top,
  &__bottom {
    padding: 12px 0;
  }

  &__top {
    border-top: 1px solid #8f8787;
  }
  &__bottom {
    ._image {
      width: 24px;
    }
  }

  &__contacts {
    color: #595959;

    .title {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 20px;
    }

    ul li {
      padding: 5px 0;
    }

    ul li a {
      font-size: 18px;
    }

    a:hover {
      color: #b2030d;
    }

    @media (max-width: 992px) {
      &>li {
        flex: 1 1 45%;
      }
    }

    @media (max-width: 560px) {
      &>li {
        flex: 1 1 100%;
      }
    }
  }
}
</style>
