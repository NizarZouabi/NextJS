import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center max-h-screen py-48">
      <div className="max-w-5xl font-mono text-sm text-center">
        <h1 className="text-2xl font-bold pb-12">Welcome User!</h1>
        <Link href="/home"><button className="font-semibold border border-1 border-purple-500 rounded py-2 px-4 bg-purple-700 hover:bg-purple-600 outline-none">Review</button></Link>
      </div>
    </main>
  );
}
