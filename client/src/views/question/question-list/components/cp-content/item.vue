<template>  
<div class="card--question r">
    <div class="card--left r_auto">
        <router-link tag="div" class="card--title" :to="{ name: 'question-details', params: { questionId: post._id } }">
        {{ post.title }}
        </router-link>
        <div class="card--tabs">
            <a href="" class="card--btn" v-for="tag in post._tags">{{ tag.name }}</a>
        </div>
        <div class="created">
        <span class="circle-icon">
         <icon-base icon-name="pen" width="10" height="10" viewBox="0 0 9.374 9.328"><icon-pen /></icon-base>
        </span>
           
            tạo <app-time :time="post.createAt" /> <router-link tag="a" :to="{ name: 'user-info-profile', params: { userId: post._owner._id } }"> {{ post._owner.nameDisplay }}</router-link>
        </div>
    </div>
    <div class="card-right ml_auto d_flex ">
    <div class="like  d_flex flex_column align_items_center">
        <span class="num">0</span>
        <span>votes</span>
        <span><icon-base icon-name="thumbs" viewBox="0 0 18.657 11.994"><icon-thumbs-up /></icon-base></span>
    </div>
    <div class="comt d_flex flex_column align_items_center">
        <span class="num">0</span>
        <span>answers</span>
        <span><icon-base icon-name="answer" viewBox="0 0 18.657 11.994"><icon-answer /></icon-base></span>
    </div>
    <div class="views d_flex flex_column align_items_center">
        <span class="num">{{ post.views }}</span>
        <span>views</span>
        <span><icon-base icon-name="eye" viewBox="0 0 480 520"><icon-eye /></icon-base></span>
    </div>
    </div>
</div>
</template>

<script>
import IconPen from "@/components/icons/IconPen";
import IconThumbsUp from "@/components/icons/IconThumbsUp";
import IconEye from "@/components/icons/IconEye";
import IconAnswer from "@/components/icons/IconAnswer";
import IconBase from "@/components/icons/IconBase";
import AppTime from "@/components/shared/timeAgo";
export default {
  components: {
    IconPen,
    IconBase,
    IconEye,
    IconThumbsUp,
    IconAnswer,
    AppTime
  },
  props: ["post"]
};
</script>

<style lang="scss" scope>
@import "item";
</style>
