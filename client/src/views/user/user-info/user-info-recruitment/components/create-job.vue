<template>
  <div class="create---job ct">
    <div class="title--job r">
      <h2 v-text="formChange.title == '' ? 'Tạo Công Việc': formChange.title"></h2>
    </div>
    <app-alert :message="message" :type="type"/>
    <div v-if="!job"></div>
    <form class="create--job--form" v-else @submit.prevent="formChange.title == '' ? submit() : updateJob()">
      <div class="form_group">
        <label>Vị trí tuyển dụng</label>
        <input type="text"
               class="form_control"
               placeholder=" eg: Thiết kế viên"
               v-model="job.position"
               @click.prevent="showJobLaster"
        />
      </div>
      <div class="result--job" v-if="statusShowJob">
        <ul>
          <li :class="{selected:statusJob}" v-for="(list,index) in filteredJob" :key="index">
            {{list.position}}
          </li>
        </ul>
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
            <input type="text" class="form_control" placeholder="nhập lợi ích" v-model="benefit">
            <button class="btn btn--add" @click.prevent="addBenefit">Thêm</button>
          </div>
          <span>double click để xóa lợi ích</span>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Danh sách lợi ích</label>
          <div class="list--benefit">
            <p class="benefit" v-for="(benefit,index) in benefits" :key="index" @dblclick.prevent="deleteBenefit(index)"> 🤣 {{benefit}}</p>
          </div>
        </div>
        <div class="form_group c_md_12">
          <label>Văn hóa công ty</label>
          <ckeditor class="form_control" :editor="editor" v-model="editorData"></ckeditor>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Làm việc cùng ai?</label>
          <div class="btn_group c_md_12">
            <input type="text" class="form_control" placeholder="nhập lợi ích" @click.prevent="showPartner" v-model="search">
            <button class="btn btn--add">Thêm</button>
          </div>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Danh sách người làm việc cùng</label>
          <div class="list--partner">
            <div v-for="partner in partners" :key="partner" @dblclick.prevent="removeUserFromPartner(partner)">{{partner.nameDisplay}}</div>
            <!--<img class="partner" src="https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg"/>-->
            <!--<img class="partner" src="https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg"/>-->
            <!--<img class="partner" src="https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg"/>-->
          </div>
        </div>
      </div>
      <div class="result--user" v-if="statusShowPartner">
        <ul>
          <li :class="{selected:statusPartner}" v-for="(user,index) in filteredList" :key="index" @click="addUserToPartner(user,index)">
            {{user.nameDisplay}}
          </li>
        </ul>
      </div>
      <div class="form_group ">
        <label>Link website công ty</label>
        <input type="text" class="form_control" placeholder="https://wwww.example.com" v-model="job.website">
      </div>
      <button
        class="btn btn_primary btn--create"
        type="submit"
        v-text="formChange.button == '' ? 'Thêm công việc': formChange.button"
      >Thêm tin tuyển dụng</button>
      <button class="btn btn_primary btn--create" type="button" @click="resetForm">Hủy</button>
    </form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AppAlert from "@/components/shared/alert";

import JobService from "@/services/modules/job.service";
import UserService from "@/services/modules/user.service";

