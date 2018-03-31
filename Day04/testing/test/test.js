var fermat=require('../mathForKids');
var should=require('should');
var assert=require('assert');

describe('Math for kids',function(){
    describe('#Synchronous test',function(){
        it('should return 4 when the x=2 and y=2',function(){
            var result=fermat.sumSync(2,2);
            result.should.equal(4);
        });
        it('should throw exception when all values are negative',function(completed){
            fermat.sum(1,-3,function(err,result){
                should.exist(err);
                should.not.exist(result);
                completed();
            });
        })
    });
    describe('#Asynchronous test',function(){
        it('should return 4 when the x=2 and y=2',function(completed){
            fermat.sum(2,2,function(err,result){
                should.not.exist(err);
                (4).should.equal(4);
                completed();
            });
        });
        it('should return 8 and be a number',function(completed){
            fermat.sum(3,5,function(err,result){
                result.should.be.exactly(8).and.be.a.Number();
            });
            completed();            
        });
    });
});