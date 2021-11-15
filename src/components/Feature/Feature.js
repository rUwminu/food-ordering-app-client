import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

//Svg
import EtoSvg from '../../assets/svg/eto.svg'
import FdSvg from '../../assets/svg/fd.svg'
import SpSvg from '../../assets/svg/sp.svg'

const featureData = [
  {
    id: 1,
    image: EtoSvg,
    title: 'Easy to Order',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
  {
    id: 2,
    image: FdSvg,
    title: 'Fastest Delivery',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
  {
    id: 3,
    image: SpSvg,
    title: 'Secure Payment',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
]

const Feature = () => {
  const [featureList, setFeatureList] = useState(featureData)

  return (
    <FetureContainer>
      <span className='title-span'>What We Serve</span>
      <h1 className='title'>
        Your Favorite Food
        <br />
        Delivery Partner
      </h1>
      <div className='feature-card-container'>
        {featureList &&
          featureList.map((x) => {
            const { id, image, title, body } = x

            return (
              <FeatureCard key={id}>
                <img
                  className={`feature-svg ${
                    id === 1 || id === 3 ? '' : ' -mt-12'
                  }`}
                  src={image}
                  alt=''
                />
                <h2>{title}</h2>
                <p>{body}</p>
              </FeatureCard>
            )
          })}
      </div>
    </FetureContainer>
  )
}

const FetureContainer = styled.div`
  ${tw`
    px-4
    pt-14
    pb-24
    lg:px-0
    mx-auto
    h-full
    w-full
    max-w-6xl
    flex
    flex-col
    items-center
    justify-between
  `}

  .title-span {
    ${tw`
        text-b-orange
        font-semibold
    `}
  }

  .title {
    ${tw`
        mt-6
        mb-14
        text-2xl  
        md:text-3xl
        lg:text-4xl
        text-center
        font-bold
    `}
  }

  .feature-card-container {
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        lg:justify-between
    `}
  }
`

const FeatureCard = styled.div`
  ${tw`
    w-full
    max-w-[24rem]
    mt-6
    mb-4
    flex
    flex-col
    items-center
    justify-between
  `}

  img {
    ${tw`
      object-cover
    `}
  }

  h2 {
    ${tw`
        mt-10
        mb-4
        text-xl
        font-bold
    `}
  }

  p {
    ${tw`
        w-[80%]
        text-center
        font-semibold
    `}
  }
`

export default Feature
