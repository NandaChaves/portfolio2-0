import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1} rotationIntensity={0} floatIntensity={1}>
      <mesh castShadow receiveShadow scale={2.5} position={position}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading />
          <icosahedronGeometry args={[1, 1]} />
        <Decal position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal} />
      </mesh>
    </Float>
  );
};

export default Ball;