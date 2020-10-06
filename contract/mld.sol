pragma solidity ^0.5.0;

// experimental
pragma experimental ABIEncoderV2;

contract myLittleDoctor {
    struct survey {
        string createAt;
        uint16[] surveyNum;
        bool[] surveyResult;
    }

    struct research {
        survey[] surveys;
    }

    address owner;
    uint16[] public patients;
    mapping(uint16 => research) private researchs;

    constructor() public {
        owner = msg.sender;
    }

    function saveSurvey(
        uint16 cellNum,
        string memory createAt,
        uint16[] memory surveyNum,
        bool[] memory surveyResult
    ) public {
        bool hasUser = false;

        for (uint16 i = 0; i < patients.length; i++) {
            if (patients[i] == cellNum) {
                hasUser = true;
                break;
            }
        }
        if (!hasUser) {
            patients.push(cellNum);
        }

        survey memory newServey = survey({
            createAt: createAt,
            surveyNum: surveyNum,
            surveyResult: surveyResult
        });
        researchs[cellNum].surveys.push(newServey);
    }

    function querySurvey(uint16 patient) public view returns (survey[] memory) {
        return researchs[patient].surveys;
        // return (researchs[patient].cellNum, researchs[patient].creatAt, researchs[patient].surveyNum, researchs[patient].surveyResult);
    }
}
