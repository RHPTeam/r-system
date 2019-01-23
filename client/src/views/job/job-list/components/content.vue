<template>
  <div class="main">
    <app-info/>
    <div class="ct">
      <app-item/>
      <app-item/>
      <app-item/>
      <app-item/>
    </div>
    <app-paginate/>
  </div>
</template>
<script>
import AppInfo from "./cp-content/info";
import AppPaginate from "./cp-content/paginate";

import AppItem from "./cp-content/items";
export default {
  components: {
    AppInfo,
    AppItem,
    AppPaginate
  }
};
</script>
