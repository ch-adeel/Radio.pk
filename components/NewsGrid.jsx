import React from "react";

const NewsGrid = () => {
  const topNews = [
    {
      title: "President, PM laud Pakistan Navy's bravery, professionalism",
      image: "https://dummyimage.com/300x200/059669/ffffff?text=Navy+Bravery",
      category: "National",
    },
    {
      title: "Economic indicators show positive growth trajectory",
      image:
        "https://dummyimage.com/300x200/2563eb/ffffff?text=Economic+Growth",
      category: "Economy",
    },
    {
      title: "Educational reforms implementation across provinces",
      image:
        "https://dummyimage.com/300x200/dc2626/ffffff?text=Education+Reform",
      category: "Education",
    },
    {
      title: "Infrastructure development projects gaining momentum",
      image: "https://dummyimage.com/300x200/16a34a/ffffff?text=Infrastructure",
      category: "Development",
    },
  ];

  const nationalNews = [
    {
      title: "Parliamentary session discusses key legislation",
      image:
        "https://dummyimage.com/300x200/7c3aed/ffffff?text=Parliament+Session",
      category: "Politics",
    },
    {
      title: "Healthcare initiatives launched in rural areas",
      image:
        "https://dummyimage.com/300x200/0ea5e9/ffffff?text=Healthcare+Rural",
      category: "Health",
    },
    {
      title: "Agricultural sector receives new technology support",
      image:
        "https://dummyimage.com/300x200/f59e0b/ffffff?text=Agriculture+Tech",
      category: "Agriculture",
    },
    {
      title: "Climate change adaptation measures implemented",
      image: "https://dummyimage.com/300x200/10b981/ffffff?text=Climate+Change",
      category: "Environment",
    },
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-green-600 inline-block">
              Top News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topNews.map((news, index) => (
              <article key={index} className="news-card">
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs rounded">
                    {news.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">2 hours ago</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-4 border-green-600 inline-block">
              National
            </h2>
          </div>

          <div className="space-y-4">
            {nationalNews.map((news, index) => (
              <article key={index} className="news-card">
                <div className="flex">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-24 h-20 object-cover rounded-l-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 flex-1">
                    <span className="text-xs text-green-600 font-medium">
                      {news.category}
                    </span>
                    <h4 className="font-medium text-sm text-gray-800 mt-1 hover:text-green-600 cursor-pointer transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2">1 hour ago</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-3">Weather</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Islamabad</p>
                  <p className="text-2xl font-bold text-blue-600">28°C</p>
                </div>
                <div className="text-blue-500">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Live Radio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Podcast Archive
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Program Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
