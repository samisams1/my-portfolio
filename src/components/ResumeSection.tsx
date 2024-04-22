import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  items: string[];
}

const SectionContainer = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 12px;
`;

const ItemList = styled.ul`
  list-style-type: disc;
  margin-left: 24px;
`;

const ResumeSection: React.FC<Props> = ({ title, items }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <ItemList>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ItemList>
    </SectionContainer>
  );
};

export default ResumeSection;