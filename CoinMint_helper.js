// Developed by : Bloque Labs Private Limited © 2019
// 
// Developer : 
// Vikas Singh 

var abi;
var myContractInstance;
var MyContract;
var web3;
function startApp(abi2,MyContract2,myContractInstance2, _web3){
		console.error("startup");
	    abi=abi2;
	    MyContract=MyContract2;
		myContractInstance=myContractInstance2;
		web3 = _web3;
}

function mintCoin(){ 
	var mintCoinAdd = document.getElementById('mintCoinAdd').value;
	var amount = document.getElementById('amount').value;
	var mintCoin = myContractInstance.mint(mintCoinAdd,amount,function(err,res){
		if(err){
			console.log(err);
		} else {
			console.log(res);
		}
	});
	console.log("vikas");
		// var event = myContractInstance.CoinMinted({to: mintCoinAdd},function(error, result) {
		var event = myContractInstance.CoinMinted({},function(error, result) {
		  if (!error) {
			    var msg = result.args.to +" received " + (result.args.amount) + " fresh new coins " ;
			    document.getElementById('callback').innerHTML = ""+msg;
			    console.log(msg);

		  }
		  else {
			  console.error(error);
		  } 
	});
}

function sendCoin(){

	var receiverAdd = document.getElementById('receiverAdd').value;
	var amountToSend = document.getElementById('amountToSend').value;
	var sendCoin = myContractInstance.send(receiverAdd,amountToSend,function(err,res){
		if(err){
			console.log(err);
		} else {
			console.log(res);
		}
	});
	// ,to: "0x8a3C6bAD5C01E3389d5732A5682d63716bf16063"
	// to use any filters, please make sure to put INDEXED keyword in front of the event parameters
//  var event = myContractInstance.Sent({from: web3.eth.accounts[0], to : "0x80fFD46baBBeB0b533996489334076aF4101dA61"},function(error, result) {
	var event = myContractInstance.Sent({},function(error, result) {
		  if (!error) {
			    var msg = result.args.from +" sent  " + result.args.amount + " coins to " + result.args.to;
			    document.getElementById('callback1').innerHTML = ""+msg;
			    console.log(msg);

		  }
		  else {
			  console.error(error);
		  } 
	});
}

function checkBalance(){
	var checkBalAdd = document.getElementById('checkBalAdd').value;
	var sendCoin = myContractInstance.balances(checkBalAdd,function(err,res){
		if(err){
			console.log(err);
		} else {
			document.getElementById('balanceCallback').innerHTML = ""+res;
			console.log(res);
		}
	});
}

