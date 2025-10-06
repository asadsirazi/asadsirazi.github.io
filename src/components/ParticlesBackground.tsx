import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export const ParticlesBackground = () => {
  useEffect(() => {
    // Wait for particles.js to load
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#60c5f1',
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.5,
                },
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    // Check if script is loaded
    if (document.readyState === 'complete') {
      setTimeout(initParticles, 100);
    } else {
      window.addEventListener('load', () => setTimeout(initParticles, 100));
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <div id="particles-js" aria-hidden="true" />;
};
