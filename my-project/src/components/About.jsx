import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (

      <div className="join join-vertical w-full my-4 text-white">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">Text Formatting</div>
    <div className="collapse-content">
      <p>Convert your text to Uppercase or Lowercase with a single click. This feature is useful for formatting titles, headings, or standardizing case in your writing</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Copy Text:</div>
    <div className="collapse-content">
      <p>Copy the modified or raw text directly to your clipboard. With one click, you can transfer text for use in documents, emails, or coding projects.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Text Preview:</div>
    <div className="collapse-content">
      <p>As you make changes, the tool provides a live preview of your text, allowing you to see the updates in real-time without any delay.</p>
    </div>
  </div>
</div>
      
  )
}

export default About
