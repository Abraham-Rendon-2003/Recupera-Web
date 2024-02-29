<template>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <h1>Te encuentras en inicio</h1>
      <b-button variant="primary" to="registros">Ver registros</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'inicio',
      data() {
        return {
          items: [
          {
            text: "inicio",
            href: "/",
            name: 'inicio'
          },
          {
            text: "registros",
            href: "/registros",
            name: 'registros'
          },
        ],
        }
      }
  }
  </script>
  
  <style>
  
  </style>