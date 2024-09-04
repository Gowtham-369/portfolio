import React from 'react';
import '../Styles/skillbox.css';

const TAGS = [ 'Classification', 'Regression', 'Clustering', 'CNN', 'PCA','AWS-EC2', 'AWS-ECS','AWS-S3', 'Azure'];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => (
  <div className='loop-slider' style={{ '--duration': `${duration}ms`, '--direction': reverse ? 'reverse' : 'normal' }}>
    <div className='inner'>
      {children}
      {children}
    </div>
  </div>
);

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const SkillBox2 = () => (
    
  <div className='tag-list'>
    {[...Array(ROWS)].map((_, i) => (
      <InfiniteLoopSlider key={i} duration={DURATION} reverse={i % 2 === 1}>
        {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </InfiniteLoopSlider>
    ))}
    <div className='fade'/>
  </div>
);

export default SkillBox2;
