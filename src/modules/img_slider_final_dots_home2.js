/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import './img_slider_final.css'

const Dot = ({ active }) => (
  <span className="dotSpan_home"
  css={css`
  background: ${active ? 'black' : 'white'};
`}
   />
)

const Dots_home = ({ slides, activeIndex }) => (
  <div className="dot_pagination_home"
   
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots_home