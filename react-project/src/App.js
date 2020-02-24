import React from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";

// store와 연결을 위함
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataFunc from "./store/modules/data";
import useInput from "./lib/hooks/useInput";

const App = ({ data, dataFunc }) => {
  const [{ name, phone }, onChange, setInitialValue] = useInput({
    name: "",
    phone: ""
  });

  const handleSubmit = e => {
    if (name === "" || phone === "") return;

    dataFunc.appendData({
      name,
      phone
    });
    setInitialValue();
  };

  const handleRemove = id => {
    dataFunc.removeData(id);
  };

  return (
    <div className="container">
      <InputBox
        name={name}
        phone={phone}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <PhoneList list={data} deleteItem={handleRemove} />
    </div>
  );
};

export default connect(
  state => ({
    data: state.data
  }),
  dispatch => ({
    dataFunc: bindActionCreators(dataFunc, dispatch)
  })
)(App);
