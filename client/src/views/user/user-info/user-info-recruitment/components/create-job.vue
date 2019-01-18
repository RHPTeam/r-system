<template>
  <div class="create---job ct">
    <div class="title--job r">
      <h2>Tạo công việc</h2>
    </div>
    <div class="create--job--form">
      <div class="form_group">
        <label>Vị trí tuyển dụng</label>
        <input type="text" class="form_control" placeholder=" eg: Thiết kế viên">
      </div>
      <div class="form_row">
        <div class="form_group c_lg_6 c_md_12">
          <label>Lương tối thiểu</label>
          <input type="text" class="form_control" placeholder=" eg: 1000$">
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Lương tối đa</label>
          <input type="text" class="form_control" placeholder=" eg: 3000$">
        </div>
      </div>
      <div class="form_group">
        <label>Tên công ty</label>
        <input type="text" class="form_control" placeholder=" eg: Công ty TNHH RSoft">

      </div>
      <div class="form_group">
        <label>Địa chỉ làm việc</label>
        <input type="text" class="form_control" placeholder=" eg: 111 Đống Đa">
        <small class="form_text text_muted">Nhập tên công ty chính xác, nếu nhập sai bạn có thể bị mất quyền
          tuyển
          dụng.
        </small>
      </div>
      <div class="form_row">
        <h3 class="c_md_12 title_info">Thông tin chung</h3>
        <div class="form_group c_lg_6 c_md_12">
          <label>Loại công việc</label>
          <select class="form_control">
            <option>Toàn thời gian</option>
            <option>Bán thời gian</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Loại công ty</label>
          <input type="text" class="form_control" placeholder=" eg: phát triển game, giải trí">
          <small class="form_text text_muted">Cách nhau bằng dấu ","</small>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Trình độ</label>
          <select class="form_control">
            <option>Fresher</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Số lượng nhân viên </label>
          <select class="form_control">
            <option>10-30</option>
            <option>30-50</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Thuộc vị trí</label>
          <select class="form_control">
            <option>Front-End Developer</option>
            <option>Back-End Developer</option>
          </select>
        </div>
        <div class="form_group c_lg_6 c_md_12">
          <label>Công ty thuộc</label>
          <select class="form_control">
            <option>Open-Source</option>
            <option>Phát triển phần mềm</option>
          </select>
        </div>
      </div>
      <div class="form_row">
        <h3 class="c_md_12 title_info">Kỹ năng yêu cầu</h3>
        <div class="form_group c_md_12">
          <label>Kỹ năng công ty cần</label>
          <input class="form_control" type="text" placeholder=" eg: javascript, nodejs"/>
          <small class="form_text text_muted">Cách nhau bằng dấu ","</small>
        </div>
      </div>
      <div class="form_row">
        <h3 class="c_md_12 title_info">Thông tin chi tiết</h3>
        <div class="form_group c_md_12">
          <label>Mô tả công việc</label>
          <ckeditor class="form_control" :editor="editor" v-model="editorData"></ckeditor>
        </div>
        <div class="form_group c_md_12">
          <label>Mô tả về công ty</label>
          <ckeditor class="form_control" :editor="editor" v-model="editorData"></ckeditor>
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
      <button class="btn btn_primary btn--create">Thêm tin tuyển dụng</button>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: ""
    };
  }
};
</script>

<style scoped lang="scss">
@import "create-job.scss";
</style>
