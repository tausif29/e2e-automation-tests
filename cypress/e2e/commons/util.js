export function getRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function verifyXhrRequest(path, tag) {
  cy.intercept({
    method: "GET",
    url: path,
  }).as(tag);
  cy.wait("@" + tag);
}
