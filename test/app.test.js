const chai = require("chai");
const chaiHttp = require("chai-http");
 
const should = chai.should();
 
chai.use(chaiHttp);
 
const server = require("../app");
 
describe("app restapi test", () => {
     it("POST : /", done => {
          chai.request(server)
               .post("/")
               .end((error, response) => done());
     });
});