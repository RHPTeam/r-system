<template>
  <div class="create---job ct">
    <div class="title--job r">
      <h2>Tạo công việc</h2>
    </div>
    <div class="alert alert_success" v-if="message != ''">{{ message }}</div>
    <form class="create--job--form" @submit.prevent="submit">
      <div class="form_group">
        <label>Vị trí tuyển dụng</label>
        <input type="text" class="form_control" placeholder=" eg: Thiết kế viên" v-model="job.position">
      </div>
      <div class="form_row">
        <div class="form_group c_lg_6 c_md_12">
          <label>Lương tối thiểu</label>
          <input type="text" class="form_control" placeholder=" eg: 1000$" v-model="startSalary">
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Lương tối đa</label>
          <input type="text" class="form_control" placeholder=" eg: 3000$" v-model="endSalary">
        </div>
      </div>
      <div class="form_group">
        <label>Tên công ty</label>
        <input type="text" class="form_control" placeholder=" eg: Công ty TNHH RSoft" v-model="job.nameCompany">

      </div>
      <div class="form_group">
        <label>Địa chỉ làm việc</label>
        <input type="text" class="form_control" placeholder=" eg: 111 Đống Đa" v-model="job.locationCompany">
        <small class="form_text text_muted">Nhập tên công ty chính xác, nếu nhập sai bạn có thể bị mất quyền
          tuyển
          dụng.
        </small>
      </div>
      <div class="form_row">
        <h3 class="c_md_12 title_info">Thông tin chung</h3>
        <div class="form_group c_lg_6 c_md_12">
          <label>Loại công việc</label>
          <select class="form_control" v-model="job.type">
            <option value="Toàn thời gian">Toàn thời gian</option>
            <option value="Bán thời gian">Bán thời gian</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Loại công ty</label>
          <input type="text" class="form_control" placeholder=" eg: phát triển game, giải trí" v-model="job.typeCompany">
          <small class="form_text text_muted">Cách nhau bằng dấu ","</small>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Trình độ</label>
          <select class="form_control" v-model="job.level">
            <option value="Fresher">Fresher</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Số lượng nhân viên </label>
          <select class="form_control" v-model="job.sizeCompany">
            <option value="10-30">10-30</option>
            <option value="30-50">30-50</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Thuộc vị trí</label>
          <select class="form_control" v-model="job.role">
            <option value="Front-End Developer">Front-End Developer</option>
            <option value="Back-End Developer">Back-End Developer</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Công ty thuộc</label>
          <select class="form_control" v-model="job.office">
            <option>Open-Source</option>
            <option>Phát triển phần mềm</option>
          </select>
        </div>
      </div>
      <div class="form_row">
        <h3 class="c_md_12 title_info">Kỹ năng yêu cầu</h3>
        <div class="form_group c_md_12">
          <label>Kỹ năng công ty cần</label>
          <input class="form_control" type="text" placeholder=" eg: javascript, nodejs" v-model="job.technologies"/>
          <small class="form_text text_muted">Cách nhau bằng dấu ","</small>
        </div>
      </div>
      <div class="form_row">
        <h3 class="c_md_12 title_info">Thông tin chi tiết</h3>
        <div class="form_group c_md_12">
          <label>Mô tả công việc</label>
          <ckeditor class="form_control" :editor="editor" v-model="job.content"></ckeditor>
        </div>
        <div class="form_group c_md_12">
          <label>Mô tả về công ty</label>
          <ckeditor class="form_control" :editor="editor" v-model="job.infoCompany"></ckeditor>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Lợi ích được hưởng</label>
          <div class="btn_group c_md_12">

            <input type="text" class="form_control" placeholder="nhập lợi ích">
            <button class="btn btn--add">Thêm</button>
          </div>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Danh sách lợi ích</label>
          <div class="list--benefit">
            <p class="benefit">> Được hỗ trợ lương tháng 13</p>
            <p class="benefit">> Được hỗ trợ máy tính cá nhân</p>
          </div>
        </div>
        <div class="form_group c_md_12">
          <label>Văn hóa công ty</label>
          <ckeditor class="form_control" :editor="editor" v-model="editorData"></ckeditor>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Làm việc cùng ai?</label>
          <div class="btn_group c_md_12">

            <input type="text" class="form_control" placeholder="nhập lợi ích">
            <button class="btn btn--add">Thêm</button>
          </div>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Danh sách người làm việc cùng</label>
          <div class="list--partner">
            <img class="partner" src="https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg"/>
            <img class="partner" src="https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg"/>
            <img class="partner" src="https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg"/>
          </div>
        </div>
      </div>
      <div class="form_group ">
        <label>Link website công ty</label>
        <input type="text" class="form_control" placeholder="https://wwww.example.com" v-model="job.website">
      </div>
      <button class="btn btn_primary btn--create" type="submit">Thêm tin tuyển dụng</button>
    </form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import JobService from "@/services/modules/job.service"

export default {
  data() {
    return {
      message: "",
      editor: ClassicEditor,
      editorData: "",
      startSalary: "",
      endSalary: "",
      job: {
        position: "",
        nameCompany: "",
        locationCompany: "",
        salary: "",
        type: "",
        level: "",
        role: "",
        office: "",
        sizeCompany: "",
        typeCompany: "",
        technologies: "",
        content: "",
        infoCompany: "",
        website: ""
      }
    };
  },
  methods: {
    async submit () {
      // Init new job
      const job = {
        position: this.job.position,
        nameCompany: this.job.nameCompany,
        locationCompany: this.job.locationCompany,
        salary: this.startSalary + " - " + this.endSalary,
        type: this.job.type,
        level: this.job.level,
        role: this.job.role,
        office: this.job.office,
        sizeCompany: this.job.sizeCompany,
        typeCompany: this.job.typeCompany,
        technologies: this.job.technologies,
        content: this.job.content,
        infoCompany: this.job.infoCompany,
        website: this.job.website,
        _createPerson: this.$route.params.userId
      }
      // validate (Should be: Create a new methods to validate pratices
      // send to api
      await JobService.create(job).then(res => this.message = res.data.message)
      this.$store.dispatch("create", job)
    }
  }
};
</script>

<style scoped lang="scss">
@import "create-job.scss";
</style>
