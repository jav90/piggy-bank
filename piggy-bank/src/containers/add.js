import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import AddFormApi from "../api/AddFormApi";


class Add extends Component {
  state={
    id:this.props.id,
    cantidad: this.props.cantidad,
    formaPago: this.props.formaPago,
    categoria: this.props.categoria,
    concepto: this.props.concepto,
    mensual: this.props.mensual,
    fecha: this.props.fecha
  };

 
  onSumbit = (fields)=> {
    this.setState({fields});
  };

  render() {
    return (
      <div className="Add">
        <Form onSubmit={fields=> this.onSubmit(fields)}/>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    )
  }
}

export default Add;