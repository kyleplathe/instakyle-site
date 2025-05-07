export default function Home() {
    return <h1>Home</h1>;
  }import { Link } from 'react-router-dom';
import './Home.css'; // optional if you want to separate styling

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="headline">Repair Your World</h1>
        <p className="subtext">Trusted by Minnesotans since 2016. From cracked screens to micro-soldering magic, we've got your tech covered.</p>
        <Link to="/book" className="cta-button">Book a Repair</Link>
      </section>

      <section className="brands">
        <h2>We Fix</h2>
        <div className="brand-grid">
          <div className="brand-card">iPhone</div>
          <div className="brand-card">iPad</div>
          <div className="brand-card">MacBook</div>
          <div className="brand-card">Apple Watch</div>
          <div className="brand-card">Samsung Galaxy</div>
          <div className="brand-card">Google Pixel</div>
          <div className="brand-card">PlayStation</div>
          <div className="brand-card">Xbox</div>
          <div className="brand-card">Nintendo Switch</div>
        </div>
      </section>
    </div>
  );
}