//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = "0x361ef71DA9D0F98C65Da22E5373AE654a09Eda78";
//use the ABI from your contract
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "cellNum",
        type: "uint16",
      },
      {
        name: "createAt",
        type: "string",
      },
      {
        name: "surveyNum",
        type: "uint16[]",
      },
      {
        name: "surveyResult",
        type: "bool[]",
      },
    ],
    name: "saveSurvey",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "patients",
    outputs: [
      {
        name: "",
        type: "uint16",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "patient",
        type: "uint16",
      },
    ],
    name: "querySurvey",
    outputs: [
      {
        components: [
          {
            name: "createAt",
            type: "string",
          },
          {
            name: "surveyNum",
            type: "uint16[]",
          },
          {
            name: "surveyResult",
            type: "bool[]",
          },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
module.exports = { address, abi };
