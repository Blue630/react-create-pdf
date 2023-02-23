import React, {useState, useEffect} from "react";

const PSPDFKit = (props) => {
  const containerRef = React.createRef();
  useEffect(() => {
    const url = URL.createObjectURL(props.blob);
    setTimeout(() => {
      PSPDFKit.load({
          document: url,
          container: containerRef.current
        });
    }, 1000);
    // window.PSPDFKit.unload(containerRef.current);
    // window.PSPDFKit.load({
    //   document: url,
    //   container: containerRef.current
    // });
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    />
  );
}
export default PSPDFKit;