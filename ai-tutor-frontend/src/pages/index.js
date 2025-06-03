import Head from 'next/head';
import ChatBox from '../components/ChatBox';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AI Tutor System</title>
        <meta name="description" content="Multi-Agent AI Tutor using FastAPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-8 px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          AI Tutor Multi-Agent System
        </h1>

        <p className="text-md text-gray-600 mb-8 text-center max-w-xl">
          Ask any question related to Math, Physics, and more. The Tutor Agent will route it to the right expert!
        </p>

        <ChatBox />
      </main>
    </Layout>
  );
}