import React, { useState } from 'react'

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0)

  
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    
  
  return {scrollY}
}
