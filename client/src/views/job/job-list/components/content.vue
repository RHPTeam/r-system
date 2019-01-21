<template>
  <div class="main">
    <app-info/>
    <div class="ct">
      <app-items/>
      <app-items/>
      <app-items/>
    </div>
    <app-paginate/>
  </div>
</template>
<script>
import AppInfo from "./cp-content/info";
import AppPaginate from "./cp-content/paginate";
import AppItems from "./cp-content/items";
export default {
  components: {
    AppInfo,
    AppPaginate,
    AppItems
  }
};
</script>
