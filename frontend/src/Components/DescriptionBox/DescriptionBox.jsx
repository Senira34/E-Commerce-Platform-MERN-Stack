import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci non repellat perferendis possimus repudiandae minima quos error animi distinctio, quibusdam sint necessitatibus eligendi quas in nam rem ea impedit!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, consectetur optio! Dicta amet aliquam, cum perspiciatis molestiae odit mollitia culpa tempore perferendis non excepturi deserunt adipisci eaque temporibus ullam rerum!</p>
        </div>

    </div>
  )
}

export default DescriptionBox