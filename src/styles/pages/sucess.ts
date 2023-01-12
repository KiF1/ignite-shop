import styled from "styled-components";


export const SucessContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 656px;

  h1 {
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    color: ${(props) => props.theme.colors.secondary100};
  };

  p {
    font-size: ${({theme}) => theme.fontSize.xl};
    color: ${(props) => props.theme.colors.secondary100};
    max-width: 560px;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.4;
  };

  a {
    display: block;
    margin-top: 5rem;
    color: ${({theme}) => theme.colors.green500};
    font-size: ${({theme}) => theme.fontSize.lg};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${({theme}) => theme.colors.green300};
    }
  }

  @media (max-width: 992px){
    padding: 1rem;
  }
`

export const ImagesContainer = styled.section`
  display: flex;
  align-content: center;
  margin-bottom: 3rem;

  div + div{
    margin-left: calc(-140px / 2);
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 140px;
  height: 130px;
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.8);

  img {
    object-fit: contain;
    padding: 0.35rem;
  }
`