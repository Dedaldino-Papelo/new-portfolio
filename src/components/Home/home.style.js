import styled, {css} from "styled-components";


  const TitleStyle = css`
    font-weight:bold;
    font-size: 3em;

    @media only screen and (max-width: 767px) {
        font-size: 20px;
  `

export const HomeContainer = styled.section`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
`

export const Entry = styled.h1`
    margin: 0px 0px 30px 4px;
    color: #58d8d8;
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
    font-weight: 400;
`

export const TitleContainer = styled.div`
    border: 2px solid red;
}

`
export const Title1 = styled.h2`
  ${TitleStyle}

`
export const Title2 = styled.h3`
    ${TitleStyle}

`

export const DescriptionContainer = styled.div`
    max-width: 500px;
}
`

export const Description = styled.p`
    font-size: 1.0625em;
    line-height: 25.5px;
    margin: 20px 0px 0px;
`

export const ResumeWrapper = styled.div`
    margin-top: 50px;
`

export const DownloadResume = styled.a`
    background-color: transparent;
    border: 1px solid #58d8d8 
`