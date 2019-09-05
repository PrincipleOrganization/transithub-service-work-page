<template>
  <div class="ServicePage">

    <div class="ServicePage__wrapper">

      <div class="ServicePage__wrapper__brand">
        <div class="ServicePage__wrapper__brand__logo blink">Transithub</div>
        <p class="ServicePage__wrapper__brand__sublogo blink">Driving agribusiness every day</p>
      </div>

      <div class="ServicePage__wrapper__servis-message">
        <span>На сайті проводяться планові технічні роботи.</span>
        <p>Просимо вибачення за незручності!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  	title () {
    	return 'Transithub - Технічні роботи'
  	}
  },

  head() {
    return {
      title: this.title
    }
  }
};
</script>

<style scoped>

/* Montserrat cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url('/fonts/Montserrat-Regular.woff2') format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url('/fonts/Montserrat-Regular.woff2') format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* Montserrat latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url('/fonts/Montserrat-Regular.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Montserrat cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url('/fonts/Montserrat-Bold.woff2') format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url('/fonts/Montserrat-Bold.woff2') format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* Montserrat latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url('/fonts/Montserrat-Bold.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.ServicePage {
  position: fixed;
  z-index: 100000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(90, 89, 83, 0.7);
  font-family: "Montserrat", sans-serif !important;
}

.ServicePage__wrapper {
  width: 100%;
  height: 100%;
  padding: 25px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.ServicePage__wrapper__brand__logo {
  font-size: 2.25rem;
  color: #FFC854;
  font-weight: 400;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  cursor: pointer;
  transition: .4s;
}

.ServicePage__wrapper__brand__sublogo {
  letter-spacing: 1px;
  margin-top: 5px;
  color: white;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
}

.ServicePage__wrapper__servis-message {
  margin-top: 20px;
  color: white;
}

.ServicePage__wrapper__servis-message span {
  font-size: 25px;
  letter-spacing: 1px;
}

.ServicePage__wrapper__servis-message p {
  font-size: 15px;
  margin-top: 5px;
}

.blink {
	-webkit-animation: blink 2.5s linear infinite; 
	animation: blink 2.5s linear infinite; 
	color: #FFC854;
}

@-webkit-keyframes blink { 
	0% { color: #FFC854; }
	50% { color: #fff4dc; }
	100% { color: #FFC854; }
}

@keyframes blink {  
	0% { color: #FFC854; }
	50% { color: #fff4dc; }
	100% { color: #FFC854; } 
}

@media screen and (max-width: 1024px) {
  .ServicePage__wrapper__brand__logo {
    font-size: 3.5rem;
  }

  .ServicePage__wrapper__brand__sublogo {
    font-size: 1.2rem;
  }

  .ServicePage__wrapper__servis-message {
    margin-top: 40px;
  }

  .ServicePage__wrapper__servis-message p {
    font-size: 1.3rem;
    margin-top: 0.625rem;
  }
}

@media screen and (max-width: 414px) {
  .ServicePage__wrapper__brand__logo {
    font-size: 2.2rem;
  }

  .ServicePage__wrapper__brand__sublogo {
    font-size: 0.625rem;
  }

  .ServicePage__wrapper__servis-message span {
    font-size: 1.1875rem
  }
  
  .ServicePage__wrapper__servis-message p {
    margin-top: 0.625rem;
    font-size: 15px;
  }
}
</style>