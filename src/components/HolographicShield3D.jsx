import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HolographicShield3D({ isActive = true }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Outer Icosahedron Shield Wireframe
    const outerGeom = new THREE.IcosahedronGeometry(2.1, 2);
    const outerMat = new THREE.MeshPhongMaterial({
      color: isActive ? 0x00ff87 : 0xff3366,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      emissive: isActive ? 0x00ff87 : 0xff3366,
      emissiveIntensity: 0.6
    });
    const outerShield = new THREE.Mesh(outerGeom, outerMat);
    rootGroup.add(outerShield);

    // 2. Middle Dodecahedron Lattice
    const midGeom = new THREE.DodecahedronGeometry(1.6, 1);
    const midMat = new THREE.MeshBasicMaterial({
      color: isActive ? 0x00f2fe : 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const midShield = new THREE.Mesh(midGeom, midMat);
    rootGroup.add(midShield);

    // 3. Inner Glowing Energy Core
    const coreGeom = new THREE.SphereGeometry(1.0, 32, 32);
    const coreMat = new THREE.MeshPhongMaterial({
      color: isActive ? 0x00f2fe : 0xff3366,
      transparent: true,
      opacity: 0.35,
      emissive: isActive ? 0x00d2ff : 0xe11d48,
      emissiveIntensity: 0.9,
      shininess: 100
    });
    const coreSphere = new THREE.Mesh(coreGeom, coreMat);
    rootGroup.add(coreSphere);

    // 4. Orbital Cyber Rings
    const ringGeom = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isActive ? 0x00ff87 : 0xef4444,
      transparent: true,
      opacity: 0.6
    });
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeom, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    rootGroup.add(ring2);

    // 5. Floating Satellite Nodes
    const nodeGeom = new THREE.SphereGeometry(0.045, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: isActive ? 0x00ff87 : 0xff3366
    });
    const nodeCount = 42;
    const nodesGroup = new THREE.Group();
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.45 + (Math.random() - 0.5) * 0.3;
      node.position.setFromSphericalCoords(radius, phi, theta);
      nodesGroup.add(node);
    }
    rootGroup.add(nodesGroup);

    // Lighting
    const pointLight = new THREE.PointLight(isActive ? 0x00ff87 : 0xff3366, 2, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 1.5, 20);
    cyanLight.position.set(-5, -5, 5);
    scene.add(cyanLight);

    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.5);
    scene.add(ambientLight);

    // Mouse Interaction
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.4;
      mouse.targetY = y * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 400;
      height = container.clientHeight || 400;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tilt parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      rootGroup.rotation.y = elapsedTime * 0.3 + mouse.x;
      rootGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + mouse.y;

      // Internal counters & breathing pulses
      const pulse = Math.sin(elapsedTime * 2.5) * 0.05 + 1;
      outerShield.scale.setScalar(pulse);
      coreSphere.scale.setScalar(Math.cos(elapsedTime * 3) * 0.08 + 1);

      midShield.rotation.y = -elapsedTime * 0.4;
      midShield.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.5;
      ring2.rotation.z = -elapsedTime * 0.4;

      nodesGroup.rotation.y = -elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isActive]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
      {/* Three.js Container */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />
      
      {/* Holographic HUD Overlay Circles */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className={`w-72 h-72 rounded-full border border-dashed transition-colors duration-500 ${
          isActive ? 'border-[#00ff87]/20 animate-spin' : 'border-red-500/20'
        }`} style={{ animationDuration: '30s' }} />
        <div className={`w-88 h-88 rounded-full border border-dotted transition-colors duration-500 ${
          isActive ? 'border-[#00f2fe]/20 animate-spin' : 'border-amber-500/20'
        }`} style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
      </div>
    </div>
  );
}
