/**
 * WebSpire Labs - Dynamic Constellation & Particle Network Background (constellation-bg.js)
 * Standalone, lightweight Canvas engine creating ambient floating nodes & dynamic linking lines.
 * Reusable across any page with <canvas id="heroConstellationCanvas">.
 */

(function () {
  'use strict';

  function initConstellation() {
    const canvas = document.getElementById('heroConstellationCanvas') || document.querySelector('.hero-constellation-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let particles = [];
    let animationFrameId = null;
    let isVisible = true;

    // Configuration
    const config = {
      particleColorNavy: 'rgba(11, 27, 50, 0.38)',
      particleColorCyan: 'rgba(0, 163, 196, 0.65)',
      lineColorRGB: '0, 163, 196',
      speed: 0.35, // Slow, elegant drift
      get maxDistance() {
        return window.innerWidth < 768 ? 95 : 125;
      },
      get particleCount() {
        if (window.innerWidth < 768) return 22;
        if (window.innerWidth < 992) return 36;
        return 55;
      }
    };

    class Particle {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.radius = (Math.random() * 1.2 + 1.2); // 1.2px to 2.4px
        this.isCyan = Math.random() > 0.78; // ~22% cyan nodes
      }

      update(w, h) {
        this.x += this.vx;
        this.y += this.vy;

        // Smooth wrap-around edges for seamless infinite drift
        if (this.x < -10) this.x = w + 10;
        else if (this.x > w + 10) this.x = -10;

        if (this.y < -10) this.y = h + 10;
        else if (this.y > h + 10) this.y = -10;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isCyan ? config.particleColorCyan : config.particleColorNavy;
        ctx.fill();
      }
    }

    function resize() {
      const parent = canvas.parentElement || canvas;
      width = parent.offsetWidth || window.innerWidth;
      height = parent.offsetHeight || window.innerHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      createParticles();
    }

    function createParticles() {
      particles = [];
      const count = config.particleCount;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    }

    function render() {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      const maxDist = config.maxDistance;
      const count = particles.length;

      // 1. Draw dynamic connecting lines between close particles
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * 0.16; // Subtle transparency
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${config.lineColorRGB}, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw nodes
      for (let i = 0; i < count; i++) {
        particles[i].update(width, height);
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    // Debounced resize handler
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
      }, 150);
    }, { passive: true });

    // IntersectionObserver to pause rendering when hero is offscreen (0% CPU cost)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              render();
            }
          } else {
            isVisible = false;
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }
        });
      }, { threshold: 0.05 });

      observer.observe(canvas.parentElement || canvas);
    }

    // Initialize and start animation loop
    resize();
    render();
  }

  // Support both early execution and DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConstellation);
  } else {
    initConstellation();
  }
})();
