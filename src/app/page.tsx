import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>This is the Home Page. Click on the Name button if you want to navigate to Name Page.</div>
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/Name"}>Name</Link>
    </main>
    </>
  );
}
