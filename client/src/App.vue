<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
   mounted(){
    let ckeditor=document.createElement("script");
    ckeditor.setAttribute("src","//cdn.ckeditor.com/4.11.1/standard-all/ckeditor.js");
    document.head.appendChild(ckeditor);
    },
};
</script>

<style>
</style>
