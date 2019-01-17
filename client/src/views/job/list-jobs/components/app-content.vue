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
import AppInfo from "./app-info";
import AppPaginate from "./app-paginate";
import AppItem from "./app-items";
export default {
  components: {
    AppInfo,
    AppItem,
    AppPaginate
  }
};
</script>
