const axios = require('axios').default;

interface Secrets {
  apiKey: string;
  modelId: string; 
};

const API = 'https://api.kellar.ai:10010/synthesize/';

class Kellar {
  secrets: Secrets;
  url: string;
  constructor(secrets: Secrets) {
      this.secrets = secrets;
      this.url = `${API}${this.secrets.modelId}?key=${this.secrets.apiKey}`;
  }
  async generate(rows: number) {
    try {
      const response = await axios.get(this.url);
      return response;
    } catch(error) {
      return error;
    }

  }
}

module.exports = Kellar;
