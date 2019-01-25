<template>
  <div>
    <v-text-field
      v-bind="value"
      v-on:change="$emit('input', $event.target.value)"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <h1>{{value}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
