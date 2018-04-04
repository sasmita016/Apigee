 
var PhoneNumber ;

var requestContent = context.getVariable("request.content");

var jsonObject= JSON.parse(requestContent); 

PhoneNumber = jsonObject.PhoneNumber;
print("PhoneNumber********"+PhoneNumber);
context.setVariable("PhoneNumber", PhoneNumber);

if(PhoneNumber == null || PhoneNumber.length == 0) {
    
context.setVariable("errorflag", "true");
context.setVariable("code", "400");
context.setVariable("errordetailmsg", "Bad Request : Invalid PhoneNumber");

}