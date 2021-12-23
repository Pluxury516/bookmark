<template>
  <div>
    <div class="home">
      <h3>Панель закладок</h3>
      <BookmarkList
        :bookmarks="bookmarks"
        @update-bookmarks="updateBookmarks" />
    </div>
    <button
      class="btn btn-primary mt-3"
      @click="addBookmark">
      Добавить закладку
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { IBookmark } from '@/types/interfaces';
import BookmarkList from '../components/BookmarkList.vue';

const bookmarksStore = namespace('Bookmarks');

@Component({
  components: {
    BookmarkList,
  },
})
export default class Home extends Vue {
   @bookmarksStore.State bookmarks!:IBookmark[]

   @bookmarksStore.Mutation updateBookmarks!:any

   addBookmark():void{
     this.$router.push({ name: 'Add' });
   }
}
</script>
