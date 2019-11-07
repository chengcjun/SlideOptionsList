# SlideOptionsList

## USE

```
import React from 'react';
import ReactDOM from 'react-dom';

import SlideOptionsList from './SlideOptionsList';
const children = [
  {title: <div>壹</div>, callback: () => console.log('11111111')},
  {title: '貳', callback: () => {}},
  {title: '叁', callback: () => {}},
  {title: '肆', callback: () => {}},
  {title: '伍', callback: () => {}}
]


// top & right 定位
// spaceTop 吸顶间距
ReactDOM.render(<div style={{height: '9000px'}}><SlideOptionsList top={'10vh'} children={children}/></div>, document.getElementById('app'));
```

## TODO
配置方向及其他样式
