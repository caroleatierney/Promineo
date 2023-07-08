// Unit test

// Happy path

// whenever we mention expect we mean chai.inspect
var expect = chai.expect

// describe takes a name for the unidd t test we are setting up and a function
describe('MyFunctions', function() {
    //  test do something function
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if the first parameter is not a string', function() {
            expect(function() {
                doSomething(5,5);
            }).to.throw(Error);
        });
    });
});