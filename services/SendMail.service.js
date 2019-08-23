const MAIL_URL = 'https://us-central1-cloud-functions-sendmail-b188f.cloudfunctions.net/sendMail';


export const sentMail = async payload => {
  let response = await fetch(MAIL_URL, {
    method: 'post',
    body: payload,
  });
  let data = await response.json();
  return data;
};
