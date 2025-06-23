import '../styles/Loader.css';

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
      <div className="loader-text">Cargando...</div>
    </div>
  );
}