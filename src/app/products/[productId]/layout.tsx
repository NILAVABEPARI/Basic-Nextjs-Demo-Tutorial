import { Http2ServerRequest } from "http2";
import React from "react";

export default function ProductLayout({ children }:
    { children: React.ReactNode }
) {

    return (
        <>
            {children}
            <h2>Feature Products</h2>
        </>
    )
}