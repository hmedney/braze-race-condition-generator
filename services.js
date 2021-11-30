import axios from 'axios';
import {braze_server, braze_apikey} from './config.js';

export function createIdentifyEvent({external_id, name, country}) {
  return {
    attributes: [
      {
        external_id,
        name,
        country
      }
    ]
  };
}

export function createTrackEvent({external_id}) {
  return {
    events: [
      {
        external_id,
        name: 'Registration Completed',
        time: new Date().toISOString()
      }
    ]
  };
}

export async function sendBrazeEvent(data) {
  return axios({
    method: 'POST',
    url: `${braze_server}/users/track`,
    headers: {authorization: `Bearer ${braze_apikey}`},
    data
  });
}
