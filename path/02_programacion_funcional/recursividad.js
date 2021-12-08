const axios = require('axios');

const llamarApi = async(url, llamados = 0) => {
  try{
    const {data} = await axios.get(url);
    console.log(data);

    return data;
  }catch(e){
    if(llamados > 5){
      return ''
    }

    console.log(e);
    return llamarApi(url, llamados + 1);
  }
}

llamarApi('https://jsonplaceholder.typicode.com/users');