import React, { Fragment } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => (
    <Layout>
        <Fragment>
            <h1>我是Next的首页</h1>
            <Link href='/userList'>
                <Button type='primary'>用户列表页</Button>
            </Link>
        </Fragment>
    </Layout>
);

export default Home;