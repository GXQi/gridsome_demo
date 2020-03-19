// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AltLayout from '~/layouts/AltLayout.vue'
import '~/assets/reset.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = {class: 'body'}
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  }, {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
  })
}

