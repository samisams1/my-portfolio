import React from 'react';
import styled from 'styled-components';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

interface Props {
  project: Project;
}

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin-top: 12px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #777;
`;

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <CardContainer>
      <Image src={project.imageUrl} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </CardContainer>
  );
};

export default ProjectCard;