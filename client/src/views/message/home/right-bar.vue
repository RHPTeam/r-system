<template>
  <div>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar color="indigo">
            <v-icon dark>account_circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Other People</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Tìm kiếm trong cuộc trò chuyện", icon: "search" },
        { title: "Chỉnh sửa biệt danh", icon: "border_color" },
        { title: "Thay đổi màu", icon: "color_lens" },
        { title: "Thay đổi biểu tượng cảm xúc", icon: "thumb_up_alt" }
      ],
      right: null
    };
  }
};
</script>
