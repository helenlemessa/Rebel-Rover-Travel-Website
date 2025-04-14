import { Link } from "react-router-dom";



import Destination from "../components/DestinationCard/DestinationCard";
import TipsArticles from "../features/home/FeaturedDestinations";

const HeaderPackage = () => {
  return (
    <>
      <div className="main-package">
        <img
          src="https://s3-alpha-sig.figma.com/img/b24d/0303/93c2a12403f02df01bc7bad9186789ad?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fxshuS3K1ipPkMIVlZ7VH1l-vPEw7Eaoa7OGeQvXsRWyzibDUanNF4CXVflUuRm7btl2E3Am3kY~3BLEI7WdZnum68BuulD1vDEfW-Pu0kVgGyXuzXOQJComKfo57pmV9-wtwSiv81JdvGAkF9enVpazre6LsZlr4Zh1rdHJZtImDiTxXKnnq2I3nbiFrMs7otR-8-zcrSCGUEkXPP3YtvoA0~Go7IzBsMhdp1QdqLKMIbDVXpSSv~FqYUntsqfY5lHNisdAkWExPohKe4nyUXDlyrdj-cvOs7Ho2PmvT~PHD0RrmsHPkypGihq6UjHODB1~9ZMOgj5Lz2rr9Hs5Yg__"
          className="header-image"
        />
        <nav className="package-link">
          <Link to="/">Package</Link>

          <a href="#destination-section">Destination</a>
          <Link to="/booking-history">User Profile</Link>
        </nav>
        <div className="header-text">
          <h1 className="package-title">Travel Packages</h1>
          <span className="package-name">Home &gt; Package</span>
        </div>

        <div id="destination-section">
          <Destination />
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/9b5b/3fe2/a8e50166bd2fc32fadf555da1b1f1029?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=thp0oL7h5R74g7hlHWzLBh4U9ZYKlxDKUMou7rEVjjNwBYUrsCMrEbi-Ls8uEWVL5RSeLWzJBzJ3ktvBm~8bxgPmtAww905OChIOqKwNNHDMsN~wBHTBUVWfGgP2l~~Kvs2SI~yTz3TJ9x6zRr-iMFIGIfPRwAG2MfnjmKAXrqGxPo-~q00kqpSoGNy9UAm3uN5tyOUA7l98KcVTMWDxmOuW~5bCH5OjPyuuaAVI7SC9ChlOzaCMdym7b~AFdYpfUEqG4IAnQhOZNfvfeaZlAqXwaLtzGyRGotggmnJGcYSmSK1deF7Ywuyi5s0k-8Evfr5aesAme26SZYYlPU~DXw__"
          alt="My Image"
          style={{
            width: "100%",
            height: "800px",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        />
        <div>
          <TipsArticles />
        </div>
      </div>
    </>
  );
};

export default HeaderPackage;
