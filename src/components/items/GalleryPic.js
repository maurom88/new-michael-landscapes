import React from 'react'
import ModalImage from "react-modal-image"

function GalleryPic(props) {

    return (
        <div className={props.divClassName}>
            {/* If href is empty use modal, otherwise add link to gallery */}
            {props.href === "#" ?
                <a href={props.href}>
                    <ModalImage
                        alt={props.alt}
                        small={props.src}
                        large={props.src}
                        className={props.imgClassName}
                    />
                </a>
                
                :

                <a href={props.href}>
                    <img alt={props.alt} src={props.src} className={props.imgClassName} />
                </a>
            }

            <p>
                {props.desc}
            </p>

        </div>
    )
}

export default GalleryPic