import React, { useEffect, useRef } from 'react';

export default function CyberShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animId;

    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    syncSize();
    window.addEventListener('resize', syncSize);

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // Dark, pulsing 3D cyber grid
        vec2 grid = fract(uv * 32.0 + u_time * 0.03);
        float lineX = smoothstep(0.025, 0.0, abs(grid.x - 0.5));
        float lineY = smoothstep(0.025, 0.0, abs(grid.y - 0.5));
        float gridLine = lineX + lineY;
        
        // Emerald (#00ff87) & Cyan (#00f2fe) harmonic energy waves
        float wave1 = sin(uv.x * 6.0 + u_time * 0.8) * cos(uv.y * 6.0 - u_time * 0.4);
        float wave2 = cos(uv.x * 12.0 - u_time * 0.6) * sin(uv.y * 8.0 + u_time * 0.5);
        float pattern = (wave1 + wave2 * 0.5) * 0.5 + 0.5;
        
        vec3 colorBg = vec3(0.012, 0.027, 0.07); // Deep obsidian #030712
        vec3 colorEmerald = vec3(0.0, 1.0, 0.53); // #00ff87
        vec3 colorCyan = vec3(0.0, 0.95, 1.0);    // #00f2fe
        vec3 colorPurple = vec3(0.55, 0.2, 0.9);  // Subtle violet
        
        vec3 finalColor = colorBg;
        
        // Add subtle cyber grid illumination
        finalColor += colorCyan * gridLine * 0.07;
        
        // Add waving aurora energy currents
        finalColor += mix(colorEmerald, colorCyan, pattern) * pattern * 0.06;
        finalColor += colorPurple * (1.0 - pattern) * 0.02;
        
        // Interactive mouse glow wave
        float mouseDist = length(uv - mouse);
        float mouseGlow = 0.08 / (mouseDist * 2.5 + 0.4);
        finalColor += colorEmerald * mouseGlow * 0.35;
        
        // Vignette on corners
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        finalColor *= clamp(16.0 * vignette * 1.5, 0.4, 1.0);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const compileShader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);

    const prog = gl.createProgram();
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = canvas.height - e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = (time) => {
      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.85 }}
      />
      {/* Top and bottom subtle gradient masks */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-transparent to-[#030712]/70 pointer-events-none" />
    </div>
  );
}
