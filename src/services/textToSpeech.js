// textToSpeechApi.js

import axios from 'axios';

const rapidAPIKey = '78a21d8c2emshbcdb167cd054517p169ed9jsn4e8158f1e6cb';

export const getTextToSpeech = async (text) => {
  const url = 'https://large-text-to-speech.p.rapidapi.com/tts';

  const payload = { text };

  const headers = {
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com',
    'X-RapidAPI-Key': rapidAPIKey,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    const { id, eta } = response.data;

    console.log(`Waiting ${eta} seconds for the job to finish...`);
    await new Promise((resolve) => setTimeout(resolve, eta * 500));

    let resultResponse = await axios.get(url, { headers, params: { id } });

    while (!('url' in resultResponse.data)) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      resultResponse = await axios.get(url, { headers, params: { id } });
    }

    if (!('error' in resultResponse.data)) {
      const resultUrl = resultResponse.data.url;
      return resultUrl;
    } else {
      console.error(resultResponse.data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
