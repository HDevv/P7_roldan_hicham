import data from "../data.json";

const getAllLodgings = () => {
  return data;
};

const getOneLodging = (id) => {
  return data.find((data) => data.id === id);
};

export const DataCrud = {
  getAllLodgings,
  getOneLodging,
};
