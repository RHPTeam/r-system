<template>
    <div class="ct_fl" style="margin-top:20px">
        <div class="r wrapper" >
            <div class="c_md_9">
                 <router-view /> 
            </div>
            <div class="c_md_3" >
               <ul class="site_nav">
                   <li class="item"  v-for="(nav,key) in arNav">
                      <router-link tag="a" :to="{name: nav.router_name}"> {{nav.content}} </router-link>
                      <ul class="sub">
                          <li class="sub_item" v-for="(child,c_key) in nav.children">
                                <router-link tag="a" :to="{name: child.router_name}"> {{child.content}} </router-link>
                          </li>
                      </ul>
                   </li>
               </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arNav:[{
                    router_name:"lega-public",
                    content:"Public Network Terms of Service",
                    children:[]
                },
                {
                    router_name:"lega-private",
                    content:"Private Network Terms of Service",
                    children:[]
                },
                // {
                //     router_name:"",
                //     content:"API Terms of Use",
                //     children:[]
                // },
                {
                    router_name:"lega-privacy",
                    content:"Privacy Policy",
                    children:[]
                },
                // {
                //     router_name:"",
                //     content:"Data Security and Due Process",
                //     children:[]
                // },
                {
                    router_name:"due-data-security",
                    content:"Data Security Overview",
                    children:[
                        {
                            router_name:"due-data-subjects",
                            content:"Data Subjects (You)",
                            children:[]
                        },
                        {
                            router_name:"due-data-controllers",
                            content:"Data Controllers (Customers)",
                            children:[]
                        },
                        {
                            router_name:"due-data-processors",
                            content:"Data Processors (Vendors)",
                            children:[]
                        }
                    ]
                },
                {
                    router_name:"lega-cookie",
                    content:"Cookie Policy",
                    children:[]
                },
                // {
                //     router_name:"",
                //     content:"Acceptable Use Policy",
                //     children:[]
                // },
                // {
                //     router_name:"",
                //     content:"Trademark Guidance",
                //     children:[]
                // },
                {
                    router_name:"lega-contact",
                    content:"Contact",
                    children:[]
                }

            ]
        }
    }
}
</script>

<style scope lang="scss">
    .wrapper{
        padding:10px 5%; 
        ul{
        list-style: none;
        
        }
        .site_nav{
            border-radius: 8px;
            background-color: #f5f5f5;
            padding-bottom:26px;
            
            .item{
                .router-link-active{
                    font-weight: bold;
                }
                a:hover{
                    text-decoration: none;
                }
                a{
                    color:#555;
                    display:block;
                    font-size:22px;
                    padding-top:26px;
                    
                }
            }
        }
    }
    
</style>
