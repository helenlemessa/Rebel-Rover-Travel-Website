import React, { useState } from "react";

const articles = [
  {
    id: 1,
    title: "9 Popular Travel Destination on Sale in 2022",
    description:
      "Explore some of the most popular travel destinations now available at discounted rates.",
    fullDescription:
      "Explore some of the most popular travel destinations now available at discounted rates. Take advantage of seasonal deals and experience unique cultures, scenic landscapes, and unforgettable memories without breaking the bank.",
    category: "Perfect | Tips",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/c32a/cf6f/5b777ede302f8f65765b50aeab90d44f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ku8pJ9T1GYVpQz-Wkgtsn4K69BY-yMCaeyHDyqKnnxfiqttrQgbTNBM1G64UaqdRfkSjYh7ke1pq1GnWPBTG2-V6Kks7etyVRDI8UhOXSouQOdLa~wB8iyzWXko7N53FnYmGe-nk8fWn9p8gH~YBLGJcZlywgEqLEJe4zDNhgQ3u-lCzQvIDmESw~4SxadfOrHk0gNHogLAWGTsEi-ffFWOwE6F0R4ybHZYxvJf4sOJ1Y93MTBGD3jYo-l0JfnuWYUaNHIYX6s8kjgogxcGjfK-cFWqyvWaiNEjltKz9nuSQZBU2gz7SurumJddf65MRaGNhJMNvqluhjNCdMkQbww__",
  },
  {
    id: 2,
    title: "How Are We Going to Travel in 2022",
    description:
      "Discover the new trends and ways people will be traveling this year.",
    fullDescription:
      "Discover the new trends and ways people will be traveling this year. From sustainable travel and remote work trips to flexible bookings and off-the-beaten-path destinations, the way we explore the world is evolving fast.",
    category: "Tips | Travel",
  },
  {
    id: 3,
    title: "Travel Stories For Now and the Future",
    description:
      "Get inspired by real travel stories that will spark your wanderlust.",
    fullDescription:
      "Get inspired by real travel stories that will spark your wanderlust. These accounts of adventure, culture, and connection highlight how travel has the power to shape our present and future perspectives.",
    category: "Stories | Tips",
  },
  {
    id: 4,
    title: "Why Traveling Solo is Good for You",
    description:
      "Discover the beauty of traveling alone and connecting with new places",
    fullDescription:
      "Discover the beauty of traveling alone and connecting deeply with new places and yourself. It allows for flexibility, introspection, and personal growth like no other experience.",
    category: "Solo | Advice",
  },
  {
    id: 5,
    title: "Best Packing Hacks for Smart Travelers",
    description:
      "Efficient packing is a game-changer. Here are smart tips to travel light yet prepared.",
    fullDescription:
      "Efficient packing is a game-changer. Learn how to roll your clothes, use packing cubes, and choose versatile items that save space while keeping you organized during your travels.",
    category: "Hacks | Gear",
  },
];

const uniqueArticles = articles.filter(
  (article, index, self) => index === self.findIndex((a) => a.id === article.id)
);

const TipsArticles = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState([]);

  const handleViewToggle = () => {
    setShowAll((prev) => !prev);
  };

  const handleReadMore = (id) => {
    setExpandedArticles((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredArticles = uniqueArticles.filter((_, index) => index !== 2);
  const displayedArticles = showAll
    ? filteredArticles
    : filteredArticles.slice(0, 2);

  return (
    <section className="tips-section">
      <div className="tips-header">
        <div>
          <h2 className="tips-title">Tips & Article</h2>
          <p className="tips-subtitle">
            Explore useful tips and inspiring travel articles to help you make
            the most of your journeys.
          </p>
        </div>
        <button
          className="view-more-btn responsive-btn"
          onClick={handleViewToggle}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

      <div className="tips-content">
        <div className="left-column">
          {displayedArticles.map((article) => {
            const isExpanded = expandedArticles.includes(article.id);
            return (
              <div className="card" key={article.id}>
                <p className="card-category">{article.category}</p>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-desc">
                  {isExpanded
                    ? article.fullDescription
                    : `${article.description}...`}
                </p>
                <button
                  className="read-more-btn responsive-btn"
                  onClick={() => handleReadMore(article.id)}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="right-column">
          {uniqueArticles[0]?.imgUrl && (
            <img
              src={uniqueArticles[0].imgUrl}
              alt="travel"
              className="main-image"
            />
          )}

          {uniqueArticles[2] && (
            <div className="card overlay-card">
              <p className="card-category">{uniqueArticles[2].category}</p>
              <h3 className="card-title">{uniqueArticles[2].title}</h3>
              <p className="card-desc">
                {expandedArticles.includes("overlay")
                  ? uniqueArticles[2].fullDescription
                  : `${uniqueArticles[2].description}...`}
              </p>
              <button
                className="read-more-btn responsive-btn"
                onClick={() =>
                  setExpandedArticles((prev) =>
                    prev.includes("overlay")
                      ? prev.filter((i) => i !== "overlay")
                      : [...prev, "overlay"]
                  )
                }
              >
                {expandedArticles.includes("overlay")
                  ? "Read Less"
                  : "Read More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TipsArticles;

