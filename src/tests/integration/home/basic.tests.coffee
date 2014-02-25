# Copied from protractor tests for demo purposes
chai = require("chai")
chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
expect = chai.expect

describe "protractor library", ->
  it "should expose the correct global variables", ->
    expect(protractor).to.exist
    expect(browser).to.exist
    expect(element).to.exist
    expect($).to.exist
    return
