import sendRequest from "./send-request";

const BASE_URL = "/s";

export function getNotes() {
  return sendRequest(`${BASE_URL}/note`);
}
