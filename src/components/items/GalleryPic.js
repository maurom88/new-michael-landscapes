import React from 'react'

function GalleryPic(props) {
    return (
        <div className="">
            <a href={props.href}>
                <img alt={props.alt} height={props.height} width={props.width} src={props.src}  />
            </a>
            <div className="">
                {props.desc}
            </div>
        </div>
    )
}

export default GalleryPic