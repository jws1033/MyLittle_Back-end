//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xA23F95518a5762d69Dc66C23b4204C4ea32B07B4';
//use the ABI from your contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "surveyOrdNum",
				"type": "uint16"
			},
			{
				"name": "cellNum",
				"type": "string"
			},
			{
				"name": "createAt",
				"type": "string"
			},
			{
				"name": "surveyNum",
				"type": "string[]"
			},
			{
				"name": "surveyResult",
				"type": "bool[]"
			}
		],
		"name": "saveSurvey",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "cellNum",
				"type": "string"
			}
		],
		"name": "querySurvey",
		"outputs": [
			{
				"components": [
					{
						"name": "surveyOrdNum",
						"type": "uint16"
					},
					{
						"name": "createAt",
						"type": "string"
					},
					{
						"name": "surveyNum",
						"type": "string[]"
					},
					{
						"name": "surveyResult",
						"type": "bool[]"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
module.exports={address, abi};
