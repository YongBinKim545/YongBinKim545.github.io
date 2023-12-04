// Styles
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import '@/styles/main.scss'
// import { en, ko } from "vuetify/locale";

// Composables
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    // background: '#FFFFFF',
    // surface: '#FFFFFF',
    primary: '#1867C0',
    // primarydarken: '#3700B3',
    secondary: '#5CBBF6',
    // secondarydarken: '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
    // btndetail: '#00C853',
    // cardheader:'#424242'
  },
  fontFamily: 'LGSmHa, sans-serif',
  // date: {
  //   adapter: DateFnsAdapter,
  //   locale: {
  //     en: enUS,
  //     tr: trTr,
  //   },
  // },
  // locale: {
  //   locale: "ko",
  //   fallback: "en",
  //   messages: { ko, en },
  // }, 
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({

  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  },
  // display: {
  //   mobileBreakpoint:'lg',
  //   thresholds:{
  //     xs:0,
  //     sm:340,
  //     md:540,
  //     lg:800,
  //     xl:1280,
  //     xxl:1904
  //   }
  // }
})