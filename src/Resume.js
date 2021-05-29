import React from 'react';
import './static/css/resume.css';
import Passport from './static/images/resume.JPG'
const Resume = function () {
    return (
        <div className="resume">
            {/* 简历头部 */ }
            <header className="resume-hd">
                <section className="title">
                    <div className="name-job">
                        <div className='name'>
                            <h1>周祥鹏 <small>zhouxiangpeng</small></h1>
                        </div>
                        <div className='job'>
                            <p><span>意向职位:</span> WEB前端开发工程师</p>
                        </div>
                    </div>
                    <div className="passport">
                        <div className="img">
                            <img src={ Passport } alt="证件照" />
                        </div>
                    </div>
                </section>
                <section className="info">
                    <h2>男 /1998年08</h2>
                    <h2>北方民族大学·本科/2021年毕业</h2>
                </section>
                <section className="contact">
                    <ul>
                        <li><a rel="noreferrer" href='https://github.com/samuel-xiangpeng' target='_blank'>https://github.com/samuel-xiangpeng<i className='iconfont icon-GitHub' /></a></li>
                        <li><a rel="noreferrer" href='mailto:samuel_xiangpeng@163.com' target='_blank'>samuel_xiangpeng@163.com<i className='iconfont icon-youxiang' /></a></li>
                        <li><a rel="noreferrer" href='tel:17607835669' target='_blank'>17607835669<i className='iconfont icon-dianhua' /></a></li>
                    </ul>
                </section>
            </header>
            {/* 简历主体 */ }
            <section className="resume-bd">
                {/* 项目经历 */ }
                <section className="project">
                    {/* 头部 */ }
                    <header className="section-hd">
                        <span className="section-title-l"></span>
                        <h2 className="section-title">项目经历</h2>
                        <span className="section-title-r"></span>
                    </header>

                    {/* 主体 */ }
                    <div className="section-bd">
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />自定义工具库</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/toolroom" target='_blank'>项目源码</a>
                                    <a rel="noreferrer" href="https://samuel-xiangpeng.github.io/toolroom/" target='_blank'>项目文档</a>
                                </div>
                            </header>
                            <div className="item-bd"><span>项目描述: </span>自定义实现包括函数相关、数组相关、对象相关,字符串相关的工具函数, 类似流行的工具函数库lodash；还有手写DOM事件监听、ajax请求、消息订阅-发布、Promise。极大提升对原生JS核心技术的理解和编码能力！</div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />音乐仿站</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="#/resume" target='_blank'>源码私有</a>
                                    <a rel="noreferrer" href="https://samuel-xiangpeng.github.io/games/music.com/#/" target='_blank'>项目演示</a>
                                </div>
                            </header>
                            <div className="item-bd">
                                <span>项目描述: </span>
                                这是一个使用React框架，以及React-router构建单页面应用开发的PC端音乐网站。
                                通过create-react-app 快速搭建开发环境,运用react.js中的指令和服务与后台接口对接，进行数据交互，进行页面渲染，实现功能模块的判断。使用阿里矢量图标库以及antd组件库。
                            </div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />Todos待办事项记事本</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/todos-react" target='_blank'>项目源码</a>
                                    <a rel="noreferrer" href="https://samuel-xiangpeng.github.io/todos-react/" target='_blank'>项目演示</a>
                                </div>
                            </header>
                            <div className="item-bd">
                                <span>项目描述: </span>
                                这是个单页面的web端的待办事项小记事本。这是我从自己的需求出发，设计出的极简记事应用。
该项目大量使用 React Hooks，让我对 Hooks 有了深刻的理解和应用。
                            </div>
                        </div>
                    </div>
                </section>
                {/* 技能 */ }
                <section className="skill">
                    {/* 头部 */ }
                    <header className="section-hd">
                        <span className="section-title-l"></span>
                        <h2 className="section-title">专业能力</h2>
                        <span className="section-title-r"></span>
                    </header>

                    {/* 主体 */ }
                    <div className="section-bd">
                        <ul className='section-list'>
                            <li><p className='section-content'><i className='dot' />掌握Web前端开发基本技能，熟悉W3C标准、HTML、CSS、UI重构、页面布局、响应式布局等，领悟视觉与设计，重视页面交互与用户体验。</p></li>
                            <li><p className='section-content'><i className='dot' /> 对JavaScript、各类UI组件库、JS类库、模板引擎、MV*框架、工程化工具等有着较熟练的实践和较深刻的感悟。</p></li>
                            <li><p className='section-content'><i className='dot' /> 对Node.js、模块化规范、CSS预处理器、数据可视化、设计模式、性能优化、前端安全等也有一定的应用与思考。</p></li>
                            <li><p className='section-content'><i className='dot' /> 熟练使用ES6语法编程，追求代码高质量可维护性。</p></li>
                            <li><p className='section-content'><i className='dot' /> 熟练使用Git进行版本控制和代码托管、Markdown进行文档编写。</p></li>
                            <li><p className='section-content'><i className='dot' /> 时刻保持好奇心，具有一定的创新创造精神，持续关注业内前沿技术。工作上积极执行有责任心，具有良好的沟通合作能力、分析解决问题能力以及较强的学习能力。</p></li>
                        </ul>
                    </div>
                </section>
                {/* 开源项目 */ }
                <section className="openSource">
                    {/* 头部 */ }
                    <header className="section-hd">
                        <span className="section-title-l"></span>
                        <h2 className="section-title">开源项目</h2>
                        <span className="section-title-r"></span>
                    </header>

                    {/* 主体 */ }
                    <div className="section-bd">
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />Games</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/games" target='_blank'>项目源码</a>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/games" target='_blank'>项目演示</a>
                                </div>
                            </header>
                            <div className="item-bd">爱好琢磨一些有趣有意思的东西，所以自己会总结一些有意思的关于前端方面的知识然后自己去动手完成。Games是一个Demo仓库，这里面主要使用原生Js，html，css完成，里面存放着我自己感觉有意思的东西，比如使用css绘制动画，一些特效等。这些有趣的东西让我自学过程不在那么枯燥。</div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />省县市三级联动</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/nodeStudy" target='_blank'>项目源码</a>
                                    {/* <a href="#/resume" target='_blank'>项目演示</a> */}
                                </div>
                            </header>
                            <div className="item-bd">这是我在学习node.js过程中做的一个小案例，由nodeJS开发后端接口返回数据，前端ajax请求，实现省县市三级输入框数据的联动改变的功能效果。</div>
                        </div>
                    </div>
                </section>
                {/* 校园经历 */ }
                <section className="campus">
                    {/* 头部 */ }
                    <header className="section-hd">
                        <span className="section-title-l"></span>
                        <h2 className="section-title">校园经历</h2>
                        <span className="section-title-r"></span>
                    </header>

                    {/* 主体 */ }
                    <div className="section-bd">
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />校资助服务部<small>职位: 学生会干事</small></h3>
                                <div className='time'>2017年9月~2018年6月</div>
                            </header>
                            <div className="item-bd"><p>日常工作是协助老师整理关于学校学生资助服务方面的东西，以及处理一些学生贷款以及奖学金发放的问题，并且额外的对学校的自助服务部的公众号进行管理。</p></div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />校阳光网球俱乐部<small>职位: 社长</small></h3>
                                <div className='time'>2018年9月~2019年6月</div>
                            </header>
                            <div className="item-bd"><p>每年例行组织社团三四十名社员进行社团内部的网球比赛。 每年由我们社团负责举行全校的网球比赛，参与
人数在逐年增加。 在我任职期间，带领社团成员作为学校代表队参加宁夏回族自治区的高校杯，获得团体三
等奖的荣誉。 在我任职期间，组织过两三次户外游玩活动，社团参与度90%。社团外成员也有参与。</p></div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />宁夏自治区大学生创业大赛</h3>
                                <div className='time'>2018年4月~2018年5月</div>
                            </header>
                            <div className="item-bd"><p>参加大学生创业大赛获得校级三等奖</p></div>
                        </div>
                    </div>
                </section>
                {/* 自我评价 */ }
                <section className="self-review">
                    {/* 头部 */ }
                    <header className="section-hd">
                        <span className="section-title-l"></span>
                        <h2 className="section-title">自我评价</h2>
                        <span className="section-title-r"></span>
                    </header>

                    {/* 主体 */ }
                    <div className="section-bd">
                        <p>我认真负责，能吃苦耐劳，能够很快的接受、适应和掌握新的事物。在工作中，我
                        的时间管理能力较强，能够认真负责的完成自己的工作。善于与人沟通，能很好的去处
                        理人际关系，生活方面，也能够和同学朋友很好的相处，互相帮助。同时，我能够严格
要求自己，常总结以往和反省自身，并且能对未来进行规划</p>
                    </div>
                </section>
            </section>
        </div>
    )
}


export default Resume

