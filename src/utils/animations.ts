export const fadeIn = (delay: number = 0): string => {
  return `opacity-0 transition-opacity duration-1000 ease-in-out delay-${delay} animate-fadeIn`;
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay: number = 0): string => {
  const directionClass = {
    left: 'translate-x-[-20px]',
    right: 'translate-x-[20px]',
    up: 'translate-y-[-20px]',
    down: 'translate-y-[20px]',
  };

  return `opacity-0 transform ${directionClass[direction]} transition-all duration-700 ease-out delay-${delay} animate-slideIn`;
};