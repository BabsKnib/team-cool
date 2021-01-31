import React from "react";
import { AwesomeButton } from "react-awesome-button";


function OrderButton() {
  //Controleren of zowel het telefoonmodel en of het te repareren onderdeel ingevuld is
  return (
    <AwesomeButton
      type="primary"
      ripple
      onPress={() => {
        console.log("BESTELLEN DIE HANDEL");
      }}
    >
      Laat mijn telefoon maken
    </AwesomeButton>
  );
}

export default OrderButton;
