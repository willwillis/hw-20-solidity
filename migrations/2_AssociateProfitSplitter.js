const AssociateProfitSplitter = artifacts.require("AssociateProfitSplitter");

module.exports = function(deployer) {

  const employee_one = 0x443B02B822a19BB96e64a9A673EdAA4027eD9b62;
  const employee_two =  0x00786bBE030bB178693687c22ffCE593F51D904c;
  const employee_three = 0x631A3f43ffA216f97B346C3F2C896853290F70bc;

  deployer.deploy(AssociateProfitSplitter, employee_one, employee_two, employee_three, {value: 1});
};
