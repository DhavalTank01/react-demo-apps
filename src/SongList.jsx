const Sdata = [
    {
      id: 0,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1622508521/srch_universalmusic_00602438379347-INUM72100032.jpg",
      title: "Baarish Ban Jaana",
      category: "Hindi",
      link: "https://wynk.in/u/eo5anhu8I",
    },
    {
      id: 1,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1625359129/srch_universalmusic_00602438554621-INUM72100040.jpg",
      title: "Filhaal2 Mohabbat",
      category: "Hindi",
      link: "https://wynk.in/u/L03gCC7tM",
    },
    {
      id: 2,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431780997/1615215618/srch_hungama_54811256.jpg",
      title: "Dil Tod Ke",
      category: "Hindi",
      link: "https://wynk.in/u/wmNfuil4l",
    },
    {
      id: 3,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616553143438/1613558709/srch_believe_A10320WT038019607U.jpg",
      title: "Rabba Mehar Kari",
      category: "Hindi",
      link: "https://wynk.in/u/WVR0HbMOG",
    },
    {
      id: 4,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1542503550/srch_universalmusic_00602577273605-INUM71800036.jpg",
      title: "Jo Tu Na Mila",
      category: "Hindi",
      link: "https://wynk.in/u/tfUPUoTFM",
    },
    {
      id: 5,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431765260/1615224016/srch_hungama_51227840.jpg",
      title: "Malang (Title Track)",
      category: "Hindi",
      link: "https://wynk.in/u/d9giCeOPl",
    },
    {
      id: 6,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1566549349/49075853.jpg",
      title: "Pachtaoge",
      category: "Hindi",
      link: "https://wynk.in/u/m7TUJXpGY",
    },
    {
      id: 7,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009298868Y.jpg",
      title: "Shayad",
      category: "Hindi",
      link: "https://wynk.in/u/hn1yOKQ7T",
    },
    {
      id: 8,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1616133174/srch_universalmusic_00602435848983-USUM72102636.jpg",
      title: "Peaches",
      category: "International Top Hits",
      link: "https://wynk.in/u/cHvSGmUFr",
    },
    {
      id: 9,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0008969041G.jpg",
      title: "On My Way",
      category: "International Top Hits",
      link: "https://wynk.in/u/uUpTiH3fs",
    },
    {
      id: 10,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1599607204/srch_universalmusic_00602557056273-QMZSY1600015.jpg",
      title: "Let Me Love You",
      category: "International Top Hits",
      link: "https://wynk.in/u/GgQv9VLZj",
    },
    {
      id: 11,
      imgsrc:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0007917812A.jpg",
      title: "Closer",
      category: "International Top Hits",
      link: "https://wynk.in/u/Uf9jIxP5P",
    },
  ];
  
  // child components
  const Headings = (props) => {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="title"
      >
        <h3>{props.title}</h3>
      </a>
    );
  };
  
  function Card(props) {
    return (
      <>
        <div className="card">
          <div className="cardimage">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <img src={props.imgsrc} alt={props.title} />
            </a>
          </div>
          <div className="cardinfo">
            <span className="category">{props.category} Songs</span>
            <Headings link={props.link} title={props.title} />
            <a
              className="cardlink"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              play now
            </a>
          </div>
        </div>
      </>
    );
  }
  
  const App = () => {
    return (
      <>
        <div className="app_title">
          <p> list of best songs</p>
        </div>
        <div className="cards">
          {Sdata.map((val) => {
            return (
              <Card
                key={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                category={val.category}
                link={val.link}
              />
            );
          })}
        </div>
      </>
    );
  };
  
  export default App;
  // export { Card, Sdata };
  