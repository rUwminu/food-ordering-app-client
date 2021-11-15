import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useSearchParams } from 'react-router-dom'

import BannerImg from '../../assets/banner-img/about-banner.png'

const Info = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get('name')

  return (
    <InfoContainer>
      <div className='banner-img' />

      <div className='inner-container'>
        <NavigationContainer>
          <h1>Quick Links</h1>
          <Link to='?name=about' className='link-item'>
            About Us
          </Link>
          <Link to='?name=team' className='link-item'>
            Our Team
          </Link>
          <Link to='?name=policy' className='link-item'>
            Private Policy
          </Link>
          <Link to='?name=term' className='link-item'>
            Terms and Conditions
          </Link>
        </NavigationContainer>
        {name && name === 'about' && (
          <ParaContainer>
            <h1>About Us</h1>
            <h3>What is Foodie?</h3>
            <p>
              Foodie is Malaysia's most convenient online food ordering site. It
              connects people with the best restaurants around them.
            </p>
            <p>
              Delivering in Delhi, Bangalore, Chennai, Mumbai, Hyderabad and
              over 100 other cities, foodpanda has the widest reach in India. We
              believe food is a pleasure and food ordering should be fast and
              definitely a fun experience.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem
              maxime est commodi laboriosam dolores, enim quia alias. Tenetur
              voluptate quasi praesentium aut, delectus, nostrum animi iure
              voluptatem, cum alias corrupti mollitia obcaecati enim vitae rem
              deleniti eveniet neque nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum
              voluptates eum consequuntur repellat ipsum earum veniam, commodi
              culpa inventore dolores reprehenderit qui, nisi fuga eos, numquam
              delectus recusandae voluptatibus mollitia itaque! Dicta, illo
              similique doloribus perspiciatis fugit soluta nam aliquid quaerat
              blanditiis expedita alias fuga ad ab natus! Iure!
            </p>
          </ParaContainer>
        )}
        {name && name === 'team' && (
          <ParaContainer>
            <h1>Our Team</h1>
            <h3>Innovatives And Creative</h3>
            <p>
              Foodie is Malaysia's most convenient online food ordering site. It
              connects people with the best restaurants around them.
            </p>
            <p>
              Delivering in Delhi, Bangalore, Chennai, Mumbai, Hyderabad and
              over 100 other cities, foodpanda has the widest reach in India. We
              believe food is a pleasure and food ordering should be fast and
              definitely a fun experience.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem
              maxime est commodi laboriosam dolores, enim quia alias. Tenetur
              voluptate quasi praesentium aut, delectus, nostrum animi iure
              voluptatem, cum alias corrupti mollitia obcaecati enim vitae rem
              deleniti eveniet neque nobis.
            </p>
          </ParaContainer>
        )}
        {name && name === 'policy' && (
          <ParaContainer>
            <h1>Our Policy</h1>
            <h3>Private Policy</h3>

            <div className='rules-list'>
              <h4>What information do we collect?</h4>
              <p className='ml-4 list-item'>
                We collect information from you when you fill out a form. When
                ordering or registering on our site, as appropriate, you may be
                asked to enter your: name, e-mail address, mailing address,
                phone number or credit card information. You may, however, visit
                our site anonymously.
              </p>
            </div>

            <div className='rules-list'>
              <h4>What do we use your information for?</h4>
              <p className='ml-4 list-item'>To personalize your experience</p>
              <p className='ml-4 list-item'>To improve our website</p>
              <p className='ml-4 list-item'>To improve customer service</p>
              <p className='ml-4 list-item'>
                To administer a contest, promotion, survey or other site feature
              </p>
            </div>

            <div className='rules-list'>
              <h4>How do we protect your information</h4>
              <p className='ml-4 list-item'>
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                enter, submit, or access your personal information.
              </p>
            </div>

            <div className='rules-list'>
              <h4>Do we disclose any information to outside parties?</h4>
              <p className='ml-4 list-item'>
                We do not sell, trade, or otherwise, transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided
                to other parties for marketing, advertising, or other uses.
              </p>
            </div>
          </ParaContainer>
        )}
        {name && name === 'term' && (
          <ParaContainer>
            <h1>Term And Condition</h1>
            <h3>Rules Set by Us</h3>

            <div className='rules-list'>
              <h4>What information do we collect?</h4>
              <p className='ml-4 list-item'>
                We collect information from you when you fill out a form. When
                ordering or registering on our site, as appropriate, you may be
                asked to enter your: name, e-mail address, mailing address,
                phone number or credit card information. You may, however, visit
                our site anonymously.
              </p>
            </div>

            <div className='rules-list'>
              <h4>What do we use your information for?</h4>
              <p className='ml-4 list-item'>To personalize your experience</p>
              <p className='ml-4 list-item'>To improve our website</p>
              <p className='ml-4 list-item'>To improve customer service</p>
              <p className='ml-4 list-item'>
                To administer a contest, promotion, survey or other site feature
              </p>
            </div>

            <div className='rules-list'>
              <h4>How do we protect your information</h4>
              <p className='ml-4 list-item'>
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                enter, submit, or access your personal information.
              </p>
            </div>

            <div className='rules-list'>
              <h4>Do we disclose any information to outside parties?</h4>
              <p className='ml-4 list-item'>
                We do not sell, trade, or otherwise, transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided
                to other parties for marketing, advertising, or other uses.
              </p>
            </div>
          </ParaContainer>
        )}
      </div>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  ${tw`
    h-full
    w-full
    pt-28
    pb-10
  `}

  .banner-img {
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    ${tw`
        h-[10rem]
        md:h-[450px]
        max-h-[10rem]
        md:max-h-[450px]
        w-full

        transition-all
        duration-500
        ease-in-out
    `}
  }

  .inner-container {
    ${tw`
        relative
        pt-0
        lg:pt-16
        pb-16
        px-4
        lg:px-0
        mx-auto
        w-full
        max-w-6xl
        flex
        flex-col
        items-start
        justify-start
    `}
  }
`

const NavigationContainer = styled.div`
  ${tw`
    inline-flex
    flex-col
    items-start
    justify-start
    lg:absolute
    top-0
    right-0
    -mt-20
    lg:mt-0
    lg:-translate-y-1/3
    w-full
    lg:max-w-xs
    bg-white

    transition-all
    duration-200
    ease-in-out
  `}

  h1 {
    ${tw`
        w-full
        py-4
        px-4
        text-lg
        md:text-xl
        border-b
    `}
  }

  .link-item {
    ${tw`
        w-full
        py-3
        px-4
        border-b

        transition
        duration-200
        ease-in-out
    `}

    :hover {
      ${tw`
        bg-opacity-10
        bg-gray-600
      `}
    }
  }
`

const ParaContainer = styled.div`
  ${tw`
    mt-6
    lg:mt-0
    w-full
    md:max-w-3xl
    lg:max-w-[52rem]
  `}

  h1 {
    ${tw`
        mb-4
        text-lg
        md:text-xl
        lg:text-2xl
        font-semibold
    `}
  }

  h2 {
    ${tw`
        
    `}
  }

  h3 {
    ${tw`
        mb-6
        md:text-lg
    `}
  }

  h4 {
    ${tw`
        mb-3
        font-semibold
    `}
  }

  p {
    ${tw`
        mb-4
    `}
  }

  .rules-list {
    ${tw`
        mb-8
    `}
  }
`

export default Info
