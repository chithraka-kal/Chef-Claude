import React, { useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({ recipe }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

  return (
    <section
      ref={sectionRef}
      className="suggested-recipe-container"
      aria-live="polite"
    >
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  )
}
