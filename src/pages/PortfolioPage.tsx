import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 16px;
`;

const Header = styled.div`
  text-align: center;
  margin-top: 48px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: ${(props) => props.theme.primaryColor};
`;

const Subtitle = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryColor};
`;

const Section = styled.section`
  width: 100%;
  padding: 48px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const PortfolioPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Menu>
          <MenuLink to="/">
            Home
          </MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </Menu>
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