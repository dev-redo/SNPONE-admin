import { atom, selector } from "recoil";
import { Applicant, FilterDashboardApplicantData } from "../types/dashboard";

// TODO: 비동기 데이터 쿼리를 이용해 데이터 fetch
const applicantAllData = atom({
  key: "applicantAllData",
  default: [] as Applicant[],
});

const filteredApplicantState = atom({
  key: "filteredApplicantState",
  default: {
    name: "",
    sort: "asc",
    address: "전국", // TODO: 임의로 default를 전국으로 해둠 -> 논의 후 수정
    recruitment: 1,
    isChecked: true,
  } as FilterDashboardApplicantData,
});

// TODO: 필터링 함수들을 따로 빼줄지 고민하기
const filteredApplicantData = selector({
  key: "filteredApplicantData",
  get: ({ get }) => {
    const applicantData = get(applicantAllData);
    const filterState = get(filteredApplicantState);

    // TODO: 사용자 이름의 일부만 일치해도 보여줄 수 있게끔 수정
    const filterByName = ({ name }: Applicant) => name === filterState.name;

    const filterByCheck = ({ isChecked }: Applicant) =>
      isChecked === filterState.isChecked;

    const filterByRecruitment = ({
      DateOfApplication: applicantDate,
    }: Applicant) => {
      const { recruitment } = filterState;
      // TODO: 특정날짜 DATE 생성
      //       - recuitment가 1이면 특정날짜보다 이후에 지원한 지원자들만 filter
      //       - recuitment가 2면 특정날짜보다 이전에 지원한 지원자들만 filter
    };

    // TODO: 현재 dummy의 date로는 작동 X -> 수정 필요
    const sortByDate = (
      { DateOfApplication: prevDate }: Applicant,
      { DateOfApplication: currDate }: Applicant,
    ) => {
      const { sort } = filterState;
      const prevDateTime = new Date(prevDate).getTime();
      const currDateTime = new Date(currDate).getTime();

      if (sort === "asc") {
        return currDateTime - prevDateTime;
      }
      return prevDateTime - currDateTime;
    };

    const filteredApplicantList = applicantData
      .filter(filterByName)
      .filter(filterByRecruitment)
      .filter(filterByCheck)
      .sort(sortByDate);

    if (filterState.address === "전국") {
      return filteredApplicantList;
    }

    return filteredApplicantList.filter(
      ({ address }: Applicant) => address === filterState.address,
    );
  },
});
