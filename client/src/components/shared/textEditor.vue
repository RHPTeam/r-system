<template>
  <div class="editor--rhp">
    <div class="editor--toolbar">
      <span @click="execCmd('bold')">Đ</span>
      <div class="editor--main">
        <div class="editor--content editor--content_editable" :class="{ 'editor--focused': statusFocused }" contenteditable="true" @click="focused" v-click-outside="unfocused" data-text="Viết nội dung...">
          <p><br></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widthFrame: {
      type: Number,
      default: 500
    },
    heightFrame: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      statusFocused: false
    };
  },
  methods: {
    execCmd(command) {
      let content = document.getElementsByClassName("editor--content");
      for (let i = 0; i < content.length; i++) {
        this.execCommandOnElement(content[i], command);
      }
    },
    focused() {
      this.statusFocused = true;
    },
    unfocused() {
      this.statusFocused = false;
    },
    execCommandOnElement(el, commandName, value) {
      if (typeof value == "undefined") {
        value = null;
      }
      if (typeof window.getSelection != "undefined") {
        let self = window.getSelection();
        let userSelection = "";
        let savedRanges = [];
        for (let i = 0, len = self.rangeCount; i < len; ++i) {
          savedRanges[i] = self.getRangeAt(i).cloneRange();
        }
        document.designMode = "On";
        self = window.getSelection();
        console.log("self: " + self);
        let range = document.createRange();
        console.log("range start: " + range);
        el.addEventListener("mouseup", function() {
          userSelection = window.getSelection().toString();
        });
        console.log(el);
        range.selectNodeContents(el);
        console.log("range: " + range);
        self.removeAllRanges();
        self.addRange(range);
        document.execCommand(commandName, false, value);
        document.designMode = "Off";
        self = window.getSelection();
        self.removeAllRanges();
        for (let i = 0, len = savedRanges.length; i < len; ++i) {
          self.addRange(savedRanges[i]);
        }
      } else if (typeof document.body.createTextRange != "undefined") {
        let textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.execCommand(commandName, false, value);
      }
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding, vNode) {
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expresion '${
            binding.expression
          }' is not a function but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }
          console.log(warn);
        }
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        document.addEventListener("click", handler);
      },
      unbind(el, binding) {
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.editor--rhp {
  background: #fff;
  padding: 0;
  margin: 0;
  .editor--main {
    font-size: 1.9rem;
    line-height: 2.5rem;
  }
  .editor--content {
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 0 0 2px 2px;
    outline: 0;
    padding: 0 2.5rem;
    text-align: left;
    &:not(.editor--focused) {
      border-color: #c4c4c4;
    }
    [contenteditable="true"]:empty:not(:focus):before {
      content: attr(data-text);
    }
    &.editor--focused {
      border-color: #776ab0;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset;
    }
    p {
      margin: 2.5rem 0;
      letter-spacing: -0.003rem;
    }
  }
}
</style>
