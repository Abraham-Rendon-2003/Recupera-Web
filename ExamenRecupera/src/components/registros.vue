<template>
    <div>
      <div>
        <b-breadcrumb :items="bread"></b-breadcrumb>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-2" label="Tu nombre:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Ingresa tu nombre"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group
            id="input-group-2"
            label="Tu edad:"
            label-for="input-2"
            @reset="onReset"
          >
            <b-form-input
              id="input-2"
              v-model="form.edad"
              placeholder="Ingresa tu edad"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group
            id="input-group-2"
            label="Tu cuatrimestre:"
            label-for="input-2"
            @reset="onReset"
          >
            <b-form-input
              id="input-2"
              v-model="form.cuatrimestre"
              placeholder="Ingresa tu cuatrimestre"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group
            id="input-group-2"
            label="Tu carrera:"
            label-for="input-2"
            @reset="onReset"
          >
            <b-form-input
              id="input-2"
              v-model="form.carrera"
              placeholder="ingresa tu carrera"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button type="submit" variant="primary">Aceptar</b-button>
          <b-button type="reset" variant="danger">Cancelar</b-button>
        </b-form>
      </div>
      <br />
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
  
        <p class="mt-3">Current Page: {{ currentPage }}</p>
  
        <b-table
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    name: "registros",
    data() {
      return {
        bread: [
          {
            text: "inicio",
            href: "/",
            name: "inicio",
          },
          {
            text: "registros",
            href: "./registros",
            name: "registros",
          },
        ],
        form: {
          email: "",
          name: "",
          food: null,
          checked: [],
        },
        perPage: 3,
        currentPage: 1,
        items: [
          {
            id: 1,
            first_name: "Juan",
            edad: "20",
            cuatrimestre: "3",
            carrera: "Ingeniería Civil",
          },
          {
            id: 2,
            first_name: "María",
            edad: "22",
            cuatrimestre: "5",
            carrera: "Medicina",
          },
          {
            id: 3,
            first_name: "Luis",
            edad: "19",
            cuatrimestre: "2",
            carrera: "Psicología",
          },
          {
            id: 4,
            first_name: "Ana",
            edad: "21",
            cuatrimestre: "4",
            carrera: "Derecho",
          },
          {
            id: 5,
            first_name: "Pedro",
            edad: "23",
            cuatrimestre: "6",
            carrera: "Administración de Empresas",
          },
        ],
      };
    },
    computed: {
      rows() {
        return this.items.length;
      },
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset(event) {
        event.preventDefault();
        this.form.email = "";
        this.form.name = "";
        this.form.food = null;
        this.form.checked = [];
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      },
    },
  };
  </script>
    