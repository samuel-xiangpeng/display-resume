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
                {/* 工作经历 */ }
                <section className="work">
                    {/* 头部 */ }
                    <header className="section-hd">
                        <span className="section-title-l"></span>
                        <h2 className="section-title">工作经历</h2>
                        <span className="section-title-r"></span>
                    </header>

                    {/* 主体 */ }
                    <div className="section-bd">
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />杭州爱康优申出国留学服务有限公司</h3>
                                <div className='time'>2020年11月~2021年5月</div>
                            </header>
                            <div className="item-bd"><p>职位是前端开发工程师，主要运用的技术栈是React。日常工作是公司展示网站前端页面改版以及协助谷歌广告投放那边进行广告投放，SEO优化。</p></div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />云智慧(北京)科技有限公司</h3>
                                <div className='time'>2021年6月~2022年12月</div>
                            </header>
                            <div className="item-bd"><p>职位是前端开发工程师，主要技术栈：<strong>React</strong>, <strong>Webpack</strong>, <strong>Mobx</strong>。 日常工作是运用主流前端技术，协助完善公司组建库问题，积极提出修改意见。协助前后端开发，产品经理，运维工程师解决问题并且充分还原设计稿效果。OPPO出差期间，上线四五十余次，解决很多线上问题，保证平稳上线没有出重大线上事故。</p></div>
                        </div>
                    </div>
                </section>

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
                                <h3><i className='dot' />ITSM(IT服务管理系统) <small>公司项目</small></h3>
                                {/*<div className='links'>*/}
                                    {/*<a rel="noreferrer" href="https://github.com/samuel-xiangpeng/wink-cli" target='_blank'>项目源码</a>*/}
                                    {/*<a rel="noreferrer" href="#/resume" target='_blank'>项目演示</a>*/}
                                {/*</div>*/}
                            </header>
                            <div className="item-bd">
                                <span>项目描述: </span>
                                这是一套帮助企业对IT系统的规划、研发、实施和运营进行有效管理的系统。主要技术栈是：<strong>React</strong>, <strong>Webpack</strong>, <strong>Mobx</strong>。
                                <p>引入Formily表单解决方案，让表单字段联动之间的损耗降低，提升了表单的效率。引入了Mobx状态管理器，简化了redux的概念，让状态之间的监听更加高效易于维护。为适应公司国际化需求，使用react-i18next进行国际化开发。</p>
                                <p>封装过大量的业务组件，比如按钮显示区域根据最大宽度显示多少个，超出出现滑动交互，这大大优化了用户的体验；大量数据量的下拉选择组件，进行虚拟滚动的实现，优化的下拉组件的性能。</p>
                            </div>
                        </div>
                        {/* Wink脚手架 */}
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />Wink脚手架</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/wink-cli" target='_blank'>项目源码</a>
                                    <a rel="noreferrer" href="#/resume" target='_blank'>项目演示</a>
                                </div>
                            </header>
                            <div className="item-bd">
                                <span>项目描述: </span>
                                这是一个主要使用<strong>React</strong>，<strong>Webpack</strong>, <strong>Node.js</strong>等技术基于命令行搭建的生成项目的基本结构的工具。
                                期间使用部分工具库进行协助：<strong>commander</strong>工具库进行自定义命令行指令；<strong>inquirer</strong>工具库进行命令行询问用户问题，记录回答结果等等。
                                搭建完脚手架让我基本了解了部分脚手架基本的搭建过程。
                            </div>
                        </div>
                        {/* 自定义工具库 */}
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />自定义工具库</h3>
                                <div className='links'>
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/tools" target='_blank'>项目源码</a>
                                    <a rel="noreferrer" href="https://samuel-xiangpeng.github.io/tools/#/" target='_blank'>项目文档</a>
                                </div>
                            </header>
                            <div className="item-bd"><span>项目描述: </span>自定义实现包括函数相关、数组相关、对象相关,字符串相关的工具函数, 类似流行的工具函数库lodash；还有手写ajax请求、Promise等。极大提升了我对<strong>原生JS</strong>核心技术的理解和编码能力！</div>
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
                            <li><p className='section-content'><i className='dot' /> 掌握Web前端开发基本技能，熟悉W3C标准、HTML、CSS、<strong>页面布局</strong>、响应式布局等，领悟视觉与设计，<strong>重视页面交互</strong>与用户体验.</p></li>
                            <li><p className='section-content'><i className='dot' /> 熟悉<strong>前后端分离</strong>技术,包括 <strong>AJAX</strong>、<strong>跨域</strong>、前端路由等,基本掌握<strong>React全家桶</strong>的使用.</p></li>
                            <li><p className='section-content'><i className='dot' /> 对<strong>Node.js</strong>、模块化规范、数据可视化、性能优化等也有一定的应用与思考.</p></li>
                            <li><p className='section-content'><i className='dot' /> 熟练使用ES6语法编程，追求代码高质量可维护性.掌握基本的<strong>webpack</strong>打包技术.</p></li>
                            <li><p className='section-content'><i className='dot' /> 熟练使用<strong>Git</strong>进行版本控制和代码托管、<strong>Markdown</strong>进行文档编写.</p></li>
                            <li><p className='section-content'><i className='dot' /> 了解部分图形图像软件（如Photoshop），对从设计转换为产品有一定的认识，可以进行简单的切图操作.</p></li>
                            <li><p className='section-content'><i className='dot' /> 时刻保持好奇心，具有一定的创新创造精神，<strong>持续关注业内前沿技术</strong>。工作上积极执行有责任心，具有良好的沟通合作能力、分析解决问题能力以及较强的学习能力.</p></li>
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
                                    {/*<a rel="noreferrer" href="https://github.com/samuel-xiangpeng/games" target='_blank'>项目源码</a>*/}
                                    <a rel="noreferrer" href="https://github.com/samuel-xiangpeng/games" target='_blank'>项目演示</a>
                                </div>
                            </header>
                            <div className="item-bd">爱好琢磨一些有趣有意思的东西，所以自己会总结一些有意思的关于前端方面的知识然后自己去动手完成。Games是一个个人Demo仓库，这里面主要使用原生Js，html，css完成，里面存放着我自己感觉有意思的东西，比如使用css绘制动画，一些特效等。这些有趣的东西让我自学过程不再那么枯燥。</div>
                        </div>
                        <div className="item">
                            <header className='item-hd'>
                                <h3><i className='dot' />Todos待办事项记事本</h3>
                                <div className='links'>
                                    {/*<a rel="noreferrer" href="https://github.com/samuel-xiangpeng/todos-react" target='_blank'>项目源码</a>*/}
                                    <a rel="noreferrer" href="https://samuel-xiangpeng.github.io/todos-react/" target='_blank'>项目演示</a>
                                </div>
                            </header>
                            <div className="item-bd">
                                <span>项目描述: </span>
                                这是个单页面的web端的待办事项小记事本。这是我从自己的需求出发，设计出的极简记事应用。
                                该项目大量使用 <strong>React Hooks</strong>，让我对 Hooks 有了深刻的理解和应用。
                            </div>
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
                        <p>我认真负责，能吃苦耐劳，能够很快的接受、适应和掌握新的事物。在工作中，我的时间管理能力较强，能够认真负责的完成自己的工作。善于与人沟通，能很好的去处
                        理人际关系，生活方面，也能够和同学朋友很好的相处，互相帮助。同时，我能够严格
要求自己，常总结以往和反省自身，并且能对未来进行规划.</p>
                    </div>
                </section>
            </section>
        </div>
    )
}


export default Resume

