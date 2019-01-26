<template>
  <div>
    <div class="chat-log">
      <div v-for="(message,index) in messages" v-bind:key="index">
        <div class="message">
          <v-avatar
            class="message-avatar"
            :class="{self: message.username == username}"
            color="indigo"
            size="32"
          >
            <v-icon dark>account_circle</v-icon>
          </v-avatar>
          <div class="message-text" :class="{self: message.username == username}">{{message.text}}</div>
        </div>
      </div>
    </div>
    <div class="typer">
      <input type="text" placeholder="Nhập tin nhắn...">
      <v-icon>send</v-icon>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "pvduc",
      messages: [
        {
          username: "pvduc",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          username: "other people",
          text:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.chat-log {
  padding: 10px;
}
.message {
  clear: both;
}
.message-avatar {
  float: left;
  margin: 10px 0 0 0;
  &.self {
    float: right;
  }
}
.message-text {
  margin: 10px;
  float: left;
  background: #f1f0f0;
  padding: 10px 15px 10px 15px;
  max-width: 45%;
  word-wrap: break-word;
  border-radius: 1.3em;
  &.self {
    float: right;
    background: #0084ff;
    color: #fff;
  }
}
.typer {
  position: absolute;
  bottom: 0;
  padding: 10px;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
  input {
    outline: none;
  }
}
</style>
