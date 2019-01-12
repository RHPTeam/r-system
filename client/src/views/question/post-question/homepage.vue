<template>
    <div class="wrapper">
        <app-nav/>
        <div class="r main--content m_0">
            <app-content/>
            <app-article/>
        </div>
    </div>
</template>
<script>
import AppNav from '@/components/navbar/navbar'
import AppArticle from '@/components/article/question'
import AppContent from './content'
export default {
    components: {
        AppNav,
        AppContent,
        AppArticle,
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
        width: calc(100% - 15%);
        height: 100%;
        margin-left: 15%;
}
</style>

