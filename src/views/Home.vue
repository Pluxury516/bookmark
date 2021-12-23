<template>
  <div class="home">
    <div class="home__body">
      <h3 class="home__title">
        Панель закладок
      </h3>
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

 <style lang="scss">

.home{
  width: 65%;
  &__body{
    border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  &__title{
    border-bottom: 1px solid #ccc;
  }
  }
}
</style>
