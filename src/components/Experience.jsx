import { Environment, OrbitControls } from "@react-three/drei";
import { Computer } from "../assets/Computer";
import { useControls } from "leva";
import { SoftShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
  useFrame((state) => {
    state.camera.lookAt(0, 1, 0);
    state.camera.updateProjectionMatrix();
  });
  const { enabled, ...config } = useControls({
    enabled: true,
    size: { value: 25, min: 0, max: 100 },
    focus: { value: 0, min: 0, max: 2 },
    samples: { value: 10, min: 1, max: 20, step: 1 },
  });
  return (
    <>
      <OrbitControls />
      {enabled && <SoftShadows {...config} />}

      {/* <Environment preset="sunset" /> */}
      {/* <meshNormalMaterial /> */}
      <directionalLight
        castShadow
        position={[0, 8, 5]}
        intensity={1.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[10, 10, 10]} intensity={0.5} /> */}
      <Computer />
    </>
  );
};
