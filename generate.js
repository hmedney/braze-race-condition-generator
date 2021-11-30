import {sendBrazeEvent} from './services.js';

async function main() {
  await sendBrazeEvent();
  console.log('request sent successfully');
}

main().catch((e) => console.error(e));
