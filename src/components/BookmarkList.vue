<template>
  <div>
    <BookmarkListItem
      v-for="(bookmark,index) in bookmarks"
      :key="index"
      :bookmark="bookmark"
      @change-bookmark="onChangeBookmark(index)"
      @remove-bookmark="removeBookmark(index)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import BookmarkListItem from './BookmarkListItem.vue';

const bookmarksStore = namespace('Bookmarks');

@Component({
  components: {
    BookmarkListItem,
  },
})
export default class BookmarkList extends Vue {
  @bookmarksStore.Mutation removeBookmark!:any

  @Prop({ type: Array, required: true }) readonly bookmarks!: string[]

  updateBookmarks(bookmarks:string[]) :void {
    this.$emit('update-bookmarks', bookmarks);
  }

  onChangeBookmark(index:number):void{
    this.$router.push({ name: 'Edit', params: { id: index.toString() } });
  }
}
</script>