<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData"></ckeditor>
       

        <h2>Hiển thị</h2>
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


