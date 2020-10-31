<template>
  <section v-if="contents" class="top">
    <b-container>
      <h2>{{ contents.name }}</h2>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <div class="lead" v-html="contents.message" />
        </div>
      </div>

      <div class="news">
        <h2>お知らせ</h2>
        <b-row>
          <b-col
            v-for="item in contents.news"
            :key="item.id"
            sm="auto"
            xs="auto"
          >
            <b-card
              :title="item.title"
              :img-src="item.image.url"
              :img-alt="item.title"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <div v-html="item.content" />
              <b-button href="#" variant="primary">詳細</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

type Image = {
  url: string
}

interface News {
  id: string
  title: string
  image: Image
  content: string
}

interface TopContents {
  name: string
  message: string
  news: News[]
}

export default defineComponent({
  setup() {
    const { $microcms } = useContext()
    const contents = useAsync<TopContents>(() => $microcms.$get('/pages-top'))
    return {
      contents,
    }
  },
})
</script>

<style scoped>
.top {
  margin-top: 30px;
}
</style>
