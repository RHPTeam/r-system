<template>
    <div class="content">
        <div class="main r">
            <div class="list--job c_md_12 c_lg_6  c_sm_12 c_xs_12">
                <app-list-job/>
            </div>
            <div class="create--job c_md_12 c_lg_6 c_sm_12 c_xs_12">
                <app-create-job/>
            </div>
        </div>
    </div>
</template>

<script>
import AppListJob from "./components/list-job";
import AppCreateJob from "./components/create-job";
    export default {
        components:{
            AppListJob,
            AppCreateJob
        }
    }
</script>

<style scoped lang="scss">
    @media (max-width: 1200px){
        .content{
            .main{
                .list--job{
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>