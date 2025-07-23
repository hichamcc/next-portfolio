/**
 * Enhanced smooth scrolling utility with better easing and offset handling
 */

interface ScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

// Easing functions
export const easingFunctions = {
  easeInOutCubic: (t: number): number => 
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  easeOutQuart: (t: number): number => 
    1 - (--t) * t * t * t,
  
  easeInOutQuart: (t: number): number =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
};

/**
 * Smooth scroll to element with enhanced options
 */
export const smoothScrollToElement = (
  elementId: string,
  options: ScrollOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    const {
      duration = 1200,
      offset = -80, // Account for fixed header
      easing = easingFunctions.easeInOutCubic,
      onComplete,
    } = options;

    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
      console.warn(`Element with id "${elementId}" not found`);
      resolve();
      return;
    }

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition + offset;
    const distance = targetPosition - startPosition;
    
    // If already at target, resolve immediately
    if (Math.abs(distance) < 1) {
      onComplete?.();
      resolve();
      return;
    }

    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);
      
      const currentPosition = startPosition + (distance * easedProgress);
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        onComplete?.();
        resolve();
      }
    };

    requestAnimationFrame(animation);
  });
};

/**
 * Smooth scroll to top of page
 */
export const smoothScrollToTop = (duration = 800): Promise<void> => {
  return new Promise((resolve) => {
    const startPosition = window.pageYOffset;
    
    if (startPosition === 0) {
      resolve();
      return;
    }

    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easingFunctions.easeOutQuart(progress);
      
      const currentPosition = startPosition * (1 - easedProgress);
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animation);
  });
};

/**
 * Get current section based on scroll position
 */
export const getCurrentSection = (): string | null => {
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Pricing', 'Contact'];
  const scrollPosition = window.pageYOffset + 100; // Offset for better detection

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }

  return sections[0];
};

/**
 * Add scroll behavior CSS to body for fallback
 */
export const initSmoothScrollFallback = (): void => {
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
};