import React, { useState } from "react";
import { Row, Col, Typography, Menu, Dropdown } from "antd";
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from "antd";

import prices from "./phones.json";

const iPhonemodel = "iPhone 7 Plus";
const reparation = "Zwart scherm";

function ScreenRepair() {
  const [componentSize, setComponentSize] = useState("default");

  const getPrice = () => {
    if (reparation.includes("scherm")) {
      return prices[iPhonemodel].Scherm;
    } else {
      return prices[iPhonemodel].Batterij;
    }
  };
  return (
    <>
      <Typography.Title>
        {iPhonemodel} - {reparation} reparatie
      </Typography.Title>
      <Typography.Title level={3}>Totaalprijs €{getPrice()}</Typography.Title>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 4,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        size={componentSize}
      >
        <Form.Item label="Voornaam">
          <Input />
        </Form.Item>
        <Form.Item label="Achternaam">
          <Input />
        </Form.Item>
        <Form.Item label="Postcode">
          <Input />
        </Form.Item>
        <Form.Item label="Huisnummer + toevoeging">
          <Input />
        </Form.Item>
        <Form.Item label="E-mailadres">
          <Input />
        </Form.Item>
        <Form.Item label="Telefoonnummer">
          <Input />
        </Form.Item>
        <Form.Item label="Wat is er precies mis met je toestel?">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button>Verzenden</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ScreenRepair;
