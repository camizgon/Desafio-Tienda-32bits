<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td>
          <!--Los métodos decrementStock e incrementStock son llamados con el index del juego actual. Esto asegura que cuando se hace clic en los botones, la acción sabe exactamente qué juego debe actualizarse.-->
            <button @click="decrementStock(index)" :disabled="juego.stock <= 0">-</button>
            <button @click="incrementStock(index)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapActions(["incrementStock", "decrementStock"]),
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: center;
}

td {
  text-align: center;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 0.5px solid #bdbdbd;
  background-color: #3d98e8;
  color: #fff;
  cursor: pointer;
}
button:hover{
  background-color: #10518a;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>




