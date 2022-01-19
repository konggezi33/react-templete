# react的学习笔记
### 更新默认的端口号
  node_modules文件夹下 -> react-scripts文件夹下 -> scripts文件夹下 -> start.js
### 快捷键 
  rcc
## Fragment
 import React,{ Fragment } from 'react' 相当于template
### react 创建组件的三种方式
#### 函数式定义的无状态组件
  一。创建纯展示组件，这种组件只负责根据传入的props来展示，不涉及到要state状态的操作
  function HelloComponent (props) {
    return <div>Hello {props.name}</div>
  }
  1. 组件不会被实例化，整体渲染性能得到提升2.组件不能访问this对象(无状态组件由于没有实例化过程，所以无法访问组件this中的对象)
  3. 组件无法访问生命周期的方法4.无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用
  二 React.createClass
  三 React.Component
### state
 1. 组件的私有属性，构造函数是唯一给this.state 赋值的地方：
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  2. 更新data的值 this.setState({comment: 'Hello'});
  3. 异步更新state的值
    this.setState((state, props) => {
      counter: state.counter + props.increment
    })
    this.setState(function(state, props) {
      return {
        counter: state.counter + props.increment
      };
    });
    this.setState((state, props) => {
      counter: state.counter + props.increment
    },()=>{
      // 更新完获取state的值
      console.log(state)
    })
  4. state的简写
    class Toggle extends React.Component {
      state = {
        name: '4565'
      }
      render() {
        return(
          <div></div>
        )
      }
    }
### 生命周期
  1. componentDidMount 组件已完成Dom的渲染，
  2. componentWillUnmount 组件卸载之前
  3. shouldComponentUpdate 组件更新
    shouldComponentUpdate(nextProps, nextState) {
      if (this.props.color !== nextProps.color) {
        return true;
      }
      if (this.state.count !== nextState.count) {
        return true;
      }
      return false;
    }
  4. componentDidUpdate
### 事件处理
  1. 函数内部的方法
    function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  2. 在构造函数用bind绑定
    class Toggle extends React.Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }
  3. 如果你正在使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数
    class LoggingButton extends React.Component {
      // 此语法确保 `handleClick` 内的 `this` 已被绑定。
      // 注意: 这是 *实验性* 语法。
      handleClick = () => {
        console.log('this is:', this);
      }

      render() {
        return (
          <button onClick={this.handleClick}>
            Click me
          </button>
        );
      }
    }
  4. 如果你没有使用 class fields 语法，你可以在回调中使用箭头函数：
    class LoggingButton extends React.Component {
      handleClick() {
        console.log('this is:', this);
      }

      render() {
        // 此语法确保 `handleClick` 内的 `this` 已被绑定。
        return (
          <button onClick={() => this.handleClick()}>
            Click me
          </button>
        );
      }
   }
  5. 向事件处理程序传递参数
    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
### 阻止组件渲染
  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }

    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
### 嵌套组件中用props.chilren
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
}
## Hook
  1. Hook是一些可以让你在函数组件中“钩入”React state 及生命周期等特性的函数
  2. Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React
  3. linter,eslint-plugin-react-hooks 插件可以检查出hook的不规则使用
  4. 1.**不要再循环、条件或者嵌套函数中使用Hook**,2.**不要在普通的 JavaScript 函数中调用 Hook**,确保总是在你的 React 函数的最顶层调用他们
### useState
  1. 第一次 const [count, setCount] = useState(0) 初始化的值内部会缓存
  import React,{ useState, useEffect } from 'react'
  function Count () {
    const [count, setCount] = useState(0)
    // setCount 传入一个函数
    setCount(val => {
      return val+1
    })
    useEffect(() => {
      document.title = `You clicked ${count} times`
    })
    
    return (
      <div>
        <h2>引用useState来增加数据</h2>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1) }>add</button>
      </div>
    )
  }
### React.useRef()
  function Count () {
    const myRef = React.useRef()

    useEffect(() => {
      document.title = `You clicked ${count} times`
    })
    
    return (
      <div>
        <h2>引用useState来增加数据</h2>
        <p>count: {myRef}</p>
        <button onClick={()=>setCount(count+1) }>add</button>
      </div>
    )
  }
### useEffect
    function FriendStatus(props) {
      const [isOnline, setIsOnline] = useState(null);

      useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        // Specify how to clean up after this effect:
        return function cleanup() {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });

      if (isOnline === null) {
        return 'Loading...';
      }
      return isOnline ? 'Online' : 'Offline';
   }
   2. 更新时调用useEffect,相当于类式组件中的ComponentDidMount函数
    useEffect(()=>{
      // 在此可以执行任何副作用操作 ComponentDidMount 和ComponentDidUpdate
      document.title = `You clicked ${count} times`
      return () => {
        // 相当于 ComponentWillUnmount 进行卸载前的操作
      }
    },[count]) // 若果是[],回调函数只在第一次render之后操作
