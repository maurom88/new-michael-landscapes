import React from 'react'

function GalleryPic(props) {
    return (
        <div className={props.divClassName}>
            <a href={props.href}>
                <img alt={props.alt} src={props.src} className={props.imgClassName} />
            </a>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default GalleryPic