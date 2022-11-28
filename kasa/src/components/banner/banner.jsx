import "../banner/banner.css";

function Banner({ src, title, alt }) {
  return (
    <section className="banner">
      <div className="hero">
        <img src={src} alt={alt} className="img" />
        <h1 className="banner_title">{title}</h1>
      </div>
    </section>
  );
}

export default Banner;
