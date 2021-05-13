class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      BaseURL,
    });
  }

//get
  getFullList = () => this.api.get("/characters");

//get (id)
  getOneRegister = characterId => this.api.get(`/characters/ ${characterId}`);

//post (info)
  createOneRegister = characterInfo => this.api.post(`/characters`, characterInfo);
 
//patch / put (info updated in id)
  updateOneRegister = (characterId, characterInfo) => this.api.patch(`/characters/ ${characterId}`, characterInfo);

  
//delete (id)
  deleteOneRegister = characterId => this.api.delete(`/characters/ ${characterId}`);

  }
module.exports = APIHandler
