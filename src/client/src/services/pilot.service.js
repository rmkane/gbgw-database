import http from "../http-common";

class PilotDataService {
  getAll() {
    return http.get("/pilots");
  }

  get(id) {
    return http.get(`/pilots/${id}`);
  }

  create(data) {
    return http.post("/pilots", data);
  }

  update(id, data) {
    return http.put(`/pilots/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pilots/${id}`);
  }

  deleteAll() {
    return http.delete(`/pilots`);
  }

  findByName(name) {
    return http.get(`/pilots?name=${name}`);
  }
}

export default new PilotDataService();