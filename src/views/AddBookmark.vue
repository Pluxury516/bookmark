<template>
  <div><CreateBookmark /></div>
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