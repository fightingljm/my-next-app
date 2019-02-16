# NEXT.js

## Hello Next.js

### 安装依赖

```bash
yarn add react react-dom next
```

### package.json 配置启动

```json
{
  "scripts": {
    "dev": "next -p 3006",
    "build": "next build",
    "start": "next start"
  }
}
```

### 运行

```bash
yarn dev
```

## Next路由

```js
// /pages/index.js
import React, { Fragment } from 'react';
import Link from 'next/link';

const Home = () => (
    <Fragment>
        <h1>我是Next的首页</h1>
        <Link href='/userList'>
            <a>用户列表页</a>
        </Link>
    </Fragment>
);

export default Home;
```

```js
// /pages/userList.js
const UserList = () => (
    <h2>我是用户列表页</h2>
);

export default UserList;
```