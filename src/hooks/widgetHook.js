import { useEffect } from 'react';

export default function useWompiWidget(){
  useEffect(() => {
    const widgetDiv = document.querySelector(".cart_footer");
    const script = document.createElement("script");

    script.setAttribute("src", "https://checkout.wompi.co/widget.js");
    script.setAttribute("data-render", "button");
    script.setAttribute("data-public-key", "pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH");
    script.setAttribute("data-currency", "COP");
    script.setAttribute("data-amount-in-cents","4950000");
    script.setAttribute("data-reference", "4XMPGKWWPKWQ");
    
    widgetDiv.appendChild(script);

    return () => {
      widgetDiv.removeChild(script);
    };
  }, []);
};