import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

interface Theme {
  primaryColor: string;
  secondaryColor: string;
}

const theme: Theme = {
  primaryColor: '#3498db',
  secondaryColor: '#2c3e50',
};

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'project2.jpg',
  },
];

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Subtitle = styled.h2``;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 16px;
`;

const PortfolioPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Title>Samson Mamsuhet</Title>
          <Subtitle>Software Engineer</Subtitle>
        </Header>
        <Section>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsContainer>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ProjectsContainer>
        </Section>
        <Footer>
          Created by Samson Mamsuhet | 8 years of experience in software development
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default PortfolioPage;