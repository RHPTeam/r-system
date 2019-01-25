<template>
  <v-navigation-drawer dark permanent :mini-variant="mini">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="account.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{account.userName}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0" v-for="item in menu" :key="item.text">
      <v-list-tile @click="item_onClick()" v-if="typeof(item.kids) === 'undefined'">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{item.text}}</v-list-tile-title>
      </v-list-tile>
      <v-list-group no-action v-else>
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{item.text}}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="item_onClick" v-for="(text,index) in item.kids" :key="index">
          <v-list-tile-title>{{text}}</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["mini"],
  data() {
    return {
      // Account info
      account: {
        avatar:
          "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/11667412_487983791357060_8427543761178692606_n.jpg?_nc_cat=109&_nc_oc=AQmYn5lp6cvqtf64Qmry1m5f3OmsfjMfmK9MYr_z77caLmSFvUbmTf3E3pvNWGBFh6I&_nc_ht=scontent.fhan3-1.fna&oh=941661436d58b4d3f52e487b8856023d&oe=5CC3CDA5",
        userName: "Pv Duc"
      },
      menu: [
        { icon: "dashboard", text: "Dashboard" },
        { icon: "home", text: "Category", kids: ["Add", "Edit", "Delete"] }
        // Add item here
      ]
    };
  },
  methods: {
    item_onClick: function() {
      // Do something
      console.log("ok");
    }
  }
};
</script>
