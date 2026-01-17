import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Gradient-inspired color palette
const COLORS = {
  primary: 0x4ADE80,      // Main green
  secondary: 0x22C55E,    // Darker green
  bright: 0x86EFAC,       // Bright green
  dim: 0x166534,          // Very dark green
};

export function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;

    const container = containerRef.current;
    
    // Scene with subtle fog for depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.012);
    
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // ═══════════════════════════════════════════════════════════════
    // CENTRAL CORE - Smooth rotating structure
    // ═══════════════════════════════════════════════════════════════
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing core
    const innerCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.0, 2),
      new THREE.MeshBasicMaterial({ 
        color: COLORS.bright, 
        transparent: true, 
        opacity: 0.85 
      })
    );
    coreGroup.add(innerCore);

    // Wireframe shell
    const wireShell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.4, 1),
      new THREE.MeshBasicMaterial({ 
        color: COLORS.primary, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.4 
      })
    );
    coreGroup.add(wireShell);

    // Smooth orbital rings
    const rings: THREE.Mesh[] = [];
    [2.0, 2.6, 3.2].forEach((radius, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.02, 32, 100),
        new THREE.MeshBasicMaterial({ 
          color: COLORS.primary, 
          transparent: true, 
          opacity: 0.35 - i * 0.08 
        })
      );
      ring.rotation.x = Math.PI / 2 + i * 0.25;
      ring.rotation.y = i * 0.4;
      rings.push(ring);
      coreGroup.add(ring);
    });

    // Soft glow layers
    [1.8, 2.8, 4.0].forEach((radius, i) => {
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 32, 32),
        new THREE.MeshBasicMaterial({ 
          color: COLORS.primary, 
          transparent: true, 
          opacity: 0.04 / (i + 1) 
        })
      );
      coreGroup.add(glow);
    });

    // ═══════════════════════════════════════════════════════════════
    // ORBITAL NODES - Smooth elliptical orbits
    // ═══════════════════════════════════════════════════════════════
    const nodeCount = 8;
    interface OrbitData {
      group: THREE.Group;
      radius: number;
      speed: number;
      node: THREE.Mesh;
      glow: THREE.Mesh;
      angle: number;
    }
    const orbits: OrbitData[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const orbitGroup = new THREE.Group();
      orbitGroup.rotation.x = (i / nodeCount) * 0.6 - 0.3;
      orbitGroup.rotation.z = (i / nodeCount) * 0.4 - 0.2;
      scene.add(orbitGroup);

      const radius = 12 + i * 2.2;
      const speed = 0.12 - i * 0.008;

      // Orbit path - smooth ellipse
      const orbitPath = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.008, 8, 128),
        new THREE.MeshBasicMaterial({ 
          color: COLORS.secondary, 
          transparent: true, 
          opacity: 0.1 
        })
      );
      orbitPath.rotation.x = Math.PI / 2;
      orbitGroup.add(orbitPath);

      // Node - simple smooth sphere
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 32, 32),
        new THREE.MeshBasicMaterial({ 
          color: COLORS.primary, 
          transparent: true, 
          opacity: 0.8 
        })
      );
      node.position.x = radius;
      orbitGroup.add(node);

      // Node glow
      const nodeGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 16, 16),
        new THREE.MeshBasicMaterial({ 
          color: COLORS.primary, 
          transparent: true, 
          opacity: 0.12 
        })
      );
      node.add(nodeGlow);

      orbits.push({ 
        group: orbitGroup, 
        radius, 
        speed, 
        node, 
        glow: nodeGlow,
        angle: (i / nodeCount) * Math.PI * 2 
      });
    }

    // ═══════════════════════════════════════════════════════════════
    // PARTICLE STREAMS - Smooth flowing particles
    // ═══════════════════════════════════════════════════════════════
    const streamCount = 400;
    const streamGeo = new THREE.BufferGeometry();
    const streamPositions = new Float32Array(streamCount * 3);
    const streamOpacities = new Float32Array(streamCount);

    interface StreamParticle {
      orbitIndex: number;
      progress: number;
      speed: number;
      offset: THREE.Vector3;
    }
    const streamData: StreamParticle[] = [];

    for (let i = 0; i < streamCount; i++) {
      const orbitIndex = i % nodeCount;
      streamPositions[i * 3] = 0;
      streamPositions[i * 3 + 1] = 0;
      streamPositions[i * 3 + 2] = 0;
      streamOpacities[i] = Math.random();
      
      streamData.push({
        orbitIndex,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        offset: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.3
        ),
      });
    }

    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));

    const streams = new THREE.Points(streamGeo, new THREE.PointsMaterial({
      color: COLORS.bright,
      size: 0.1,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }));
    scene.add(streams);

    // ═══════════════════════════════════════════════════════════════
    // AMBIENT PARTICLES - Floating dust
    // ═══════════════════════════════════════════════════════════════
    const dustCount = 150;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 80;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 15;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
      color: COLORS.primary,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    }));
    scene.add(dust);

    // ═══════════════════════════════════════════════════════════════
    // ENERGY WAVES - Smooth expanding rings
    // ═══════════════════════════════════════════════════════════════
    interface EnergyWave {
      mesh: THREE.Mesh;
      progress: number;
    }
    const waves: EnergyWave[] = [];
    let waveTimer = 0;

    function createWave() {
      const wave = new THREE.Mesh(
        new THREE.RingGeometry(0.5, 0.6, 64),
        new THREE.MeshBasicMaterial({ 
          color: COLORS.primary, 
          transparent: true, 
          opacity: 0.5, 
          side: THREE.DoubleSide 
        })
      );
      wave.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.2;
      scene.add(wave);
      waves.push({ mesh: wave, progress: 0 });
    }

    // ═══════════════════════════════════════════════════════════════
    // CONNECTION LINES - Subtle curved connections
    // ═══════════════════════════════════════════════════════════════
    const connectionLines: THREE.Line[] = [];
    const connectionMaterials: THREE.LineBasicMaterial[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const points: THREE.Vector3[] = [];
      const segments = 30;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const radius = orbits[i].radius * (1 - t);
        const angle = orbits[i].angle + t * 0.5;
        points.push(new THREE.Vector3(
          Math.cos(angle) * radius * (1 - t * 0.3),
          Math.sin(angle) * radius * (1 - t * 0.3) * 0.3,
          t * 2 - 1
        ));
      }
      
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ 
        color: COLORS.primary, 
        transparent: true, 
        opacity: 0.08 
      });
      connectionMaterials.push(mat);
      const line = new THREE.Line(geo, mat);
      connectionLines.push(line);
      scene.add(line);
    }

    // ═══════════════════════════════════════════════════════════════
    // ANIMATION LOOP
    // ═══════════════════════════════════════════════════════════════
    let time = 0;
    let running = true;
    let lastTime = performance.now();

    function animate() {
      if (!running) return;
      requestAnimationFrame(animate);

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      time += delta;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      // Smooth camera movement
      camera.position.x = mouse.x * 4;
      camera.position.y = mouse.y * 3;
      camera.lookAt(0, 0, 0);

      // ─── Core Animation (smooth) ───
      innerCore.rotation.x += delta * 0.3;
      innerCore.rotation.y += delta * 0.5;
      const coreScale = 1 + Math.sin(time * 2) * 0.05;
      innerCore.scale.setScalar(coreScale);

      wireShell.rotation.x -= delta * 0.2;
      wireShell.rotation.y += delta * 0.3;

      rings.forEach((ring, i) => {
        ring.rotation.z += delta * (0.2 + i * 0.08) * (i % 2 === 0 ? 1 : -1);
      });

      coreGroup.rotation.y = time * 0.05;

      // ─── Orbital Nodes (smooth) ───
      orbits.forEach((orbit, i) => {
        orbit.angle += delta * orbit.speed;
        orbit.group.rotation.y = orbit.angle;
        
        // Gentle pulsing
        const pulse = 1 + Math.sin(time * 1.5 + i * 0.7) * 0.15;
        orbit.node.scale.setScalar(pulse);
        (orbit.glow.material as THREE.MeshBasicMaterial).opacity = 0.08 + Math.sin(time * 2 + i) * 0.04;
      });

      // ─── Particle Streams ───
      const streamPos = streamGeo.attributes.position.array as Float32Array;
      
      for (let i = 0; i < streamCount; i++) {
        const d = streamData[i];
        d.progress += d.speed;
        
        if (d.progress >= 1) {
          d.progress = 0;
          d.orbitIndex = Math.floor(Math.random() * nodeCount);
        }

        const orbit = orbits[d.orbitIndex];
        const nodeWorldPos = new THREE.Vector3();
        orbit.node.getWorldPosition(nodeWorldPos);
        
        // Smooth easing
        const t = d.progress;
        const eased = t * t * (3 - 2 * t); // smoothstep
        
        streamPos[i * 3] = nodeWorldPos.x * (1 - eased) + d.offset.x;
        streamPos[i * 3 + 1] = nodeWorldPos.y * (1 - eased) + d.offset.y;
        streamPos[i * 3 + 2] = nodeWorldPos.z * (1 - eased) + d.offset.z;
      }
      streamGeo.attributes.position.needsUpdate = true;

      // ─── Ambient Dust ───
      const dustPos = dustGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < dustCount; i++) {
        dustPos[i * 3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.005;
        dustPos[i * 3] += Math.cos(time * 0.3 + i * 0.05) * 0.003;
      }
      dustGeo.attributes.position.needsUpdate = true;

      // ─── Energy Waves ───
      waveTimer += delta;
      if (waveTimer > 1.5) {
        waveTimer = 0;
        createWave();
      }

      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        wave.progress += delta * 0.4;
        
        const scale = 1 + wave.progress * 25;
        wave.mesh.scale.setScalar(scale);
        (wave.mesh.material as THREE.MeshBasicMaterial).opacity = 0.4 * (1 - wave.progress);
        
        if (wave.progress >= 1) {
          scene.remove(wave.mesh);
          wave.mesh.geometry.dispose();
          (wave.mesh.material as THREE.Material).dispose();
          waves.splice(i, 1);
        }
      }

      // ─── Connection Lines ───
      connectionMaterials.forEach((mat, i) => {
        mat.opacity = 0.05 + Math.sin(time * 1.5 + i * 0.5) * 0.03;
      });

      renderer.render(scene, camera);
    }

    animate();

    // Event handlers
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.Line) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      initialized.current = false;
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        opacity: 0.75,
        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 45%, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 45%, black 20%, transparent 70%)',
      }}
    />
  );
}
