import React from 'react'
import QRCode from 'qrcode';

import { useState } from 'react'

function QRCodePom(props) {

    const [src,setSrc] = useState("")

    QRCode.toDataURL(props.qr).then(setSrc)

    return (
        <div><img src={src} height = {300}/></div>
    )
}

export default QRCodePom