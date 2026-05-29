import { useEffect, useRef } from "react";

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cleanup = () => {};
    let cancelled = false;
    const mouse = { x: 0, y: 0 };

    void import("three").then((THREE) => {
      if (cancelled || !mountRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 8;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.setAttribute("aria-hidden", "true");
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.9, 2),
        new THREE.MeshBasicMaterial({
          color: 0x8d5cff,
          wireframe: true,
          transparent: true,
          opacity: 0.18,
        }),
      );
      group.add(shell);

      const innerRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.25, 0.012, 12, 96),
        new THREE.MeshBasicMaterial({ color: 0x65e8ff, transparent: true, opacity: 0.34 }),
      );
      innerRing.rotation.x = Math.PI / 2.8;
      group.add(innerRing);

      const outerRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.75, 0.01, 12, 120),
        new THREE.MeshBasicMaterial({ color: 0xb46cff, transparent: true, opacity: 0.22 }),
      );
      outerRing.rotation.y = Math.PI / 2.6;
      group.add(outerRing);

      const nodeGeometry = new THREE.SphereGeometry(0.035, 12, 12);
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x72f4ff, transparent: true, opacity: 0.82 });
      const nodes = new THREE.Group();
      for (let i = 0; i < 42; i += 1) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / 42);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(
          Math.sin(phi) * Math.cos(theta) * 2.05,
          Math.cos(phi) * 2.05,
          Math.sin(phi) * Math.sin(theta) * 2.05,
        );
        nodes.add(node);
      }
      group.add(nodes);

      const onMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);

      let frame = 0;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        const scrollMax = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const scrollProgress = window.scrollY / scrollMax;
        const mobile = window.innerWidth < 768;

        group.position.x = mobile ? 1.35 + mouse.x * 0.08 : 3 + mouse.x * 0.18;
        group.position.y = (mobile ? 1.15 : 0.7) - scrollProgress * (mobile ? 3.2 : 4.6) - mouse.y * 0.12;
        group.position.z = -0.7;
        group.rotation.x += 0.0025;
        group.rotation.y += 0.004;
        innerRing.rotation.z -= 0.003;
        outerRing.rotation.x += 0.002;

        const scale = mobile ? 0.72 : 1;
        group.scale.setScalar(scale);

        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        shell.geometry.dispose();
        innerRing.geometry.dispose();
        outerRing.geometry.dispose();
        nodeGeometry.dispose();
        shell.material.dispose();
        innerRing.material.dispose();
        outerRing.material.dispose();
        nodeMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 z-[1] opacity-80" aria-hidden="true" />;
}
