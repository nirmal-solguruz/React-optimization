import { Suspense, lazy } from "react";
import { add } from "./utils/mathGood";
import { getChunk } from "./utils/goodImport";
import OptimizedImage from "./components/OptimizedImage";

const Chart = lazy(() => import("./components/Chart"));

export default function App() {
  console.log("Add:", add(2, 3));
  console.log("Chunk:", getChunk());

  return (
    <div style={{ padding: 20 }}>
      <h1>Vite Bundle Optimization Demo</h1>

      <OptimizedImage />

      <Suspense fallback={<p>Loading Chart...</p>}>
        <Chart />
      </Suspense>
    </div>
  );
}
