<template>
  <div class="item r">
    <div class="item--right c">
      <h3 class="job--name">{{ job.nameCompany }} - {{ job.office }}</h3>
      <div class="job--salary">
        <h4>{{ job.salary }} VNĐ</h4>
      </div>
      <div class="job--tabs r">
            <span class="tab--name c">
              javascript
          </span>
        <span class="tab--name c">
            vuejs
        </span>
        <span class="tab--name c">
            html5
        </span>
        <span class="tab--name c">
            html5
        </span>
      </div>
    </div>
    <div class="item--left c">
      <p class="item--time">
        <i>
          <icon-base icon-name="clock-history" viewBox="0 0 500 500">
            <icon-clock-history/>
          </icon-base>
        </i>
        18 giờ trước
      </p>
      <div class="item--action">
        <router-link class="button action--view" tag="button" :to="{name:'job-details',params:{jobId:job._id}}">
          <icon-base icon-name="eye" viewBox="0 0 480 520">
            <icon-eye/>
          </icon-base>
        </router-link>
        <button class="button action--edit" @click.prevent="editJob(job._id)">
          <icon-base icon-name="pen" viewBox="0 0 9.374 9.328">
            <icon-pen/>
          </icon-base>
        </button>
        <button class="button action--delete" @click.prevent="remove(index)">
          <icon-base icon-name="pen" viewBox="0 0 486.4 486.4">
            <icon-delete/>
          </icon-base>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconClockHistory from "@/components/icons/IconClockHistory";
import IconEye from "@/components/icons/IconEye";
import IconPen from "@/components/icons/IconPen";
import IconDelete from "@/components/icons/IconDelete";

import JobService from "@/services/modules/job.service";

export default {
  components: {
    IconBase,
    IconClockHistory,
    IconEye,
    IconPen,
    IconDelete
  },
  methods: {
    async remove(index) {
      await JobService.delete(this.job._id);
      this.$store.dispatch("delete", index);
    },
    async editJob(jobId) {
      const res = await JobService.show(jobId);
      const formChange = {
        title: "Chỉnh sửa công việc",
        button: "Cập nhật"
      };
      this.$store.dispatch("formChange", formChange);
      this.$store.dispatch("show", res.data.data);
    }
  },
  props: ["job", "index"]
};
</script>

<style scoped lang="scss">
@import "list-job.scss";

@media (max-width: 450px) {
  .item--action {
    button {
      margin-bottom: 10px;
    }
  }
}
</style>
