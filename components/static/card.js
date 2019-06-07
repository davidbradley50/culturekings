import React from 'react';
import styled from 'styled-components';
import theme from '@app/library/theme';
import PropTypes from 'prop-types';
import TickSVG from '@app/components/static/svgs/tick';
import CrossSVG from '@app/components/static/svgs/cross';
import GithubSVG from '@app/components/static/svgs/github';
import moment from 'moment';
import {
  Spacer,
} from '@app/components/static/index';

const Block = styled.div`
  ${theme('textStyles.alfa')}
  background-color: rgba(#000000, 0.30);
  border-radius: 1%;
  border: 1px solid black;
  margin-top: 25px;
  max-width: 500px;
  min-width: 350px;
  padding: 25px;
  width: 100%;
`;

const Name = styled.h3`
  ${theme('textStyles.charlie')}
`;

const Created = styled.span`
`;

const Description = styled.p`
`;

const Stargazer = styled.a`
  display: block;
`;

const TickIcon = styled(TickSVG)`
  height: 40px;
  width: 20px;
`;

const CrossIcon = styled(CrossSVG)`
  height: 40px;
  width: 20px;
`;
const Github = styled.a`
  display: block;
`;

const GithubIcon = styled(GithubSVG)`
  height: 60px;
  width: 40px;
`;

const Fork = styled.div`
  display: flex;
  align-items: center;
`;

const ForkLabel = styled.p`
  margin-right: 10px;
`;

const LinkWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const formatDate = (date) => {
  const from = moment(date);
  const to = moment(new Date());
  const diffDuration = moment.duration(from.diff(to));
  return `Created: ${diffDuration.years()} years, ${diffDuration.months()} months, ${diffDuration.days()} days and ${diffDuration.hours()} hours ago.`;
};

const Card = ({
  name, created, description, fork, stargazers, github,
}) => (
  <Block>
    <Name>
      {name}
    </Name>
    <Spacer top="bravo" />
    <Description>
      {description}
    </Description>
    <Spacer top="bravo" />
    <Created>
      {formatDate(created)}
    </Created>
    <Spacer top="echo" />
    <LinkWrapper>
      <Stargazer href={stargazers} target="_blank">
          Stargazer
      </Stargazer>
      <Github href={github} target="_blank">
        <GithubIcon />
      </Github>
      <Fork>
        <ForkLabel>FORK:</ForkLabel>
        {fork ? (
          <TickIcon />
        ) : (
          <CrossIcon />
        )}
      </Fork>
    </LinkWrapper>
  </Block>
);

Card.propTypes = {
  name: PropTypes.string,
  created: PropTypes.string,
  description: PropTypes.string,
  fork: PropTypes.bool,
  stargazers: PropTypes.string,
  github: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  created: '',
  description: '',
  fork: false,
  stargazers: '',
  github: '',
};

export default Card;
