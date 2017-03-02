import React from 'react'
import styled from 'styled-components'
import TimeRemaining from './TimeRemaining'

const Main = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  background: #bdf;
  padding: 1rem;
  height: calc(100vh - 5rem);
  overflow-x: scroll;
`

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
`

const Footer = styled.div`
  position: fixed;
  width: 100%;
  height: 2rem;
  padding: 1rem 0;
  bottom: 0;
  left: 0;
  background: #fff;
  color: #999;
  box-shadow: 0 -0.2rem 1rem rgba(0, 0, 0, 0.05);
`

const Child = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.05);
`

const Center = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
`

const Progress = styled.div`
  width: 100%;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
`

const ProgressBar = styled.div`
  background: rgb(85, 85, 119);
  border-radius: 0.5rem;
  width: ${p => p.percent}%;
  height: 0.5rem;
`

module.exports = ({ children, state, length }) => (
  <Main className="main">
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
    <Footer>
      <Center>
        <Progress>
          <ProgressBar
            percent={Math.ceil(100*(state.index/(length)))}
          />
        </Progress>
        <p>
          Progress: {Math.ceil(100*(state.index/(length)))}%
          <TimeRemaining />
        </p>
      </Center>
    </Footer>
  </Main>
)
