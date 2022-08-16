export default function Hero(props) {
  const { hero_title, hero_text } = props;
  return (
    <div className="hero_section">
      <h1 className="hero_title">{hero_title}</h1>
      <p className="hero_text">{hero_text}</p>
    </div>
  );
}
