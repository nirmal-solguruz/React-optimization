import cycle from "../assets/cycle.webp";

export default function OptimizedImage() {
  return (
    <div>
      <h3>Optimized WebP Image</h3>
      <img
        src={cycle}
        alt="Optimized Cycle"
        width={800}
        height={400}
        loading="lazy"
      />
    </div>
  );
}
