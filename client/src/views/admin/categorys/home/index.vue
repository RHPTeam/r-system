<template>
  <div>
    <app-search @input="search=$event"/>
    <app-table :search="search"/>
    <h1>{{search}}</h1>
  </div>
</template>
<script>
import AppTable from "./table/index";
import AppSearch from "./search-box/index";
export default {
  components: {
    AppTable,
    AppSearch
  },
  data() {
    return {
      search: "5"
    };
  }
};
</script>
