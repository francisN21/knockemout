import styled from "styled-components";

export const Img = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  width: 405px;
  height: 334px;
  @media ${(props) => props.theme.breakpoints.lg} {
    visibility: hidden;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    visibility: hidden;
  }
`;

export const SectionRight = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
