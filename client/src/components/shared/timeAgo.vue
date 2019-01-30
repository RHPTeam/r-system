<template>
  <span>{{times}}</span>
</template>

<script>
export default {
  props: ["time", "auto", "convert"],
  data() {
    return {
      month: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
      ]
    };
  },
  methods: {
    getFormattedDate(date, isFormat = false, isHideYear = false) {
      const day = date.getDate();
      const month = this.month[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      let minutes = date.getMinutes();

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (isFormat) {
        return `${isFormat} lúc ${hours}:${minutes}`;
      }
      if (isHideYear) {
        return `${day} ${month} lúc ${hours}:${minutes}`;
      }
      return `${day} - ${month} - ${year} lúc ${hours}:${minutes}`;
    }
  },
  computed: {
    times() {
      const dateParam = this.time;
      if (!dateParam) {
        console.log("Ngày này không tồn tại! Eng: This date not exist!");
        return null;
      }
      const date =
        typeof dateParam === "object" ? dateParam : new Date(dateParam);
      const milisecondDate = 86400000;
      const today = new Date();
      const yesterday = new Date(today - milisecondDate);
      const seconds = Math.round((today - date) / 1000);
      const minutes = Math.round(seconds / 60);
      const hours = Math.round(minutes / 60);
      const isYesterday = yesterday.toDateString() === date.toDateString();
      const isThisYear = today.getFullYear() === date.getFullYear();

      if (seconds < 5) {
        return "vừa xong";
      } else if (seconds < 60) {
        return `${seconds} giây trước`;
      } else if (seconds < 90) {
        return "khoảng 1 phút trước";
      } else if (minutes < 60) {
        return `${minutes} phút trước`;
      } else if (hours < 24) {
        return `${hours} giờ trước`;
      } else if (isYesterday) {
        return this.getFormattedDate(date, "Hôm qua");
      } else if (isThisYear) {
        return this.getFormattedDate(date, false, true);
      }
      return this.getFormattedDate(date);
    }
  }
};
</script>

<style scoped>
</style>
