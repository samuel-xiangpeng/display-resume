import './static/css/App.css';
import Todos from './static/images/todos.png';
import Gobang from './static/images/gobang.png';
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <section className='nav'>
        <ul className="nav-list">
          <li className="nav-item"><strong><Link to="/resume"><i className='iconfont icon-jianli' />简历</Link></strong></li>
          <li className="nav-item"><a href="https://github.com/samuel-xiangpeng"><i className='iconfont icon-GitHub' />gihub</a></li>
          <li className="nav-item"><a href="https://gitee.com/samuel-xiangpeng"><i className='iconfont icon-gitee-fill-round' />gitee</a></li>
        </ul>
      </section>
      <section className='Welcome-section'>
        <h1>Hey I am Samuel</h1>
      </section>
      <section className='project-section'>
        <h2 className='project-section-header'>
          These are some of my projects
        </h2>
        <ul className="project-section-content">
          <li className="project-section-item">
            <img src={Todos} alt="Todos" />
            <p className='project-item-title'>
              <span className="code">&lt;</span>
                Todos(待办事项记事本)
                <span className="code">&#47;&gt;</span>
            </p>
            {/* hover展示 */ }
            <div className="li-hover">
              <a href='https://github.com/samuel-xiangpeng/todos-react' alt='源码' title='源码'><i className='iconfont icon-dashujukeshihuaico-'></i></a>
              <a href='https://samuel-xiangpeng.github.io/todos-react/' alt='演示' title='演示'><i className='iconfont icon-explain'></i></a>
            </div>
          </li>
          <li className="project-section-item">
            <img src={Gobang} alt="Gobang" />
            <p className='project-item-title'>
              <span className="code">&lt;</span>
                五子棋
                <span className="code">&#47;&gt;</span>
            </p>
            {/* hover展示 */ }
            <div className="li-hover">
              <a href='https://github.com/samuel-xiangpeng/games' alt='源码' title='源码'><i className='iconfont icon-dashujukeshihuaico-'></i></a>
              <a href='https://samuel-xiangpeng.github.io/games/Backgammon/' alt='演示' title='演示'><i className='iconfont icon-explain'></i></a>
            </div>
          </li>
        </ul>
      </section>
      <section className='footer-section'>
        <h2>One can never consent to creep when one feels an impulse to soar.</h2>
        <center>
          <font color='gray' size='2'>
            &copy;samuel|samuel_xaingpeng@163.com
          </font>
        </center>

      </section>
    </div>
  );
}

export default App;
