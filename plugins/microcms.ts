import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { NuxtHTTPInstance } from '@nuxt/http'

export default defineNuxtPlugin(({ $http, env }, inject) => {
  const $microcms = $http.create({
    headers: { 'X-API-KEY': env.MICROCMS_API_KEY },
  })
  $microcms.setBaseURL(env.MICROCMS_API_URL)
  inject('microcms', $microcms)
})

declare module '@nuxt/types' {
  interface Context {
    $microcms: NuxtHTTPInstance
  }
}
