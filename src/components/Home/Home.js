import React from 'react'
import './style.css';
import {HomeContainer,
        Title1,
        Title2,
        Entry,
        Description,
        DescriptionContainer,
        ResumeWrapper,
        DownloadResume
      }from './home.style';

const Home = () => {

  return (
    <HomeContainer id="home" className='container'>
      <Entry>Hi <span role='img' aria-labelledby='imoji'>👋</span> , my name is</Entry>

    
        <Title1>
          Dedaldino Papelo      
          </Title1>
          <Title2>
          Computer Engineer and Software Developer
          </Title2>
          

      <DescriptionContainer>
        <Description>
        Iam an Enthusiastic about information technology and computer science, always driven by the desire to improve. NODEJS | REACTJS | C#.NET | SQL
        </Description>
        </DescriptionContainer>

        <ResumeWrapper>
          <DownloadResume className='btn-download' href={process.env.PUBLIC_URL + "/meu curriculo EN.pdf"}>
          Download Resume 
          </DownloadResume>
        </ResumeWrapper>

    </HomeContainer>
  )
}

export default Home
