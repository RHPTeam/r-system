<template>
    <div class="wrapper">
        <side-bar/>
        <div class="main">
            <nav-bar/>
            <div class="main-content d_flex">
                <div class="main-question">
                    <top-question/>
                    <div class="ct">
                        <!-- Question -->
                        <div class="impressive-question">
                            <!-- Tag question language -->
                            <div class="tag--question">
                                <ul>
                                    <li><a href="#">javascript</a></li>
                                    <li><a href="#">css</a></li>
                                    <li><a href="#">scss</a></li>
                                    <li><a href="#">vuejs</a></li>
                                </ul>
                            </div>
                            <!-- Description question -->
                            <div class="des--question">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam quam nemo reprehenderit, inventore, natus placeat doloremque dolore, delectus vitae perferendis nulla quis laboriosam perspiciatis asperiores numquam ducimus. Atque, minus enim corrupti ipsa nobis consectetur nostrum explicabo iste natus facilis est assumenda suscipit eius accusamus rem doloremque ex? Aliquid ipsum sit ullam eum esse, illo saepe veritatis illum molestiae quasi minus maxime nesciunt placeat ipsam rerum recusandae quibusdam nostrum. Quidem vero omnis labore aliquam obcaecati tempore explicabo maiores quisquam inventore!</p>
                            </div>
                            <!-- Sources example question if service -->
                            <div class="sources--question">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, commodi.</p>
                                <div class="sources--code">Noi dung chua xac dinh</div>
                            </div>
                            <!-- Info about time and user -->
                            <div class="info--question d_flex">
                                    <ul class="info--question-option c_9 p_0">
                                        <li><a href="#">editor edit 3 hour</a></li>
                                        <li><a href="#">share</a></li>
                                        <li><a href="#">messages</a></li>
                                        <li><a href="#">save</a></li>
                                    </ul>
                                    <!-- component info user -->
                                    <div class="info--question-user d_flex c_3 p_0">
                                        <div class="user--level">
                                            <button type="submit">incre</button>
                                            <div class="level">23</div>
                                            <button type="submit">deincre</button>
                                        </div>
                                        <div class="user--info">
                                            <div>asked Aug 4'17 at 6.07</div>
                                            <div class="user--info-account d_flex">
                                                <img src="http://webresizer.com/images2/bird1_after.jpg" alt="anh">
                                                <div class="info--account">
                                                    <p class="user--name">toangat960</p>
                                                    <p><span>2,818</span> <span>Gold</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div class="similar--question">
                                <ul>
                                    <li>
                                        <p>After the lengthy preamble, comes the inevitable question. Which method (do you think) is best?</p>
                                        <p>The __slots__ declaration takes a sequence of instance variables and reserves just enough space in each instance to hold a value for each variable. Space is saved because __dict__ is not created for each instance.</p>
                                    </li>
                                    <li>
                                        There is one additional feature provided by Python though for tiny objects, the __slots__ attribute. The class could be expressed as:
                                    </li>
                                    <li>
                                        (edit- Just to be clear, y0, y1 and y2 are just meant as abstract identifiers. As pointed out, in practice you'd use meaningful identifiers)
                                    </li>
                                    <li>
                                        (edit- Just to be clear, y0, y1 and y2 are just meant as abstract identifiers. As pointed out, in practice you'd use meaningful identifiers)
                                    </li>
                                    <li>Add comment</li>
                                </ul>
                            </div>
                        </div>
                        <!-- Answers people-->
                        <div class="impressive--answers">
                            <!-- Su dung info ben tren question cho thong tin nguoi dung tai cau tra loi -->
                            <!-- su dungj simlar-question cho khoi nay -->
                        </div>
                        <!-- Your Answers -->
                        <form action="">
                            <div class="your-answers">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <!-- notification hidden, click on textarea block after -->
                                <div class="not-notification">
                                    <ul>
                                        <li>
                                            <p>Thanks for contributing an answer to RHP Team!</p>
                                            <ul class="sub-notification">
                                                <li>+ Please be sure to answer the question. Provide details and share your research!</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>But avoid ...</p>
                                            <ul class="sub-notification">
                                                <li>+ Asking for help, clarification, or responding to other answers.</li>
                                                <li>+ Making statements based on opinion; back them up with references or personal experience</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>To learn more, see our tips on writing great answers.</p>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Trạng thái thông báo -->
                                <div class="status">
                                    <a href="#">live Preview</a>
                                </div>
                                <!-- Form gửi thông tin trả lời câu hỏi -->
                                <div class="from--answers">
                                    <h2><a href="#">Sign up</a> or <a href="#">Login</a></h2>
                                    <div class="form_group">
                                        <a href="#" class="btn btn_default">
                                            Sign up  using Goole
                                        </a>
                                        <a href="#" class="btn btn_default">
                                            Sign up using Email or Password 
                                        </a>
                                    </div>
                                    <button>Post your answers</button>
                                </div>
                            </div>
                        </form>
                        <div class="">
                            <p>By clicking &quot;Post Your Answer&quot;, you acknowledge that you have read our updated terms of service, privacy policy and cookie policy, and that your continued use of the 
                            website is subject to these policies.</p>
                        </div>
                        <div class="">
                            <p>Not the answer you're looking for? Browse other questions tagged</p>
                        </div>
                    </div>
                </div>
                <div class="article-question">
                    <article-question/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '@/components/sidebar/sidebar-left'
import NavBar from '@/components/navbar/navbar'
import TopQuestion from '@/components/top/question'
import ArticleQuestion from '@/components/article/question'
export default {
    components: {
        SideBar,
        NavBar,
        TopQuestion,
        ArticleQuestion
    }
}
</script>
<style lang="scss" scoped>
@import './test.scss';
</style>
