<template>
  <section class="consultasCompras">
    <CabeceroConsultas />
    <canvas id="myChart" width="400" height="200"></canvas>
  </section>
</template>

<script>
import CabeceroConsultas from "../../../components/consultas/CabeceroConsultas.vue";
import axios from "axios";
import chart from "chart.js";
export default {
  data() {
    return {
      valores: [],
      meses: [],
      totales: [],
      myChart: "",
    };
  },
  methods: {
    listar() {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("ingreso/grafico-doce-meses", configuracion)
        .then((response) => {
          this.valores = response.data;
          this.graficar();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    graficar() {
      let mesn = "";
      this.valores.map((x) => {
        switch (parseInt(x._id.mes)) {
          case 1:
            mesn = "Enero";
            break;
          case 2:
            mesn = "Febrero";
            break;
          case 3:
            mesn = "Marzo";
            break;
          case 4:
            mesn = "Abril";
            break;
          case 5:
            mesn = "Mayo";
            break;
          case 6:
            mesn = "Junio";
            break;
          case 7:
            mesn = "Julio";
            break;
          case 8:
            mesn = "Agosto";
            break;
          case 9:
            mesn = "Septiembre";
            break;
          case 10:
            mesn = "Octubre";
            break;
          case 11:
            mesn = "Noviembre";
            break;
          case 12:
            mesn = "Diciembre";
            break;
        }
        this.meses.push(mesn);
        this.totales.push(x.total);
      });
      //var ctx = document.getElementById("myChart").getContext("2d");
      var ctx = document.getElementById("myChart");
      // eslint-disable-next-line no-unused-vars
      var myChart = new chart(ctx, {
        type: "bar",
        data: {
          labels: this.meses,
          datasets: [
            {
              label: "Compras de los ultimos 12 meses",
              data: this.totales,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 3,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      //this.myChart = myChart;
    },
  },
  mounted() {
    this.listar();
  },
  components: {
    CabeceroConsultas,
  },
};
</script>

<style scoped lang="sass">
.consultasCompras
	display: flex
	justify-content: flex-start
	flex-direction: column
	flex-wrap: wrap
	.title
		font-size: 2.1rem
		color: rgb(100, 197, 192)
		align-self: center
		margin-top: 1.5rem
		margin-bottom: 1.5rem
		text-align: center

canvas
	background: rgba(20, 40, 50, .6)
</style>
