<template>
  <div id="app">
    <header>
      <h1>Shared getters demo</h1>
      <img width="100px" src="./assets/logo.png">
    </header>
    <section>
      <h2>Published comments</h2>
      <ul>
        <li v-for="comment in publishedComments" :key="comment.id">{{ comment.name }}</li>
      </ul>
      <h2 id="cmt-search">Search comments</h2>
      <input type="text" v-model="commentSearchString" aria-labelledby="cmt-search">
      <ul v-if="commentSearchString">
        <ul>
          <li v-for="comment in searchedComments" :key="comment.id">{{ comment.name }}</li>
        </ul>
      </ul>
    </section>
    <section>
      <h2>Published articles</h2>
      <ul>
        <li v-for="article in publishedArticles" :key="article.id">{{ article.title }}</li>
      </ul>
      <h2 id="article-search">Search articles</h2>
      <input type="text" v-model="articleSearchString" aria-labelledby="article-search">
      <ul v-if="articleSearchString">
        <li v-for="article in searchedArticles" :key="article.id">{{ article.title }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      commentSearchString: "",
      articleSearchString: ""
    };
  },
  computed: {
    searchedComments() {
      return this.commentSearch(this.commentSearchString);
    },
    searchedArticles() {
      return this.articleSearch(this.articleSearchString);
    },
    ...mapGetters({
      publishedComments: "comments/published",
      commentSearch: "comments/searchResults",
      publishedArticles: "articles/published",
      articleSearch: "articles/searchResults"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
