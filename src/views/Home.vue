<template>
  <div class="home">
    <div class="row">
      <div class="col-xs-12 col-md-5 col-lg-4 bg-brand p-4">
          <bio></bio>
      </div>
      <div class="col p-5">
          <experience></experience>
          <skills></skills>
      </div>
    </div>
  </div>
</template>

<script>

import Bio from '@/components/Bio'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'


export default {
  name: 'Home',
  components: {
    Bio,
    Experience,
    Skills
  }
}
</script>
