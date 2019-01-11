<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData"></ckeditor>
        <button v-on:click="emptyEditor()">Empty the editor</button>

        <h2>Editor data</h2>
        <div v-html="editorData"></div>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>'
            };
        },
        methods: {
            emptyEditor() {
                this.editorData = '';
            }
        }
    }
</script>


