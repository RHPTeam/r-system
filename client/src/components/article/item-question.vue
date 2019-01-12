<template>
    <div class="aside--item">
        <input type="radio" name="" id="item--check">
        <label for="item--check">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</label>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.aside--item {
        display: block;
        position: relative;
        margin-top: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e4e4e4;
        input {
            display: none;
        }
        label:before {
            position: absolute;
            content: '';
            width: 20px;
            height: 20px;
            border: 1px solid #e4e4e4;
            border-radius: 50%;
            background: #fff;
            top: 0;
            left: -60px;
        }
    }
</style>
