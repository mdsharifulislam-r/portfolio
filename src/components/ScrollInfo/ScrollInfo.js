import React, { useState } from 'react'

export default function useScroll({ref}) {
  const [scrollY, setScrollY] = useState(0)
  if (ref) {
    ref.addEventListener("mouseover", () => {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    })
  }
  return {scrollY}
}
