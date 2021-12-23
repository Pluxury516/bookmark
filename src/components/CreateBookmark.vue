<template>
  <div>
    <form @submit.prevent="submit">
      <div class="container">
        <div class="form-group">
          <label for="Name">Bookmark name</label>
          <input
            id="Name"
            v-model="$v.name.$model"
            class="form-control"
            placeholder="Enter name"
            type="text">
          <div class="errors">
            {{ nameErrors }}
          </div>
        </div>
        <div class="form-group pt-3">
          <label for="Url">Bookmark url</label>
          <input
            id="Url"
            v-model="$v.url.$model"
            class="form-control"
            placeholder="Enter url"
            type="text">
          <div class="errors">
            {{ urlErrors }}
          </div>
        </div>
        <button
          class="btn btn-primary mt-3"
          :disabled="$v.$invalid"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Validations } from 'vuelidate-property-decorators';
import { required, url } from 'vuelidate/lib/validators';
import { IBookmark } from '@/types/interfaces';

const bookmarksStore = namespace('Bookmarks');

@Component({
  components: {
  },
})
export default class CreateBookmark extends Vue {
  @bookmarksStore.Mutation createBookmark!:any

  @bookmarksStore.Mutation updateBookmark!:any

  @bookmarksStore.State bookmarks!:IBookmark[]

  name = ''

  url = ''

  @Validations()
    validations = {
      name: { required },
      url: { required, url },
    }

  mounted():void {
    if (this.isEdit && this.id !== null) {
      const bookmark:IBookmark = this.bookmarks[this.id];
      this.name = bookmark.name;
      this.url = bookmark.url;
    }
  }

  submit():void{
    const bookmark = {
      name: this.name,
      url: this.url,
    };
    if (this.isEdit) {
      this.updateBookmark({ bookmark, index: this.id });
    } else {
      this.createBookmark(bookmark);
    }
    this.name = '';
    this.url = '';
    this.$router.push({ name: 'Home' });
  }

  get nameErrors():string {
    let errors = '';
    if (!this.$v.name.required) errors = 'Обязательно для заполнения';
    return errors;
  }

  get urlErrors():string {
    let errors = '';
    if (!this.$v.url.url) errors = 'Введите корректный url';
    if (!this.$v.url.required) errors = 'Обязательно для заполнения';
    return errors;
  }

  get id():number | null{
    const { id } = this.$route.params;
    return id ? parseFloat(id) : null;
  }

  get isEdit():boolean {
    if (this.$route.name === 'Edit') {
      return true;
    }
    return false;
  }
}
</script>