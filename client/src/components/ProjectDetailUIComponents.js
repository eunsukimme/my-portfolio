import styled from "styled-components";

// 전체 컴포넌트를 담는 컨테이너
export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
// 텍스트 섹션
export const Section = styled.div`
  width: 56%;
  padding: 20px;

  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
// 텍스트 섹션 타이틀
export const SectionTitle = styled.div`
  padding-bottom: 16px;
  font-size: 1.8rem;
  font-weight: regular;
`;
// 텍스트 섹션 내용
export const SectionDescription = styled.div`
  padding: 10px 0px;
  font-size: 1.1rem;
  line-height: 1.8rem;
`;
// 이미지를 래핑하는 섹션
export const ImageContainer = styled.div`
  width: 80%;
  padding: 40px 20px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const MultipleImageContainer = styled(ImageContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.direction === "row" ? "row" : "column")}
  justify-content: center;
  align-items: center;
`;
// 이미지 div
export const Image = styled.div`
  width: 100%;
  min-height: 300px;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 500px) {
    min-height: 200px;
  }
`;
export const SmallImage = styled(Image)`
  width: 200px;
  min-height: 180px;
  margin: 40px;

  @media (max-width: 700px) {
    width: 140px;
    min-height: 100px;
    margin: 20px;
  }
  @media (max-width: 500px) {
    width: 100px;
    min-height: 80px;
    margin: 10px;
  }
`;
// Intro
export const IntroSection = styled(Section)`
  width: 80%;
  height: 600px;
  padding-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 700px) {
    padding-top: 100px;
  }
`;
export const IntroMain = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const IntroTitle = styled(SectionTitle)`
  padding-bottom: 20px;
  font-size: 3rem;
  font-weight: regular;
  border-bottom: #ddd solid 1px;
`;
export const IntroDate = styled.div`
  width: 100%;
  color: #666666;
  margin: 10px 0px 25px 0px;
  display: flex;
  justify-content: space-between;
`;
export const IntroImageContainer = styled(ImageContainer)`
  width: 50%;
  padding: 0px;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
// main
export const MainImageContainer = styled(ImageContainer)`
  height: 730px;

  @media (max-width: 900px) {
    height: 500px;
  }
  @media (max-width: 700px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
`;
