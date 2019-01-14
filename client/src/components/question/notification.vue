<template>
    <div class="note--notification">
        <p class="note--normal">Thanks for contributing an answer to RHP Team!</p>
        <p class="sub--notification">
            <!-- <svg></svg> -->
            + Please be sure to answer the question. Provide details and share your research!
        </p>

        <p class="note--normal">But avoid ...</p>
        <p class="sub--notification">
            <!-- <svg></svg> -->
            + Asking for help, clarification, or responding to other answers.</p>
        <p class="sub--notification">
            <!-- <svg></svg> -->
            + Making statements based on opinion; back them up with references or personal experience</p>
        <p class="note--normal">To learn more, see our tips on writing great answers.</p>
        <div class="note--above">
            <icon-base icon-name="close" width="23" height="23" viewBox="0 0 500 500"><icon-close /></icon-base>
        </div>
    </div>
</template>
<script>
import IconBase from '@/components/icons/IconBase'
import IconClose from '@/components/icons/IconClose'
export default {
    components: {
        IconBase,
        IconClose
    }
}
</script>

<style lang="scss" scoped>
.note--notification {
    position: relative;
    background: #fff7e5;
    padding: 6px 17px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    p {
        margin-bottom: 0;
    }
    p.sub--notification {
        padding-left: 35px;
    }
    .note--above {
        position: absolute;
        top: 7px;
        right: 0;
    }
}
</style>

