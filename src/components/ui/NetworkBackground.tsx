import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create nodes (representing chains)
    const nodeCount = 8;
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x4ADE80,
      transparent: true,
      opacity: 0.6,
    });

    // Position nodes in a circular pattern
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 12;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 5;
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(x, y, z);
      nodes.push(node);
      nodePositions.push(new THREE.Vector3(x, y, z));
      scene.add(node);
    }

    // Add center node (Hyperliquid)
    const centerNode = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ 
        color: 0x4ADE80,
        transparent: true,
        opacity: 0.8,
      })
    );
    scene.add(centerNode);
    nodePositions.push(new THREE.Vector3(0, 0, 0));

    // Create particles for flow effect
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { start: THREE.Vector3; end: THREE.Vector3; progress: number; speed: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Random start node (outer) and end at center
      const startNodeIndex = Math.floor(Math.random() * nodeCount);
      const startPos = nodePositions[startNodeIndex].clone();
      const endPos = new THREE.Vector3(0, 0, 0);
      
      const progress = Math.random();
      const currentPos = startPos.clone().lerp(endPos, progress);
      
      particlePositions[i * 3] = currentPos.x;
      particlePositions[i * 3 + 1] = currentPos.y;
      particlePositions[i * 3 + 2] = currentPos.z;
      
      particleVelocities.push({
        start: startPos,
        end: endPos,
        progress,
        speed: 0.002 + Math.random() * 0.003,
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4ADE80,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create connection lines
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4ADE80, 
      transparent: true, 
      opacity: 0.1,
    });

    for (let i = 0; i < nodeCount; i++) {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        nodePositions[i],
        new THREE.Vector3(0, 0, 0),
      ]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }

    // Glow ring around center
    const ringGeometry = new THREE.RingGeometry(1.5, 1.8, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x4ADE80, 
      transparent: true, 
      opacity: 0.2,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    // Animation
    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate scene slowly
      scene.rotation.z = time * 0.05;
      scene.rotation.x = Math.sin(time * 0.2) * 0.1;

      // Animate particles flowing to center
      const positions = particleGeometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        vel.progress += vel.speed;
        
        if (vel.progress >= 1) {
          // Reset particle to a new starting position
          const startNodeIndex = Math.floor(Math.random() * nodeCount);
          vel.start = nodePositions[startNodeIndex].clone();
          vel.progress = 0;
        }
        
        const currentPos = vel.start.clone().lerp(vel.end, vel.progress);
        positions[i * 3] = currentPos.x;
        positions[i * 3 + 1] = currentPos.y;
        positions[i * 3 + 2] = currentPos.z;
      }
      
      particleGeometry.attributes.position.needsUpdate = true;

      // Pulse nodes
      nodes.forEach((node, i) => {
        const scale = 1 + Math.sin(time * 2 + i) * 0.2;
        node.scale.setScalar(scale);
        (node.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 2 + i) * 0.2;
      });

      // Pulse center
      const centerScale = 1 + Math.sin(time * 3) * 0.1;
      centerNode.scale.setScalar(centerScale);

      // Pulse ring
      ring.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
      (ring.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(time * 2) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        opacity: 0.4,
        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)',
      }}
    />
  );
}
