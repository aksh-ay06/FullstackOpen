import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteperson = (id) => {
  const isConfirmed = window.confirm('Are you sure you want to delete this entry?');
  if (isConfirmed) {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
  }
  // Return a promise that resolves to null if the user cancels the deletion
  return Promise.resolve(null);
};


export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteperson:deleteperson,
}