
import { motion } from "framer-motion";
import * as THREE from "three";
import React, { useRef, Suspense } from "react";
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
    <Canvas className='-z-10 w-[75vw] h-[75vh] border' camera={{ fov: 12, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};
function CenterImg() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{delay: 0.1, duration:0.5}}
     
      animate={{ opacity: 1 }}
      className="flex w-full h-screen justify-center items-center flex-col"
    >
      <Scene/>
      {/* <img
        className="md:w-3/4 md:h-3/4 object-contain"
        src="https://static.wixstatic.com/media/21b326_4367d433974440088fb267ae3aee08a3~mv2_d_4676_4679_s_4_2.jpg/v1/fill/w_934,h_871,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/21b326_4367d433974440088fb267ae3aee08a3~mv2_d_4676_4679_s_4_2.jpg"
      /> */}
      <h2 className="absolute font-light text-center text-white text-shadow text-xl p-4">
       <span className='text-black'> Nick Yo</span>zov, Full Stack Developer & UI/UX D<span className='text-black'>
         esigner
         </span>
      </h2>
    </motion.div>
  );
}

export default CenterImg;
