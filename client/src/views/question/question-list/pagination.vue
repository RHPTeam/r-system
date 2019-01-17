<template>
  <div class="nav--pagination mt_4 c">
    <div class="r">
      <div class="c_md_12">
        <div class="pagination">
          <ul>
            <li class="btn-prev">
              <button>Prev</button>
            </li>
            <li class="active">
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li class='clear-border'>
              <button>...</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li class="btn-next">
              <button>Next</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
    .pagination
        ul 
            width: 100%
            justify-content: flex-end
            display: flex
            marign-right: 2rem
            li
                margin: 0rem .2rem
                list-style: none
                &.clear-border
                    button
                        border: none
                &.btn-prev,
                &.btn-next,
                    button
                        width: auto
                        padding: 0 .5rem
                &.active
                    button
                        color: #fff
                        background: #776ab0
                button
                    display: flex
                    width: 30px
                    height: 30px
                    justify-content: center
                    align-items: center
                    border: 1px solid #a8a8a8
                    color: #a8a8a8
                    border-radius: 4px
    @media (max-width: 768px) 
        button
            width: 25px
            height: 25px
</style>
