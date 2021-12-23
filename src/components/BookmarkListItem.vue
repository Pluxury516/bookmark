<template>
  <div
    class="bookmark">
    <a
      class="bookmark__item"
      :href="bookmark.url"
      target="_blank">
      <p class="bookmark__title">{{ bookmark.name }}</p>
      <small class="bookmark__subtitle">{{ bookmark.url }}</small>
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

.bookmark{
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__item{
  display: flex;
  text-decoration: none;
  color: #222222;
  &:hover{
    color: #222222;
  }
  }
  &__subtitle{
    color: #979696;
    margin: 2px 5px;
  }
  &:hover{
    background-color: #ccc;
  }

}
</style>
