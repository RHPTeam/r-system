<template>
  <div>
    <v-list two-line>
      <div v-for="(item, index) in items" :key="index">
        <v-list-tile avatar ripple>
          <v-list-tile-avatar color="indigo">
            <v-icon dark>account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ item.content }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.time }}</v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        },
        {
          avatar: "",
          name: "Name",
          content: "Content",
          time: "12h"
        }
      ]
    };
  }
};
</script>
