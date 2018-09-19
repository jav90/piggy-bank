import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import AddFormApi from "../api/AddFormApi";


class Add extends Component {
  state={
    id:"",
    cantidad: "",
    formaPago:"",
    categoria: "",
    concepto: "",
    mensual: "",
    fecha: ""
  };

 
  // onSumbit = (fields)=> {
  //   this.setState({fields});
  // };

  render() {
    return (
      <div className="Add">
       <Form/>
      </div>
    )
  }
}

export default Add;