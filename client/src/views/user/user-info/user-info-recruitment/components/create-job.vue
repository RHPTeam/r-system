<template>
  <div class="create---job ct">
    <div class="title--job r">
      <h2 v-text="formChange.title == '' ? 'Tạo Công Việc': formChange.title"></h2>
    </div>
    <div class="alert alert_success" v-if="message != ''">{{ message }}</div>
    <form class="create--job--form" @submit.prevent="formChange.title == '' ? submit() : updateJob()">
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
      <button class="btn btn_primary btn--create" type="button">Hủy</button>
    </form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
      newJob: {
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
  computed: {
    //Lọc thành viên
    filteredList() {
      return this.users.filter(user => {
        return user.nameDisplay
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    //Lấy ra thông tin phần tử in ra các giá trị bên form
    job() {
      return this.$store.getters.job[0];
    },
    //Thông tin phần tử từ form thay đổi
    formChange() {
      return this.$store.getters.formChange;
    }
  },
  methods: {
    //Hàm tạo mới công việc
    async submit() {
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
      await JobService.create(job).then(
        res => {this.message = res.data.message}
      );
      this.$store.dispatch("create", job);
    },
    // Hàm tạo lợi ích khi nhập vào ô input
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
    //Reset infomation in form now
    // resetForm() {
    //   this.$store.dispatch("clearData");
    //   this.$store.dispatch("clearForm");
    // },
    //Hàm update khi chỉnh sửa công việc
    updateJob() {
      alert("Nothing change");
    }
  }
};
</script>

<style scoped lang="scss">
@import "create-job.scss";
</style>
