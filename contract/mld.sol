pragma solidity ^0.5.0;

// experimental
pragma experimental ABIEncoderV2;

contract myLittleDoctor {
    struct survey {
        uint16 surveyOrdNum;
        string createAt;
        string[] surveyNum;
        bool[] surveyResult;
    }

    struct research {
        survey[] surveys;
    }

    // address owner;
    mapping(string => research) private researchs;

    // constructor () public {
    //     // owner = msg.sender;
    // }

    function saveSurvey(
        uint16 surveyOrdNum,
        string memory cellNum,
        string memory createAt,
        string[] memory surveyNum,
        bool[] memory surveyResult
    ) public {
        survey memory newServey = survey({
            surveyOrdNum: surveyOrdNum,
            createAt: createAt,
            surveyNum: surveyNum,
            surveyResult: surveyResult
        });
        researchs[cellNum].surveys.push(newServey);
    }

    function querySurvey(string memory cellNum)
        public
        view
        returns (survey[] memory)
    {
        return researchs[cellNum].surveys;
    }
}
