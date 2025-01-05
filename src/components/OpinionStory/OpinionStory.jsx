import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <>
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
    <Divider />
    </>
  );
};

const Divider = styled.hr`
  size: 1px;
  width: 100%;
  margin: 16px 0px;
  padding-left: 32px;
  border: none;
  border-top: 1px solid ${COLORS.gray[300]};

  &:last-of-type {
    display: none;
  }

  @media ${QUERIES.tabletOnly} {
      display: none;
  }
`

const Wrapper = styled.article`
  color: var(--color-gray-900);

  @media not (${QUERIES.tabletOnly}) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
