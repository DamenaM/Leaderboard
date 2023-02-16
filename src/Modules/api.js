const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'Zl4d7IVkemOTTVg2fUdz';
// -- Method to retrieve the data from the API file 
const getData = async () => {
  const response = await fetch(`${url}games/${id}/scores`);
  const data = await response.json();
  return data;
};
// sends the inputs to the API.
const submitScores = async (name, score) => {
  const response = await fetch(`${url}games/${id}/scores`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, score }),
  });
  const data = await response.json();
  return data;
};

export { getData,  submitScores,};
