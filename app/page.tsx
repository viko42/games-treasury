import CommissionChart from "./wildforest/charts/commission-chart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-gray-800 p-4">
        <div className="max-w-[1600px] mx-auto">
          <nav className="flex justify-between items-center">
            <div className="font-bold text-xl">MAVIS ANALYTICS</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                All games
              </a>
              <a href="#" className="hover:text-gray-300">
                Wild Forest
              </a>
            </div>
            <input
              type="text"
              placeholder="Search Games"
              className="bg-gray-700 px-4 py-2 rounded-md"
            />
          </nav>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto">
        {/* Main Header Image */}
        <section className="mb-5 p-4">
          <div className="relative h-96">
            <Image
              src="https://cdn.skymavis.com/mavis-store/wild-forest/top-banner.png"
              alt="Wild Forest"
              layout="fill"
              objectFit="cover"
              className="rounded-[50px]"
            />
            <div className="absolute bottom-4 left-4 mb-[24px] ml-[52px]">
              <h1 className="text-4xl font-bold">Wild Forest</h1>
              <p>by Zillion Whales</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                View analytics
              </button>
            </div>
          </div>
        </section>
        {/* Apply for NFT Listing or Launchpad Section */}
        <section className="mb-5 p-4">
          <div className="relative h-96">
            <Image
              src="https://cdn.skymavis.com/mavis-mkp/statics/images/apply-banner-3.jpg"
              alt="Apply for NFT Listing or Launchpad"
              layout="fill"
              objectFit="cover"
              className="rounded-[50px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <div className="text-sm font-semibold mb-2">
                Wild Forest Treasury
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Analytics about the fees Wild Forest have from Mavis Marketplace
              </h2>
              {/* <p className="mb-6">Leverage our open marketplace and audience to bring your collection to the next level of growth</p> */}
              <p className="mb-6">
                About 300,000 sales per months and 2,2 millions dollars of
                volume
              </p>
              <p className="mb-6">5% fees on every sales.</p>
              {/* <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">Apply now</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Learn more</button>
            </div> */}
            </div>
          </div>
        </section>
        {/* Commission Chart */}
        <section className="mb-5 p-4">
          <h2 className="text-2xl font-bold mb-4">Commission Chart</h2>
          <CommissionChart />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center">
            <p>© 2024 Sky Mavis</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
              <a href="#" className="hover:text-gray-300">
                Terms of Use
              </a>
              <a href="#" className="hover:text-gray-300">
                Team
              </a>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
