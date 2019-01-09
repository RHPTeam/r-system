<template>
    <nav id="sidebar" v-bind:class="{'collapse-sidebar':Collapse}">
        <div class="sidebar-header">
            <img v-if="Collapse" src="../../assets/logo.png" alt="">
            <img v-else src="../../assets/Logo-text.svg" alt="">
        </div>
            <ul class="list-unstyled">
                <li class="active">
                    <router-link :to="'/users'">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>QUESTION</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>JOBS</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>DOCUMENTATIONS</span>
                        <span class='new'>New</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>TAGS</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>USERS</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>RANKS</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>ASK QUESTIONS</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/users'">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        <span class='sidebar-menu-text'>INBOX</span>
                        <span class='inbox'>21</span>
                    </router-link>
                </li>
            </ul>
    </nav>
</template>
<script>
export default {
  props: ["Collapse"],
  data() {
    return {
      isActive: false
    };
  }
};
</script>
<style lang="scss" scoped>
body {
}

#sidebar {
  min-width: 297px;
  width: 297px;
  max-width: 297px;
  min-height: 1079px;
  z-index: 100;
  box-shadow: 7.5px 0 20px 0 rgba(0, 0, 0, 0.16);
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  .sidebar-header {
    padding: 15px 5px;
    text-align: center;
    height: 60px;
    margin-bottom: 5rem;

    img {
      // width: 45px;
      height: auto;
      transition: all 0.3s;
    }
  }

  ul.list-unstyled {
    padding: 0;

    li {
      text-transform: uppercase;
      list-style: none;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;

      a {
        text-decoration: none;
        padding-left: 72px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: 400;
        color: #a8a8a8;
        letter-spacing: 0.1px;
        display: block;
        font-size: 18px;
        position: relative;
        white-space: nowrap;

        i {
          font-size: 16px;
          width: 18px;
          text-align: center;
          margin-right: 15px;
        }

        &:hover,
        &.active {
          color: #242729;
        }

        .inbox {
          border-radius: 3rem;
          padding: 0.1rem 1rem;
          border: 1px solid #e4e4e4;
          color: #776ab0;
          font-weight: 400;
          font-size: 1.1rem;
          margin-left: 1rem;
          line-height: 1.1rem;
        }

        span {
          &.new {
            color: #776ab0;
            font-size: 13px;
            text-transform: uppercase;
            position: absolute;
            bottom: 63%;
            right: 8%;
            padding: 0px 3px;
          }
        }
      }

      &:first-child {
        a i {
          font-size: 18px;
        }
      }
    }
  }

  &.collapse-sidebar {
    min-width: 74px;
    max-width: 74px;
    text-align: center;

    .sidebar-header {
      img {
        width: 40px;
      }
    }

    ul.list-unstyled {
      li {
        display: flex;
        justify-content: center;

        a {
          position: relative;

          i {
            font-size: 1.4rem;
            width: 18px;
            text-align: center;
            margin: 0;
          }

          span.inbox {
            font-size: 0.9rem;
            position: absolute;
            margin: 0;
            right: 10%;
            // transform: translate(-50%) translateY(-80%);
            top: 0%;
            font-weight: 500;
            padding: 0.2rem 0.3rem;
          }

          span.new {
            position: absolute;
            width: 100%;
            font-size: 0.7rem;
            left: 0;
            bottom: 0%;
          }

          span.sidebar-menu-text {
            display: none;
          }
        }

        &:first-child {
          a i {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
