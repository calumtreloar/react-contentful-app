import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni atque provident, corporis animi, debitis
            vel illum, exercitationem voluptate sed voluptatibus esse libero quam quas ut consectetur sit dolore iste.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
