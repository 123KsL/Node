import { useState } from 'react';
// JSX 是 JavaScript 语法扩展,
// 可以让你在 JavaScript 文件中书写类似 HTML 的标签。
// 虽然还有其它方式可以编写组件，但大部分 React 开发者更喜欢 JSX 的简洁性，并且在大部分代码库中使用它。
//渲染逻辑和标签共同存在于同一个地方——组件。
//JSX 是一种语法扩展，而 React 则是一个 JavaScript 的库。

// ※※渲染机制
// 触发渲染（将食客的订单送到厨房）
// 渲染组件（在厨房准备订单）
// 提交到 DOM（将订单送到桌前）


//状态管理
// 用 State 响应输入 
// 使用 React，你不用直接从代码层面修改 UI。例如，不用编写诸如“禁用按钮”、“启用按钮”、“显示成功消息”等命令。相反，
// 你只需要描述组件在不同状态（“初始状态”、“输入状态”、“成功状态”）下希望展现的 UI，然后根据用户输入触发状态更改。这和设计师对 UI 的理解很相似。
//选择 State 结构 去除多余的状态变量简化代码
//在组件间共享状态 把需要共享的组件放在共同的父组件上使用相同的props这叫"状态提升"
//对 state 进行保留和重置 
// 当你重新渲染一个组件时， React 需要决定组件树中的哪些部分要保留和更新，以及丢弃或重新创建。在大多数情况下， React 的自动处理机制已经做得足够好了。
// 默认情况下，React 会保留树中与先前渲染的组件树“匹配”的部分。
// 然而，有时这并不是你想要的。例如，在下面这个程序中，输入内容后再切换收件人并不会清空输入框。这可能会导致用户不小心发错消息：

// 迁移状态逻辑至 Reducer 中 
// 对于那些需要更新多个状态的组件来说，过于分散的事件处理程序可能会令人不知所措。对于这种情况，你可以在组件外部将所有状态更新逻辑合并到一个称为 “reducer” 的函数中。
// 这样，事件处理程序就会变得简洁，因为它们只需要指定用户的 “actions”。在文件的底部，reducer 函数指定状态应该如何更新以响应每个 action！
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('未知操作：' + action.type);
    }
  }
}
<TaskList
  tasks={tasks}
  onChangeTask={handleChangeTask}
  onDeleteTask={handleDeleteTask}
/>
//Context 允许父组件将一些信息提供给它下层的(类似于Angular的service 然后通过providers: [LevelService], // 服务实例仅限于该组件及其子组件)
import React, { createContext, useContext } from "react";

// 创建一个 Context
const LevelContext = createContext(1);

function Section({ children }) {
  const level = useContext(LevelContext); // 获取当前级别
  return (
    <LevelContext.Provider value={level + 1}>

      {/* Provider 的功能：
Provider 是一个 React 组件，用于“提供”上下文值。
它通过 value 属性将数据传递给树中的所有订阅了这个 Context 的子组件。
作用范围：
Provider 组件会将其 value 属性中的数据向下传递给它的子组件树。
只有位于 Provider 包裹范围内的组件才能访问这个上下文值。
更新机制：
如果 Provider 的 value 属性发生了变化，所有使用该 Context 的组件都会重新渲染，以反映新的值。 */}
      <section>
        <Heading>Section Level {level}</Heading>
        {children}
      </section>
    </LevelContext.Provider>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContext); // 获取当前级别
  const Tag = `h${level}`; // 动态选择标题标签
  return <Tag>{children}</Tag>;
}

export default function App() {
  return (
    <Section>
      <Section>
        <Section />
      </Section>
    </Section>
  );
}