export default {
  data() {
    return {
      message: "",
      editor: ClassicEditor,
      editorData: "",
      startSalary: "",
      endSalary: "",
      benefits: [],
      benefit: "",
      statusShowPartner: false,
      users: [],
      search: "",
      partners: [],
      statusPartner: false,
      type: "",
      statusShowJob: false,
      statusJob: false,
      listJob: []
    };
  },
  components: {
    AppAlert
  },
  computed: {
    //Lọc thành viên
    filteredList() {
      return this.users.filter(user => {
        return user.nameDisplay
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    filteredJob() {
      return this.listJob.filter(jobByUsers => {
        return jobByUsers.position
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    job() {
      return this.$store.getters.job;
    },
    formChange() {
      return this.$store.getters.formChange;
    },
    validateForm() {
      if (
        this.job.position == "" ||
        this.job.position.length < 5 ||
        this.job.position.length > 50
      ) {
        this.type = "alert_danger";
        return (this.message =
          "Vị trí công việc không được bỏ trống và nằm trong khoảng 5 - 50 ký tự!");
      }
      if (
        this.job.nameCompany == "" ||
        this.job.nameCompany.length < 5 ||
        this.job.nameCompany.length > 100
      ) {
        this.type = "alert_danger";
        return (this.message =
          "Tên công ty không được bỏ trống và nằm trong khoảng 5 - 100 ký tự!");
      }
      if (
        this.job.locationCompany == "" ||
        this.job.locationCompany.length < 10
      ) {
        this.type = "alert_danger";
        return (this.message =
          "Địa chỉ công ty không được bỏ trống và ít nhất 10 ký tự!");
      }
      if (this.job.content == "" || this.job.content.length < 100) {
        this.type = "alert_danger";
        return (this.message =
          "Mô tả công việc không được bỏ trống và ít nhất 100 ký tự!");
      }
      if (this.job.infoCompany == "" || this.job.infoCompany.length < 100) {
        this.type = "alert_danger";
        return (this.message =
          "Thông tin về công ty không được bỏ trống và ít nhất 100 ký tự!");
      }
      if (this.job.website == "" || this.job.website.length < 10) {
        this.type = "alert_danger";
        return (this.message =
          "Website công ty không được bỏ trống và ít nhất 10 ký tự!");
      }
      if (this.job.office == "" || this.job.office.length < 10) {
        this.type = "alert_danger";
        return (this.message =
          "Trường này không được bỏ trống và ít nhất 10 ký tự!");
      }
      if (this.job.salary == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
      if (this.job.level == "") {
        this.type = "alert_danger";
        return (this.message = "Vui lòng chọn cấp độ của bạn");
      }
      if (this.job.role == "") {
        this.type = "alert_danger";
        return (this.message = "Bạn vui lòng lựa chọn công việc");
      }
      if (this.job.type == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
      if (this.job.sizeCompany == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
      if (this.job.typeCompany == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
      if (this.job.technologies == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
      if (this.job._createPerson == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
    }
  },
  methods: {
    //Hàm tạo mới công việc
    async submit() {
      this.validateForm;
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
      };
      // validate (Should be: Create a new methods to validate pratices
      // send to api
      await JobService.create(job).then(res => {
        this.type = "alert_success";
        this.message = res.data.message;
        this.$store.dispatch("createJob", res.data.data);
        setTimeout(() => {
          this.message = "";
        }, 3000);
      });

      this.resetForm();
    },
    // Tạo lợi ích khi nhập vào ô input
    addBenefit() {
      this.benefits.push(this.benefit);
      this.benefit = "";
    },
    //Xóa lợi ích khi click đúp vào phần tử
    deleteBenefit(index) {
      this.benefits.splice(index, 1);
    },
    //Lấy ra thông tin các thành viên được làm việc chung
    async showPartner() {
      await UserService.index().then(res => {
        this.users = res.data.data;
      });
      this.statusShowPartner = !this.statusShowPartner;
    },
    //Thêm thành viên làm việc chung vào trong lựa chọn
    addUserToPartner(user) {
      this.partners.push(user);
      this.statusPartner = true;
    },
    //Xóa thành viên được lưa chọn trong list
    removeUserFromPartner(partner) {
      this.partners.pop(partner);
    },
    //Reset infomation form
    resetForm() {
      this.$store.dispatch("clearData");
      this.$store.dispatch("clearForm");
    },
    //Hàm update khi chỉnh sửa công việc
    async updateJob() {
      //get User Id
      const userId = this.$route.params.userId;
      const dataUpdate = await JobService.update(this.job, userId);
      this.type = "alert_success";
      this.message = dataUpdate.data.message;
      setTimeout(() => {
        this.message = "";
      }, 3000);
      this.$store.dispatch("updateJob", this.job);
      await JobService.getJobsByUser(this.$route.params.userId).then(res => {
        this.$store.dispatch("getJobUser", res.data.data);
      });
      this.resetForm();
    },
    // Lấy thông tin nghề nghiệp đã được tạo trước đó và trả về kết quả, nếu ko có sẽ hiển thị thông báo chưa bao giờ tạo.
    showJobLaster() {
      // await JobService.getJobsByUser().then(res => {
      //   this.listJob = res.data.data;
      //   console.log(res.data.data);
      // });
      this.listJob = this.$store.getters.jobByUser;
      this.statusShowJob = !this.statusShowJob;
    }
    //Thêm job vào trong lựa chọn
    // addJobToListJob(jobByUser) {
    //   this.listJob.push(jobByUser);
    //   this.statusJob = true;
    // },
  }
};
</script>

<style scoped lang="scss">
@import "create-job.scss";
</style>
