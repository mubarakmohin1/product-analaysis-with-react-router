import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question-ans'>
        <b>Question1: what are semantic tag?</b> 
        <p><b>Ans: </b> A semantic element clearly describes its meaning to both the browser and the developer.Generally users can not understand during visit the webpage properly without semantic tag.when programmer use semantic tag then easily understand the code.Each semantic tag is a meaningful word. semantic elements: form tag, table tag, and img tag- Clearly defines its content.It has greater accessibility. It offers a better user experience.This semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.</p>

        <b>Question2: Difference between inline,block and inline-block element?</b>
        <p><b>Ans:1. </b> <span className='ans-title'>inline</span> element doesn't start on a new line and only occupy just the width it requires.You can't set the width or height. <span className='ans-title'>inline-block</span> element formatted just like the  inline element,where it doesn't start on n new line .But you can set width and height values. <span className='ans-title'>block</span> element will start on a new line and occupy the full width available and you can set width and height values. <br />   2. Anyone can add space to the left and right on an inline element, but he cannot add height to the top or bottom padding or margin of an inline element, Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides and can add margins and padding on all four sides of any block element </p>
        


        </div>
    );
};

export default Blogs;