//React Context: 更适合动态的上下文数据流，轻量级。
//Angular DI: 借助依赖注入机制，服务在整个模块或组件树中是单例的，非常适合管理类似 Context 的共享状态
//使用库创建
const [list, updateList] = useImmer(initialList); useImmer({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

const [person, setPerson] = useState({
  //useState hook创建一个可以更新的变量
  //更新对象数组
  // 组件通常需要根据交互改变屏幕上的内容。在表单中键入更新输入栏，
  // 当前的输入值、当前的图片、购物车。在 React 中，这种特定于组件的记忆被称为状态。

  // 你可以用 useState Hook 为组件添加状态。
  // Hook 是能让你的组件使用 React 功能的特殊函数（状态是这些功能之一）。
  // useState Hook 让你声明一个状态变量。它接收初始状态并返回一对值：当前状态，以及一个让你更新状态的设置函数。
  //State 是隔离且私有的 
  //State 是屏幕上组件实例内部的状态。换句话说，如果你渲染同一个组件两次，每个副本都会有完全隔离的 state！改变其中一个不会影响另一个。
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

function handleNameChange(e) {
  //状态可以持有任何类型的 JavaScript 值，
  // 包括对象。但你不应该直接改变你在 React 状态中持有的对象和数组。
  // 相反，当你想更新一个对象和数组时，你需要创建一个新的对象（或复制现有的对象），然后用这个副本来更新状态。
  // 通常情况下，你会使用 ... 展开语法来复制你想改变的对象和数组。例如，更新一个嵌套对象可以是这样的：
  //也可以使用useImmer库他自动提供副本
  setPerson({
    ...person,
    name: e.target.value
  });

}

export default function BucketList() {
  const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
  const [list, setList] = useState(
    initialList
  );

  function handleToggle(artworkId, nextSeen) {
    //更新数组
    // 数组是另一种可以存在状态中的可变 JavaScript 对象，
    // 应将其视为只读。就像对象一样，当你想更新存在状态中的数组时，你需要创建一个新数组（或者复制现有数组），然后用新数组来更新状态。
    setList(list.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
    //使用 Immer库
    updateList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }
}
function Square({ value, onSquareClick }) {
  //props声明记得带{};
  //props读取value
  //传递<Square value=1/>

  // function Avatar(props) {
  //  这种语法被称为 “解构”，等价于于从函数参数中读取属性： 
  //   let person = props.person;
  //   let size = props.size;
  //   // ...
  // }
  //   function Profile() {
  //   // ...禁止嵌套定义函数/组件
  //   //应定义在外层/顶层
  // }
  return (
    // <button onClick={e => {
    //   e.stopPropagation();
    //   onClick();
    // }}>
    //   {children}
    // </button>
    //return 多行的时候需要使用括号套起来
    //import Button from './文件名.js';
    // 声明带default的上面就不需要{}=>import Button from './文件名.js';
    // 否则需要{}=>import {Button} from './文件名.js';
    //首字母html标签小写 组件/函数大写

    <button className="square" onClick={onSquareClick}>
      {/* 变量使用{}
      如果变量包裹object那就{{}}例如内联style={{width:100px,height:100px}} */}
      {value}
    </button>
  );
}
function Item({ name, isPacked }) {
  //也可以使用数组
  const list = Array(6).fill('1');

  //使用条件进行渲染(控制流)
  //也可使用其他条件判断 三元运算符(三目)
  //useEffect(name);
  if (name) {
    //return null; 
    return list.map(m => <a>{m}</a>) //不用return 不用{包裹全部}
  }
  return (
    <li className="item">{name}</li>
  )
  //组件的纯粹性 可以使用props传的东西来更新界面但是不要去改变传过来的值
  //努力在你返回的 JSX 中表达你的组件逻辑。当你需要“改变事物”时，你通常希望在事件处理程序中进行。作为最后的手段，你可以使用 useEffect。
}
function add(value) {
  //小写是函数 
  return value * 2
}

export default function Board() {
  //可以放在单独的jsx/js文件然后在app.js文件中使用(导出)
  //default代表文件中的主要函数。
  //这会告诉你的 index.js 文件使用 Board  组件作为顶层组件
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [move, setMove] = useState(0);

  function handleClick(i) {
    const nextSquares = squares.slice();
    const moveIng = !move;
    nextSquares[i] = moveIng ? 'X' : 'Y';
    setMove(moveIng);
    setSquares(nextSquares);
  }

  return (
    <>
      {/* 不能连续相邻的<div>01</div><div>02</div>
    可以使用<>套在里面</> */}
      <div className="board-row">
        {/* Square组件/函数 父子传值 */}
        {/* value={squares[0]}父级传到子级 */}
        {/* onSquareClick={() => handleClick(0)}子级组件/函数定义的回调传回/响应父级 */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}


// Effect 的生命周期不同于组件。组件可以挂载、更新或卸载。
// Effect 只能做两件事：开始同步某些东西，然后停止同步它。如果 Effect 依赖于随时间变化的 props 和 state，这个循环可能会发生多次。
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
let ref = useRef(0);

function handleClick() {
  ref.current = ref.current + 1;
  alert('你点击了 ' + ref.current + ' 次!');
}

// 有些组件需要与外部系统同步。例如，可能需要根据 React 状态控制非 React 组件、设置服务器连接或在组件出现在屏幕上时发送分析日志。
// 与处理特定事件的事件处理程序不同，Effect 在渲染后运行一些代码。使用它将组件与 React 之外的系统同步。

// 多按几次播放/暂停，观察视频播放器如何与 isPlaying 属性值保持同步：

import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
// Effect 是 React 范式中的一种脱围机制。它们可以“逃出” React 并使组件和一些外部系统同步。如果没有涉及到外部系统
// （例如，需要根据一些 props 或 state 的变化来更新一个组件的 state），
// 不应该使用 Effect。移除不必要的 Effect 可以让代码更容易理解，运行得更快，并且更少出错。

// 响应式 Effect 的生命周期 
// Effect 的生命周期不同于组件。组件可以挂载、更新或卸载。Effect 只能做两件事：开始同步某些东西，然后停止同步它。
// 如果 Effect 依赖于随时间变化的 props 和 state，这个循环可能会发生多次。

// 这个 Effect 依赖于 roomId props 的值。props 是 响应值，这意味着它们可以在重新渲染时改变。注意，如果 roomId 更改，Effect 将会 重新同步（并重新连接到服务器）：
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>欢迎来到 {roomId} 房间！</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        选择聊天室：{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">所有</option>
          <option value="travel">旅游</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}


//自定义Hook
import { useState, useEffect } from 'react';

export function useDelayedValue(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;

}


// 总结对比（React 和 Angular）
// 功能	React	Angular
// HTTP 请求	axios 或 fetch	HttpClient
// 拦截器	axios.interceptors	HttpInterceptor
// 路由	react-router-dom	@angular/router
// 路由守卫	自定义实现，通常在路由中使用 Redirect	CanActivate 和 CanLoad 守卫


// 路由 也是Root
// import { Links } from "react-router";

// export default function Root() {
//   return (
//     <html>
//       <head>
//         <Links />
//       </head>

//       <body />
//     </html>
//   );
// }

import { createBrowserRouter } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "shows/:showId",
        Component: Show,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.id}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
]);

// Angular 的 FormGroup 和 React 的受控组件 都是为了方便管理表单控件的状态。
// React 中通过 useState（或 useReducer）管理表单控件的值，和 Angular 中 FormGroup 的作用相似，但 React 更加简洁和灵活。










