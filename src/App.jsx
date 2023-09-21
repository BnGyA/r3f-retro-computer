import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
