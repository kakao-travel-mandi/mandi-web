import ListWrapper from "../components/List/ListWrapper";
import ProfileTab from "../components/ProfileTab";
import set01 from "../assets/pngs/set01.png";
import set02 from "../assets/pngs/set02.png";
import set03 from "../assets/pngs/set03.png";
import RightArrowIcon from "../assets/svgs/RightArrow.svg?react";

const dummyUser = {
  name: "만디",
  img: "",
  description: "나는 만디인디",
};

const MypageList = [
  {
    id: 1,
    title: "나의 수집",
    icon: set01,
    contents: [
      {
        id: 0,
        title: "나의 뱃지",
        icon: <RightArrowIcon />,
      },
    ],
  },
  {
    id: 2,
    title: "이용 안내",
    icon: set02,
    contents: [
      {
        id: 0,
        title: "이용 약관",
        icon: <RightArrowIcon />,
      },
      {
        id: 1,
        title: "개인정보 처리방침",
        icon: <RightArrowIcon />,
      },
      {
        id: 2,
        title: "오픈소스 라이선스",
        icon: <RightArrowIcon />,
      },
      {
        id: 3,
        title: "앱 버전",
        icon: "0.0.01",
      },
    ],
  },
  {
    id: 3,
    title: "기타",
    icon: set03,
    contents: [
      {
        id: 0,
        title: "알림 설정",
        icon: <RightArrowIcon />,
      },
      {
        id: 1,
        title: "로그인 정보",
        icon: <RightArrowIcon />,
      },
    ],
  },
];

function MyPage() {
  const filteredMypageList = dummyUser.name
    ? MypageList
    : MypageList.filter((item) => item.id === 2);
  return (
    <>
      <ProfileTab user={dummyUser} />
      {filteredMypageList.map((item) => (
        <ListWrapper
          title={item.title}
          icon={item.icon}
          contents={item.contents}
          key={item.id}
        />
      ))}
    </>
  );
}

export default MyPage;
