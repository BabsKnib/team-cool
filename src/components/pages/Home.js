import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Menu, Dropdown } from "antd";
import { Select } from "antd";
import { DownOutlined } from "@ant-design/icons";

import OrderButton from "./../OrderButton";
import prices from "./phones.json";

const { Title } = Typography;
const { Option } = Select;

function Home() {
  let iphones = [];
  const [selectedIphone, setSelectedIphone] = useState("Selecteer iPhone model");
  const [selectedRepair, setSelectedRepair] = useState("Selecteer onderdeel");

  for (const phone in prices) {
    iphones.push(phone);
  }

  // KIJKEN WELKE IPHONE HET IS EN OP BASIS DAARVAN DE ACHTERGROND INSTELLEN
  const changeBackgroundToCorrectIphone = () => {
    // document.getElementsByClassName('home-main')[0].style.backgroundImage = "url('/images/iphone7.jpg')";
  };

  const repairPhone = () => {
    let repairs = [];
    let iphoneModel = "iPhone 7 Plus";

    for (const parts in prices[iphoneModel]) {
      repairs.push(parts);
    }
    return (
      <Select showSearch style={{ width: 200 }} placeholder={selectedRepair} optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {repairs.map((repair) => {
          if (repair !== "Kleuren") {
            return <Option value={repair}>{repair}</Option>;
          }
        })}
      </Select>
    );
  };

  const getPrice = () => {
    //First get the iphone model, than get the part that needs to be repaired
    let repairPart = "Scherm";
    let iphoneModel = "iPhone 7 Plus";

    if (iphoneModel.includes("Anders")) {
      return <Title>{prices[iphoneModel].Scherm}</Title>;
    } else if (repairPart.includes("cherm")) {
      return <Title>€ {prices[iphoneModel].Scherm}</Title>;
    } else if (repairPart.includes("atterij")) {
      return <Title>€ {prices[iphoneModel].Batterij}</Title>;
    }
  };

  return (
    <>
      <div className="home-main">
        <Row justify="center" style={{ padding: "60px 0 15px" }}>
          <Col span={24}>
            <Title>Laat je iPhone snel en goedkoop repareren</Title>
          </Col>
        </Row>

        <Row justify="center" style={{ padding: "30px 0 15px" }}>
          <Col span={7}>
            <Title level={3}>Om welk model iPhone gaat het?</Title>
            {/* Zorgen dat achtergrond veranderd naar correcte iPhone */}
            {/* Zorgen dat gekozen iPhone weergegeven wordt */}
            <Select showSearch className="iPhone-model-selector" style={{ width: 200 }} placeholder={selectedIphone} optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              {iphones.map((iphone) => {
                return <Option value={iphone}>{iphone}</Option>;
              })}
            </Select>
          </Col>
          <Col span={7}>
            <Title level={3}>Welk onderdeel wilt u laten repareren?</Title>
            {repairPhone()}
          </Col>
        </Row>

        <Row justify="center" style={{ padding: "10px" }}>
          <Col span={24}>{getPrice()}</Col>
        </Row>

        <Row justify="center" style={{ padding: "10px" }}>
          <Col span={24}>
            <Typography.Title level={4}>Welke scherm kleur?</Typography.Title>
            <Select className="iPhone-model-selector" style={{ width: 200 }} placeholder="Kies uw schermkleur">
              {prices["iPhone 7 Plus"].Kleuren.map((element) => {
                return <Option>{element}</Option>;
              })}
            </Select>
          </Col>
        </Row>

        <Row justify="center" style={{ padding: "10px" }}>
          <Col span={24}>
            <Link to="/reparatie-aanvragen">
              <OrderButton />
            </Link>
          </Col>
        </Row>
      </div>
      <div>
        <Row justify="center" style={{ padding: "60px 0" }}>
          <Col span={6}>
            <Title level={4}>Wat te doen voor ik mijn iPhone opstuur?</Title>
            1. Maak een back-up van je gegevens.
            <br />
            2. Verwijder de schermvergrendeling of schrijf de ontgrendelingscode op het opstuurformulier.
            <br />
            3. Verwijder Find my iPhone.
            <br />
            4. Verwijder je simkaart.
            <br />
            5. Per mail ontvang je een opstuurformulier, vul deze in en verpakt deze samen met de iPhone.
            <br />
            6. Pak je telefoon goed in en stuur ‘m op!
          </Col>
          <Col span={6}>
            <Title level={4}>Wat gebeurt er na het opsturen?</Title>
            <p>Met de ontvangen Track & Trace code en de postcode (5600 VE) kun je je verzending volgen. Zodra we ‘m ontvangen, gaan we je toestel uitgebreid onderzoeken en sturen we je een iDeal betaallink. Indien je reparatie binnen de garantie valt, sturen we je ook een bevestiging, maar je hoeft dan niets te betalen. Zodra we ‘m weer naar je terugsturen, ontvang je eerst een mail met Track & Trace code zodat je ook tijdens de terugreis je toestel op de voet kunt volgen.</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
