<template>
  <div class="content--grid">
    <button @click="fetchUsers">Click get data</button>
    <!-- router-view -->
    <div class="content--user ct_f">
      <div class="r">
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
        <div class="c_md_4 c_sm_6 c_12">
          <item-content/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/services/modules/user.service";
import ItemContent from "./itemcontent";

export default {
  components: {
    ItemContent
  },
  methods: {
    async fetchUsers() {
      const dataRes = UserService.index();
      console.log({ dataRes });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
