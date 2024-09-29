import Head from 'next/head';
import {
  Newspaper,
  Package,
  Recycle,
  Lightbulb,
  Coins,
  Cog,
  Wine,
  Cpu,
  Shirt,
  Battery,
  TreePine,
  Disc,
} from 'lucide-react';

const scrapRates = [
  { material: 'Paper', rate: 12, icon: Newspaper },        // Rate in INR
  { material: 'Cardboard', rate: 8, icon: Package },       // Rate in INR
  { material: 'Plastic', rate: 17, icon: Recycle },        // Rate in INR
  { material: 'Aluminum', rate: 42, icon: Lightbulb },     // Rate in INR
  { material: 'Copper', rate: 208, icon: Coins },          // Rate in INR
  { material: 'Steel', rate: 13, icon: Cog },              // Rate in INR
  { material: 'Glass', rate: 4, icon: Wine },              // Rate in INR
  { material: 'Electronics', rate: 83, icon: Cpu },        // Rate in INR
  { material: 'Textiles', rate: 6, icon: Shirt },          // Rate in INR
  { material: 'Rubber', rate: 10, icon: Disc },            // Rate in INR
  { material: 'Wood', rate: 2.5, icon: TreePine },         // Rate in INR
  { material: 'Batteries', rate: 62, icon: Battery },      // Rate in INR
];

export default function ScrapRates() {
  return (
    <>
      <Head>
        <title>Scrap Rates | ScrapSmart</title>
        <meta
          name="description"
          content="Current rates for various scrap materials"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            Current Scrap Rates
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {scrapRates.map((item) => (
              <div
                key={item.material}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-xl font-semibold text-green-700">
                    {item.material}
                  </h2>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{item.rate.toFixed(2)}/kg
                </p>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-green-600 text-white text-center py-4 mt-8">
          <p>&copy; 2023 ScrapSmart. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}