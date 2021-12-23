<template>
  <div class="create-bookmark-container">
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
export default class About extends Vue {
}
</script>

<style lang="scss">
.create-bookmark-container{
  width: 65%;
}
</style>