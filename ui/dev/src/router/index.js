import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior (to, _, savedPosition) {
      return new Promise(resolve => {
        setTimeout(() => {
          if (to.hash !== void 0 && to.hash !== '') {
            const el = document.getElementById(to.hash.substring(1))

            if (el !== null) {
              resolve({ x: 0, y: el.offsetTop - el.scrollHeight })
              return
            }
          }

          resolve(savedPosition || { x: 0, y: 0 })
        }, 100)
      })
    },
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // we get each page from server first!
  if (process.env.MODE === 'ssr' && process.env.CLIENT) {
    console.log('!!!!')
    console.log('On route change we deliberately load page from server -- in order to test hydration errors')
    console.log('!!!!')

    let reload = false
    Router.beforeEach((to, _, next) => {
      if (reload) {
        window.location.href = to.fullPath
        return
      }
      reload = true
      next()
    })
  }

  return Router
}
