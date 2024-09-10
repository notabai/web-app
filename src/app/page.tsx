import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <Image src="/logo.png" alt="No Tab Logo" width={300} height={300} />
      <div className="text-2xl mt-12">
        Use the internet without a browser. Let AI agents do the work for you.
      </div>
      <div className="text-2xl mt-4">Coming soon...</div>
    </div>
  );
}
