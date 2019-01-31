import Api from "@/services/Api";

//getOne: get a answer from id question

export default {
  getOne(id) {
    return Api().get(`anwsers/${id}`);
  }
};
