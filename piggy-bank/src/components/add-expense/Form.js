import React, { Component } from "react";

class Form extends Component {
  state = {
    monto: '',
    formaPago: '',
    categoria: '',
    concepto: '',
    mensual: '',
    fecha: ''
  };
  
  handleChange(e){
    this.setState({value: e.target.value});
  }

 handleSubmit(e){
   console.log("forma de pago" +this.state.value);
   e.preventDefault();
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
        
        name="monto"
          placeholder="spent"
          value={this.state.monto}
          onChange= {e=> this.handleChange(e)}
          />
          <br/>
        <input
          name="formaPago"
          placeholder='Select'
          value={this.state.formaPago}
          onChange= {e=> this.change(e)}
          />
          <label>
          Forma de pago:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Credito">Credito</option>
            <option value="Debito">Debito</option>
            <option value="Efectivo">Efectivo</option>
          </select>
          </label>
          <input type= "submit" value="submit"/>
          <label>

          Categoria:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Fijo">Fijo</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Super">Super</option>
          </select>
          </label>
          <input type= "submit" value="submit"/>

          <button onClick={e=> this.onSubmit(e)}> Submit</button>
        
      </form>
      );
    }
  }
  
  
  
export default Form;