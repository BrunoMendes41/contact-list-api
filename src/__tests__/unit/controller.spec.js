const sinon = require('sinon');

const contactController = require('../../controllers/contact');
const contactModel = require('../../models/contact');

describe('Controller tests', () => {
  // GET
  describe('GET contact/', () => {
    it('should return a list of contacts', (done) => {
      const fakeContact = [{
        name: 'test',
        email: 'test@email.com',
      }];

      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub(),
      };

      response.status.withArgs(200).returns(response);

      contactModel.find = sinon.stub();
      contactModel.find.withArgs().resolves(fakeContact);

      const controller = contactController(contactModel);
      controller.all(request, response)
        .then(d => {
          sinon.assert.calledWith(response.send, fakeContact);          
        })
      done();
    });
  }); 
});
