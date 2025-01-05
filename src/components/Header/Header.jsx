import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { COLORS, FAMILIES, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (<>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <MainHeader>
          <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
          <Logo />
          <SubscribeButtonWrapper>
            <SubscribeButton>Subscribe</SubscribeButton>
            <AlreadyMemberLink>Already a subscriber?</AlreadyMemberLink>
          </SubscribeButtonWrapper>
        </MainHeader>
      </DesktopHeader>
  </>)
};

const SubscribeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubscribeButton = styled.button`
  background-color: ${COLORS.primary};;
  padding: 8px;
  border-radius: 4px;
  color: ${COLORS.white};
  text-transform: uppercase;
  font-family: ${FAMILIES.sansSerif};
  font-weight: bold;
  width: 100%;
  text-align: center;
`

const AlreadyMemberLink = styled.a`
  font-family: ${FAMILIES.serif};
  font-style: italic;
  color: ${COLORS.gray};
  padding-top: 4px;
  text-decoration: underline;
`

const DesktopHeader = styled.header`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;

  }
`

const MobileHeader = styled.header`
    @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

    @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;

  }
`;

export default Header;