### context 组件间的通信（主要用于祖组件与孙组件间的通信）
  1. 创建context
     const MyContext = React.createContext()
  2. 渲染组件时，外层包裹<MyContext.Provider></MyContext.Provider>标签（传值的key必须为value）
      <MyContext.Provider value={数据}>子组件</MyContext.Provider>
  3. (1)后代组件使用时声明接收(只能在类式组件中用)
      static contextType = MyContext 
      name = this.context
      (2)函数组件和类式组件中
      <MyContext.Customer>
        {
          value   => {
            return 值
          }
        }
      </MyContext.Customer>
    const MyContext = React.createContext()
    const {Provider,Consumer} = MyContext
    export default class A extends Component {
      state = {
        userName:'Tome'
      }
      render() {
        return (
          <div>
            我是A组件
            <h3>我的名字是：{this.state.userName}</h3>
            <Provider value={this.state}>
              <B />
            </Provider>
          </div>
        )
      }
    }

  class B extends Component {
    render() {
      return (
        <div>
          我是B组件
          <h3>我的名字是:ccc</h3>
          <C />
        </div>
      )
    }
  }

    // class C extends Component {
    //   // 类式组件
    //   static contextType = MyContext
    //   render() {
    //     console.log(this)
    //     return (
    //       <div>
    //         我是C组件
    //         <h3>我爷爷的名字是: {this.context.userName}</h3>
    //       </div>
    //     )
    //   }
    // }

    function C(){
      // 函数式组件
      return (
        <div>
          我是C组件
          <h3>我爷爷的名字是:
            <Consumer>
              {
                value => {
                  return value.userName
                }
              }
            </Consumer>
          </h3>
        </div>
      )
    }
### render props 两个函数通过render(向组件内部动态传入带有内容的标签结构)
  1. vue ： 使用slot技术，也就是通过组件标签体<A><B/></A>
  2. react: 使用chilren props:通过组件标签体传入 this.props.chilren
            使用render props: 通过组件标签属性传入结构，一般使用render函数属性
  3. chilren props
     <A><B>xxxxx</B></A>
     A: {this.props.chilren} 若果A组件需要携带B组件的数据无法实现
  
  4. <A render = { data => <B data ={data} />} />
    A： 组件{this.props.render(内部的数据)}
    B: {this.props.data}
### this.props.chilren 标签体内容
## react-router 路由
  npm install -S react-router-dom
  import { Router, Route, BrowerRouter } from 'react-router-dom'
  用BrowerRouter 包裹在根目录
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
  2. 嵌套路由
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  3.IndexRoute 组件
    你可以把IndexRoute想象成某个路径的index.html。
    **注意，IndexRoute组件没有路径参数path。**
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="accounts" component={Accounts}/>
        <Route path="statements" component={Statements}/>
      </Route>
    </Router>
  4. <Redirect>组件用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。
    <Route path="inbox" component={Inbox}>
    {/* 从 /inbox/messages/:id 跳转到 /messages/:id */}
    ＜Redirect from="messages/:id" to="/messages/:id" />
    </Route>
  5.IndexRedirect 组件
    IndexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件。
  6. Link
    Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。它基本上就是<a>元素的React 版本，可以接收Router的状态。
  7. histroy 属性
    browserHistory
    hashHistory  路由将通过URL的hash部分（#）切换，URL的形式类似example.com/#/some/path。
    createMemoryHistory  浏览器的路由就不再通过Hash完成了，而显示正常的路径example.com/some/path，背后调用的是浏览器的History API
  8. exact 精准匹配
  9. switch 匹配到已有的路由后再不往下走（一个个路由匹配两个页面）
  10 路由的lazy加载  const  SetTime = lazy(() => import('../Pages/setTime')) 路由外面要添加 Suspense fallback={<div>Loading</div>}
      <Suspense fallback={<div>Loading</div>}>
            <Routes>
            {
              routes.map(item =>{
                return <Route path={item.path}  element={<item.component />}/>
              })
            }
            </Routes>
      </Suspense>

### PureComponent 纯组件，没有数据更新的时候不更新组件
    只是进行了state和props的比较，如果只是内部的数据变化了，
    1. 重新写shuoldComponentUpdate
    2. 更新时数据不能与原来的组件发生关系（不要直接修改state,而是要产生新的数据）
### Redux
  1. redux 是一个用于javascript容器，提供可预测化的状态管理
  2. reducers 只是一些纯函数 她接收先前的state和action 并返回新的state 可以复用、控制顺序、传入附加参数
  3. 在reducer中必须是要有返回值的，这样store才能接收到数据 函数会接收两个数据，一个是state,一个是action
  4. action 本质就是一个js对象，必须包含type属性 只是描述了有事情要发生，并没有描述如何去更新
  5. store 是把action和reducer联系到一起的函数 通过createStore 来创建store
#### react-redux中的两个重要的成员
  1. Provider 这个组件能够使你整个app都能够获取store中的数据
      1. 包含在根组件的最外层，所有的子组件都能拿到state
      2. 接收store作为props,然后根据context往下传递，这样react中的任何组件都可以通过context获取到store
  2. connect 这个方法能够使组件跟store来进行关联
      1. Provider内部组件若果要是使用state中的数据，必须要connect进行一次封装，换句话说就是必须被connect进行加强
      2. connect方便我们能够获取到store中的state
      3. connect(mapStateToProps(), mapDispatchToProps()，mergeProps(), option)(compnent组件)
        mapStateToProps(state,ownProps){} 这个函数允许我们将store中的数据作为props绑定到组件上
        mapDispatchToProps(dispatch, owmProps) 将action作为props绑定到组件上
### 组件间的通信
  1. props
    (1) chilren props
    (2) render props
  2. 消息订阅-发布
    pubs-sub,event
  3. 集中式管理
    redux，dva
  4. context
    生产者-消费者