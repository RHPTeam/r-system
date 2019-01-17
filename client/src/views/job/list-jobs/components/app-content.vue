<template>
  <div class="main">
    <app-info/>
    <app-main/>
    <app-paginate/>
  </div>
</template>
<script>
import AppInfo from "./app-info";
import AppPaginate from "./app-paginate";
import AppMain from "./app-main";
export default {
  components: {
    AppInfo,
    AppMain,
    AppPaginate
  }
};
</script>
