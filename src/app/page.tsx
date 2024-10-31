import ScrollBanner from "@/components/ScrollBanner";


export default function Home() {
  return (
    <>
      <ScrollBanner />
      <div className="p-8">
        <div className="font-base">
          <h1 className="text-2xl font-heading sm:text-4xl">Mashhood Manzoor</h1>
          <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
          <div className="mt-8 text-base sm:text-lg">
            <p>Hi, my name is Mashhood. I'm a software engineer based in London.</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}