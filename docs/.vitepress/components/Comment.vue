
<script lang="ts">
  export default {
    mounted() {
      const utterances = document.createElement('script');
      utterances.type = 'text/javascript';
      utterances.async = true;
      utterances.crossOrigin = 'anonymous';
      utterances.src = 'https://utteranc.es/client.js';
      
      utterances.setAttribute('issue-term', 'pathname'); // pathname | url | title | og:title 중 택 1
      utterances.setAttribute('theme','github-light');
      utterances.setAttribute('repo', 'zerosheepmoo/ns-study' );
  
      this.$refs.comment.appendChild(utterances);
    }
  }
  </script>


<template>
  <div ref="comment"></div>
</template>
  