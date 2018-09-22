import axios from "axios";

export default {
    getGastos: function() {
      return axios.get(process.env.REACT_APP_API_URL + "/api/gastos");
    },
    postGasto: function(gasto) {
        return axios.post(process.env.REACT_APP_API_URL + "/api/gastos", gasto);
    },
    postUsuario: function(usuario) {
        return axios.post(process.env.REACT_APP_API_URL + "/api/usuario", usuario);
    }

  
  };