<template>
    <div>
        <h1 class="text_center">Show All Icon Rank</h1>
        <div class="ct">    
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="j1" width="50" height="50" viewBox="0 0 510 510"><icon-j1/></icon-base>
                    <code>&lt;icon-base icon-name="j1" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-j1/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: J1</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="j2" width="50" height="50" viewBox="0 0 510 510"><icon-j2/></icon-base>
                    <code>&lt;icon-base icon-name="j2" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-j2/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: J2</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="j3" width="50" height="50" viewBox="0 0 510 510"><icon-j3/></icon-base>
                    <code>&lt;icon-base icon-name="j3" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-j3/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: J3</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">                    
                    <icon-base icon-name="s1" width="50" height="50" viewBox="0 0 510 510"><icon-s1/></icon-base>
                    <code>&lt;icon-base icon-name="s1" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-s1/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: S1</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="s2" width="50" height="50" viewBox="0 0 510 510"><icon-s2/></icon-base>
                    <code>&lt;icon-base icon-name="s2" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-s2/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: S2</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="s3" width="50" height="50" viewBox="0 0 510 510"><icon-s3/></icon-base>
                    <code>&lt;icon-base icon-name="s3" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-s3/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: S3</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="m1" width="50" height="50" viewBox="0 0 510 510"><icon-m1/></icon-base>
                    <code>&lt;icon-base icon-name="m1" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-m1/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: M1</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="m2" width="50" height="50" viewBox="0 0 510 510"><icon-m2/></icon-base>
                    <code>&lt;icon-base icon-name="m2" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-m2/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: M2</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="m3" width="50" height="50" viewBox="0 0 510 510"><icon-m3/></icon-base>
                    <code>&lt;icon-base icon-name="m3" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-m3/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: M3</h3>
            </div>
            <div class="item--icon">
                <div class="d_flex justify_content_start align_items_center">
                    <icon-base icon-name="legend" width="50" height="50" viewBox="0 0 510 510"><icon-legend/></icon-base>
                    <code>&lt;icon-base icon-name="legend" width="50" height="50" viewBox="0 0 510 510"&gt;&lt;icon-legend/&gt;&lt;/icon-base&gt;</code>
                </div>
                <h3>Rank: Legend</h3>
            </div>
        </div>        
    </div>
</template>

<script>
import IconBase from "../icons/IconBase";
import IconJ1 from "../icons/rank/IconJ1";
import IconJ2 from "../icons/rank/IconJ2";
import IconJ3 from "../icons/rank/IconJ3";
import IconS1 from "../icons/rank/IconS1";
import IconS2 from "../icons/rank/IconS2";
import IconS3 from "../icons/rank/IconS3";
import IconM1 from "../icons/rank/IconM1";
import IconM2 from "../icons/rank/IconM2";
import IconM3 from "../icons/rank/IconM3";
import IconLegend from "../icons/rank/IconLegend";
export default {
  components: {
    IconBase,
    IconJ1,
    IconJ2,
    IconJ3,
    IconS1,
    IconS2,
    IconS3,
    IconM1,
    IconM2,
    IconM3,
    IconLegend
  }
};
</script>

<style scoped>
.item--icon {
  margin-bottom: 30px;
}
code {
  padding: 5px;
  margin-left: 15px;
  font-size: 14px;
}
</style>
