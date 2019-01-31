<template>
   <div class="create--content">
          <div class="create--content-title ct pb_2">Đăng câu hỏi</div>
          <div class="ct pt_4 pb_4">
            <app-alert :message="message" :type="type" />
            <form @submit.prevent="createPost">
              <div class="form_group">
                <label for="question-name">Tên câu hỏi</label>
                <input
                  type="text"
                  class="form_control"
                  id="question-name"
                  v-model="post.title"
                  placeholder="Câu hỏi của bạn là gì? Chi tiết"
                />
              </div>
              <div class="create--note mb_3">
                <p class="create--note-question mb_2">
                  Is your question about programming?
                </p>
                <span class="create--note-answer"
                >It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as
                    opposed</span
                >
              </div>
              <div class="form_group">
                <label for="about">Nội dung</label>
                <textarea class="form_control" id="about" v-model="post.body"></textarea>
              </div>
              <div class="live--preview position_relative mb_3">
                  <span class="live--preview-tag position_absolute"
                  >live preview</span
                  >
                <div class="live--preview-content" v-html="post.body"></div>
              </div>
              <div class="form_group">
                <label for="tag-name">Thẻ</label>
                <input
                  type="text"
                  class="form_control"
                  id="tag-name"
                  v-model="post._tags"
                  placeholder="e.g. (jquery reactjs mongodb)"
                />
              </div>
              <div class="form--btn">
                <button class="btn" type="submit">Đăng câu hỏi</button>
              </div>
            </form>
          </div>
        </div>
</template>

<script>
  import PostService from '@/services/modules/post.service';
  import AppAlert from '@/components/shared/alert';
export default {
  data () {
    return {
      message: '',
      type: ''
    }
  },
  components: {
    AppAlert
  },
  methods: {
    async createPost () {
      const strReplace = this.post._tags.replace(/ /g,'');
      const arrTagForm = strReplace.split(",");
      const arrTagObject = arrTagForm.map(function (str) { return { name: str } });
      const postObj = {
        title: this.post.title,
        body: this.post.body,
        _tags: arrTagObject,
        _owner: "5c4ed30b23016bb2e49939c4"
      }
      const resData = await PostService.create(postObj);
      this.message = resData.data.message;
      this.type = "alert_success";
    }
  },
  computed: {
    post () {
      return this.$store.getters.post;
    }
  },
  async mounted () {
    // await PostService
  }
};
</script>

<style scoped lang="scss">
@import "../index";
</style>
