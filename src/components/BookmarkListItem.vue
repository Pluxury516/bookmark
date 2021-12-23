<template>
  <div
    class="bookmark-item">
    <a
      class="bookmark-item-link"
      :href="bookmark.url"
      target="_blank">
      <p>{{ bookmark.name }}</p>
      <small>{{ bookmark.url }}</small>
    </a>
    <div>
      <b-dropdown
        no-caret
        size="md"
        toggle-class="text-decoration-none"
        variant="link">
        <template #button-content>
          <b-icon
            icon="three-dots" />
        </template>
        <b-dropdown-item @click="removeBookmark">
          Удалить
        </b-dropdown-item>
        <b-dropdown-item @click="changeBookmark">
          Изменить
        </b-dropdown-item>
        <b-dropdown-item @click="copyBookmarkUrl">
          Копировать url
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IBookmark } from '@/types/interfaces';

@Component({
  components: {
  },
})
export default class BookmarkListItem extends Vue {
  @Prop({ type: Object, required: true }) readonly bookmark!:IBookmark

  copyBookmarkUrl():void {
    navigator.clipboard.writeText((this.bookmark.url)).catch((error) => {
      throw new Error(error);
    });
  }

  removeBookmark():void{
    this.$emit('remove-bookmark');
  }

  changeBookmark():void{
    this.$emit('change-bookmark');
  }
}
</script>

<style lang="scss">
.bookmark-item-link{
  display: flex;
  text-decoration: none;
  color: #222222;
}

.bookmark-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  small{
    color: #979696;
    margin: 2px 5px;
  }
  &:hover{
    background-color: #ccc;
  }

  .bookmark-item-icon{
    cursor: pointer;
  }
}
</style>
