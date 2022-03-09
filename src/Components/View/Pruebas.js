import React from "react";

const states = [
  {
    id: 1,
    idCountry: "EC",
    tableReference: "banks",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 2,
    idCountry: "EC",
    tableReference: "banks",
    value: "A",
    name: "Activo",
    state: "A",
  },
  {
    id: 3,
    idCountry: "EC",
    tableReference: "users",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 4,
    idCountry: "EC",
    tableReference: "users",
    value: "A",
    name: "Activo",
    state: "A",
  },
  {
    id: 5,
    idCountry: "EC",
    tableReference: "regions",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 6,
    idCountry: "EC",
    tableReference: "regions",
    value: "A",
    name: "Activo",
    state: "A",
  },
  {
    id: 7,
    idCountry: "EC",
    tableReference: "offices",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 8,
    idCountry: "EC",
    tableReference: "offices",
    value: "A",
    name: "Activo",
    state: "A",
  },
  {
    id: 9,
    idCountry: "EC",
    tableReference: "languages",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 10,
    idCountry: "EC",
    tableReference: "languages",
    value: "A",
    name: "Activo",
    state: "A",
  },
  {
    id: 11,
    idCountry: "EC",
    tableReference: "transfers",
    value: "A",
    name: "Aprobado",
    state: "A",
  },
  {
    id: 12,
    idCountry: "EC",
    tableReference: "transfers",
    value: "R",
    name: "Rechazado",
    state: "A",
  },
  {
    id: 13,
    idCountry: "EC",
    tableReference: "transfers",
    value: "I",
    name: "Ingresado",
    state: "A",
  },
  {
    id: 14,
    idCountry: "EC",
    tableReference: "countries",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 15,
    idCountry: "EC",
    tableReference: "countries",
    value: "A",
    name: "Activo",
    state: "A",
  },
  {
    id: 16,
    idCountry: "EC",
    tableReference: "routes",
    value: "I",
    name: "Inactivo",
    state: "A",
  },
  {
    id: 17,
    idCountry: "EC",
    tableReference: "routes",
    value: "A",
    name: "Activo",
    state: "A",
  },
];

let stateStore = states.filter((el) => el.tableReference === "transfers");
console.log(stateStore);

const Pruebas = () => {
  return <div>hi from pruebas</div>;
};

export default Pruebas;
