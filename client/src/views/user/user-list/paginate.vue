<template>
    <div class="content--paginate">
        <nav aria-label="Page navigation example">
            <ul class="pagination justify_content_end">
                <li class="page_item disabled">
                    <a class="page_link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page_item"><a class="page_link" href="#">1</a></li>
                <li class="page_item"><a class="page_link" href="#">2</a></li>
                <li class="page_item">
                    <a class="page_link" href="#">
                        <icon-base icon-name="more" viewBox="0 0 20 20"><icon-more /></icon-base>
                    </a>
                </li>
                <li class="page_item"><a class="page_link" href="#">3</a></li>
                <li class="page_item"><a class="page_link" href="#">4</a></li>
                <li class="page_item">
                    <a class="page_link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase"
import IconMore from "@/components/icons/IconMore"
export default {
    components: {
        IconBase,
        IconMore,
    },
};
</script>
<style lang="scss" scoped>
.content--paginate {
  .page_item {
    margin-right: 5px;
    .page_link {
      border-radius: 6px;
      color: #a8a8a8;
      &:hover,
      &:active,
      &:focus {
        color: #fff;
        background: #776ab0;
      }
    }
  }
}
</style>
