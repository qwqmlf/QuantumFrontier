import React, { Component } from 'react'
import ReactGoogleSlides from "react-google-slides";

export class slideFinal extends Component {
    render() {
        return (
            <div>
                <ReactGoogleSlides
                    width={640}
                    height={480}
                    slidesLink=" /presentation/d/1TainXdVJMS_dBkJ-yUUJELs36sJUJ030RXcexuf2tUw/edit?usp=sharing"
                    slideDuration={5}
                    showControls
                    loop
                />
            </div>
        )
    }
}

export default slideFinal
