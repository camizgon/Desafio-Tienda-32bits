import { createStore } from "vuex";
import juegos from "../store/juegos.json";

export default createStore({
  state: {
    juegos: juegos
  },

  //incrementStock(state, index) y decrementStock(state, index): Las mutaciones en Vuex reciben el estado actual (state) y el índice del juego a modificar. Esto permite a las mutaciones actualizar el stock del juego correcto en la lista juegos.
  mutations: {
    incrementStock(state, index) {
      state.juegos[index].stock++;
    },
    decrementStock(state, index) {
      if (state.juegos[index].stock > 0) {
        state.juegos[index].stock--;
      }
    },
  },

  //incrementStock(context, index) y decrementStock(context, index): Las acciones también reciben el contexto de Vuex (context) y el índice del juego a modificar. Las acciones luego comiten las mutaciones correspondientes, pasando el índice recibido.
  actions: {
    incrementStock(context, index) {
      context.commit("incrementStock", index);
    },
    decrementStock(context, index) {
      context.commit("decrementStock", index);
    },
  },
});


//El uso de index asegura que cada operación de incremento y decremento del stock se aplique al juego correcto en la lista.