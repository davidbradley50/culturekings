import React, { Fragment, Component } from 'react';
import axios from 'axios';
import CardLayout from '@app/components/layout/card-layout';
import {
  Card, Section, Container, Header, Spacer, Loading,
} from '@app/components/static/index';

class Index extends Component {
  state = {
    repos: null,
    suggestions: null,
    filterString: '',
  }

  componentDidMount() {
    this.getRepos('culturekings');
  }

  getSuggestions = (repos) => {
    const list = [];
    repos.map(repo => list.push(repo.name));
    return list;
  }

  getRepos = (user) => {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then((res) => {
        const repos = res.data;
        const suggestions = this.getSuggestions(repos);
        this.setState({ repos, suggestions });
      });
  }

  render() {
    const { repos, suggestions, filterString } = this.state;
    return (
      <Fragment>
        <Section
          bg="alfa"
          fg="bravo"
          top={{ default: 'alfa' }}
          bottom={{ default: 'bravo' }}
        >
          <Container>
            <Header
              items={suggestions}
              runFilter={(text) => {
                this.setState({ filterString: text });
              }}
            />
          </Container>
        </Section>
        <Spacer top="elkhound" />
        <Container>
          { repos ? (
            <CardLayout>
              {repos.filter(repo => repo.name.toLowerCase().includes(
                filterString.toLowerCase(),
              )).map(repo => (
                <Card
                  key={repo.created_at}
                  name={repo.name}
                  created={repo.created_at}
                  description={repo.description}
                  fork={repo.fork}
                  stargazers={repo.stargazers_url}
                  github={repo.html_url}
                />
              ))}
            </CardLayout>
          ) : <Loading /> }
        </Container>
        <Spacer top="alfa" />
      </Fragment>
    );
  }
}

export default Index;
