import { Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshTransmissionMaterial, Environment } from "@react-three/drei";


import FloatingShapes from "../FloatingShapes";
import links from "../../utils/links";
import csiLogo from "../../assets/team/committees/csi__logo.png";
import codersClubLogo from "../../assets/team/committees/codersclub.png";
import tpcLogo from "../../assets/team/committees/WhiteRAIT.png";

// 3D Cube Component
const AnimatedCube = () => {
  const meshRef = useRef();

  // Slow auto-rotation when not being interacted with
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      {/* Silver metallic material */}
      <meshStandardMaterial
        color="#C0C0C0"
        metalness={0.9}
        roughness={0.2}
        envMapIntensity={1.5}
      />
      
      {/* Wireframe overlay for extra detail */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color="#e3efee" transparent opacity={0.3} />
      </lineSegments>
    </mesh>
  );
};

// 3D Scene Component
const CubeScene = () => {
  return (
    <div className="absolute right-4 md:right-10 top-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Adaptive pixel ratio for performance
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00D4FF" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
            color="#6B46C1"
          />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* The Cube */}
          <AnimatedCube />

          {/* Orbital Controls - interactive rotation */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { eventLink } = links;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Floating 3D shapes */}
      <FloatingShapes />

      {/* 3D Cube - positioned absolutely */}
      <CubeScene />

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none"
      >
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium">
            24 Hour Hackathon • March 2026
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="block">AAROHAN 1.0</span>
          <span className="gradient-text neon-text">HACKATHON</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Bringing together creativity, technology, and purpose to solve real-world challenges.
          Rise with Code. Lead with Innovation
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 pointer-events-auto"
        >
          <motion.a
            href={eventLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-4 flex items-center gap-2"
            target="_blank"
          >
            Register
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Organizer logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <span className="text-muted-foreground text-sm">Organized by</span>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            {/* CSI */}
            <div className="px-4 py-3 flex items-center justify-center">
              <img
                src={csiLogo}
                alt="CSI RAIT"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>

            {/* Coders Club */}
            <div className="px-4 py-3 flex items-center justify-center">
              <img
                src={codersClubLogo}
                alt="Coders Club RAIT"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>

            {/* TPC */}
            <div className="px-4 py-3 flex items-center justify-center">
              <img
                src={tpcLogo}
                alt="Training & Placement Cell RAIT"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;