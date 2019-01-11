<template>
  <div id="app" class="min-h-screen">
    <main class="main max-w-lg mx-auto my-0 p-0">
      <Editor
        class="my-editor"
        language="html"
        v-model="code"
        :line-numbers="lineNumbers"
        :readonly="readonly"
        ></Editor>
    </main>
  </div>
</template>

<script>

import Editor from "@/components/libraries/Editor.vue";

export default {
  name: "app",
  components: {
    Editor
  },
  data: () => ({
    lineNumbers: true,
    readonly: false,
    /* eslint-disable */
    code: `<template>
            <div id="app">
                <p>{{ message }}</p>
                <input v-model="message">
            </div>
            </template>
            <script>
            export default {
            data:() => ({
                message: 'Hello Vue!'
            })
            }
            <\/script>
            <style>
            #app {
            color: #2ecc71
            }
            </style>` /* eslint-enable */
  }),
  
};
</script>

<style>
.my-editor {
  max-height: 378px;
}
</style>
