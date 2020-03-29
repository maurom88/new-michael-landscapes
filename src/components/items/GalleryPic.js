import React from 'react'

import './GalleryPic.css'

function GalleryPic(props) {

    function ModalScript() {
        /* Get the modal */
        let modal = document.getElementById("picModal")

        /* Get the image and insert it inside the modal */
        let img = document.getElementsByClassName("img-thumbnail")[0]
        let modalImg = document.getElementById("img01")
        img.onclick = function () {
            modal.style.display = "block"
            modalImg.src = this.src
        }

        /* Get the <span> (x) element to close the modal */
        let span = document.getElementsByClassName("close")[0]

        /* Close the modal on click */
        span.onclick = function () {
            modal.style.display = "none"
        }

        /* When click outside of modal, close it */
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }
    }

    return (
        <div className={props.divClassName}>
            {/* If href is empty use modal, otherwise add link to gallery */}
            {props.href === "#" ?
                <a href={props.href} onClick={ModalScript}>
                    <img alt={props.alt} src={props.src} className={props.imgClassName} />
                </a>

                :

                <a href={props.href}>
                    <img alt={props.alt} src={props.src} className={props.imgClassName} />
                </a>
            }

            <p>
                {props.desc}
            </p>

            {/* Modal for pic pop-up */}
            <div id="picModal" className="modal">
                <span className="close">&times;</span>
                <img class="modal-content" id="img01" />
            </div>
        </div>
    )
}

export default GalleryPic