
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef, Suspense, useEffect } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    void main() {
      float wave = vWave * 0.5;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
"https://images.pexels.com/photos/2317711/pexels-photo-2317711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas className='' camera={{ fov: 12, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};
function CenterImg({title}) {
  useEffect(() => {

    document.title = title
   
  }, [title])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{delay: 0.1, duration:0.5}}
     
      animate={{ opacity: 1 }}
      className="flex w-full h-screen justify-center items-center duration-150 flex-col dark:bg-black"
    >
      <Scene/>
    
      <h2 className="absolute font-light text-center text-white text-shadow text-xl p-4">
       <span className='text-black dark:text-white'> Nick Yo</span>zov, Full Stack Developer & UI/UX D<span className='text-black dark:text-white'>
         esigner
         </span>
      </h2>
    </motion.div>
  );
}

export default CenterImg;
