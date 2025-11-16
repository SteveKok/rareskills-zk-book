import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description='Description will go into a meta tag in <head />'
        >
            <main style={{ margin: '2rem' }}>
                <h1>Personal Notebook</h1>
                <p>
                    This website is plainly to keep my record of my learnings
                    and thoughts while going through the "ZK Book" on&nbsp;
                    <a href='https://rareskills.io/zk-book'>
                        https://rareskills.io/zk-book
                    </a>
                    .
                </p>
                <p>
                    The answer recorded in this website is the answer according
                    to my current understanding. There might be mistakes and
                    inaccuracies.
                </p>
            </main>
        </Layout>
    );
}
