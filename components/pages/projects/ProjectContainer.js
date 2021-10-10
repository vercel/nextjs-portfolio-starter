import { Component } from "react";
import projectJson from '../../../data/projects.json';
import styled from "styled-components";
import { Project } from "./Project";
import { device } from "../../../helpers/MediaQueryHelper";
import next from "next";

const Container = styled.section`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProjectCounter = styled.p`
  font-size: 1em;
  @media ${device.lowerThanMobileM} {
    font-size: .8em;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`;

const NavigationButton = styled.img`
  cursor: pointer;
  width: 2em;
  margin-top: 1.25em !important;
  margin-bottom: 1.25em !important;

  @media ${device.lowerThanMobileM} {
    font-size: .8em;
  }
`

export class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  state = {
    projects: projectJson,
    selectedIndex: 0
  }

  next() {
    if (this.state.selectedIndex < this.state.projects.length - 1) {
      this.setState({
        selectedIndex: this.state.selectedIndex + 1
      });
    }
  }

  previous() {
    if (this.state.selectedIndex > 0) {
      this.setState({
        selectedIndex: this.state.selectedIndex - 1
      });
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <ProjectCounter> {this.state.selectedIndex + 1} of {this.state.projects.length} projects</ProjectCounter>
          <Navigation>
            <NavigationButton name="previous" className='next-image' src={'/images/icons/previous.png'} onClick={this.previous} />
            <NavigationButton name="next" className='next-image' src={'/images/icons/next.png'} onClick={this.next} />
          </Navigation>
        </Header>
        <Project project={this.state.projects[this.state.selectedIndex]} />
      </Container>
    );
  }
}

export default ProjectContainer;