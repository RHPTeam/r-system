<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <div class="nav--top d_flex">
           <app-info/>
            <div class="btn-ask-question">
              <button>Ask Question</button>
            </div>
        </div>
        <app-tabs/>
        <hr class='mt_2'>
        <app-content/>
        <app-pagination/>
        <app-footer/>
      </div>
       <app-user-job/>
    </div>
    
  </div>
</template>

<script>
import AppInfo from "./question-list/info";
import AppContent from "./question-list/content";
import AppUserJob from "@/components/user/user-jobs";
import AppTabs from "./question-list/tabs";
import AppPagination from "./question-list/pagination";
import AppFooter from "./question-list/footer";
export default {
  components: {
    AppInfo,
    AppContent,
    AppUserJob,
    AppTabs,
    AppPagination,
    AppFooter
  }
};
</script>

<style lang="scss"  scope>
hr{
  background: #e4e4e4;
  height: 1px;
  border: none;
}
.page--wrapper {
  background-color: #fff;
  display: block;
  margin-left: 250px;
  padding-top: 64px;
  position: relative;
  transition: 0.2s ease-in;
}
.page--content {
  background-color: #fafafa;
  .main {
    background-color: #fff;
    width: 100%;
  }
}
.btn-ask-question{
  display: flex;
  align-items: center;
  button{
    outline: none;
    white-space: nowrap;
    background: #776ab0;
    padding: .5rem 1rem;
    border-radius: 100px;
    margin-right: 2rem;
    font-weight: 600;
    font-size: 1rem;
    color: #FFF;
  }
}

/*RESPONSIVE MENU LEFT-BAR*/
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)

@media (max-width: 768px) {
  .page--wrapper {
    margin-left: 0;
    .page--content {
      flex-direction: column;
    }
  }
}
@media (min-width: 768px) {
  .page--wrapper {
    margin-left: 70px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .page--wrapper {
    margin-left: 250px;
  }
}
</style>
