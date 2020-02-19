import React, { Component, useState } from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { dummyData, nextId, setNextId } from "./lib/dummyData";
import useInput from "./lib/useInput";

const App = () => {
  const [data, setData] = useState(dummyData);
  const [name, setName, onChangeName] = useInput("");
  const [phone, setPhone, onChangePhone] = useInput("");

  const handleSubmit = () => {
    if (name === "" || phone === "") return;
    setData({
      ...data,
      [nextId]: {
        id: String(nextId),
        name,
        phone
      }
    });
    setName("");
    setPhone("");

    setNextId();
  };

  const handleRemove = id => {
    const { [id]: _, ...dummyData } = data;

    setData(dummyData);
  };

  return (
    <div className="container">
      <InputBox
        name={name}
        phone={phone}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        onSubmit={handleSubmit}
      />
      <PhoneList list={data} deleteItem={handleRemove} />
    </div>
  );
};

export default App;
