<template>
    <div class="aside-item">
        <h3>front end developer with vue</h3>
        <p class="text-info text-aside"><label>Framgia Inc</label></p>
        <p class="text-info text-aside">
            <span class="city">Ha Noi, Viet Nam</span>
            <span class="remote">Remote</span>
        </p>
        <div class="info-tag aside-tag">
            <a href="#" class=" text-info tag-item">angular js</a>
            <a href="#" class=" text-info tag-item">cordova</a>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.aside-item {
    width: 100%;
    margin-bottom: 34px;
    .text-aside {
        font-weight: normal !important;
    }
    h3 {
        font-size: 18px;
        color: #0077dd;
        font-weight: normal;
        margin: 0;
        text-transform: capitalize;
        cursor: pointer;
        padding: 2px 0;
    }
    p {
        margin-bottom: 16px;
        > label {
        font-size: 18px !important;
        margin: 0;
        }
        > span.city {
        margin-right: 1em;
        }
    }
    .aside-tag {
        text-align: left !important;
        border-bottom: 1px solid #a8a8a8;
        padding-bottom: 34px;
    }
    &:before {
        content: "";
        position: absolute;
        width: 22px;
        height: 22px;
        border: 1px solid #a8a8a8;
        border-radius: 50%;
        background: #fff;
        left: -61px;
    }
    &:last-child {
        .aside-tag {
        border-bottom: none;
        }
    }
}
</style>
