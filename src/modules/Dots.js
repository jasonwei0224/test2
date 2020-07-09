import React from 'react'
import { css, jsx } from '@emotion/core'
import './Dots.css'

const Dot = ({ active }) => (
  <span clasName="spanTest"/>
)

const Dots = ({ slides, activeIndex }) => (
  <div className="divTest">
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots