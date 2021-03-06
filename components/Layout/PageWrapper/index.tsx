import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'
// import Footer  from '../Footer';
// import Header from '../Header';
// import Container from 'components/Layout/Container';
// import Button from 'components/Button';

// Styles
const Root = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`

const Content = styled.div`
  position: relative;
  /*//? why tho? 👇 */
  /* margin-top: 8rem; */
`

interface Props {
  children: React.ReactNode
}

// Components
const PageWrapper: React.FC<Props> = ({ children }) => (
  <Root>
    <Content>{children}</Content>
  </Root>
)

// Props
PageWrapper.propTypes = {
  children: PropTypes.node,
}

PageWrapper.defaultProps = {
  children: null,
}

export default PageWrapper
