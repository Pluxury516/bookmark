<template>
  <div class="add-bookmark">
    <CreateBookmark />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import CreateBookmark from '../components/CreateBookmark.vue';

@Component({
  components: {
    CreateBookmark,

  },
})
export default class AddBookmark extends Vue {
}
</script>

<style lang="scss">
.add-bookmark{
  width: 65%;
}
</style>