import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import {
  Hero,
  Feature,
  Intro,
  Crmenu,
  RestaurantList,
} from '../../components/index'

const Home = () => {
  return (
    <MainContainer>
      <Hero />
      <Feature />
      <Intro />
      <Crmenu />
      <RestaurantList />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    w-full
  `}
`

export default Home
