import React from 'react'

import {
  HomeContainer,
  TitleContainer,
  Title1,
  Title2,
  Entry,
  Description,
  DescriptionContainer,
  ResumeWrapper,
  DownloadResume
} from './home.style';

const Home = () => {
  return (
    <HomeContainer id="home" className='container'>
      <Entry>Hi <span role='img' aria-labelledby='imoji'>👋</span> , my name is</Entry>

      <TitleContainer>
      <Title1>
        Dedaldino Papelo
      </Title1>
      <Title2>
        Software Engineer
      </Title2>
      </TitleContainer>

      <DescriptionContainer>
        <Description>
        Professional specialist in systems management with extensive experience in IT technical support, software development and database management Systems.
        </Description>
      </DescriptionContainer>

      <ResumeWrapper>
        <DownloadResume className='btn-download' target='_blank' href={process.env.PUBLIC_URL + "/Resume.pdf"}>
          Download Resume
        </DownloadResume>
      </ResumeWrapper>

    </HomeContainer>
  )
}

export default Home
