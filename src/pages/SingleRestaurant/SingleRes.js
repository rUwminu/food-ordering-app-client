import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  singleRestaurantDetailsRequest,
  recipesListRequest,
} from '../../redux/actions/restaurantAction'

import {
  restaurantData,
  recipesData,
} from '../../assets/restaurantData/resData'

//Material ui Icons
import { Room, Favorite, Share } from '@mui/icons-material'

const SingleRes = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const resList = useSelector((state) => state.resList)
  const { singleRes, loading: resLoading, singleResError } = resList

  const rescipesList = useSelector((state) => state.rescipesList)
  const { recipes, loading: recLoading, recipesError } = rescipesList

  useEffect(() => {
    if (id && restaurantData) {
      const singleResDetail = restaurantData.find((x) => x.id === parseInt(id))
      const recipesList = recipesData.filter(
        (x) => x.restaurantID === parseInt(id)
      )

      dispatch(singleRestaurantDetailsRequest(singleResDetail))
      dispatch(recipesListRequest(recipesList))
    }
  }, [id, restaurantData])

  //console.log(singleRes)
  //console.log(recipes)

  return (
    <MainContainer>
      <div className='top-container'>
        <div className='inner-container top-inner'>
          <div className='main-item'>
            <div className='img-box'>
              <img src={singleRes.image} />
            </div>

            <div className='info-box'>
              <h1>{singleRes.name}</h1>
              <div className='location-box'>
                <Room className='icon' />
                <span>
                  {singleRes.location}, {singleRes.state}
                </span>
              </div>
              <div className='operation-box'>
                <span>
                  Restaurant Operating Time - {singleRes.openTime} to{' '}
                  {singleRes.closeTime}
                </span>
              </div>
              <div className='general-box'>
                <div className='general-item'>
                  <h2>{singleRes.deliveryTime} HOUR</h2>
                  <span>Delivery Time</span>
                </div>
                <div className='general-item'>
                  <h2>PAYMENT</h2>
                  <span>Online Payment</span>
                </div>
                <div className='general-item'>
                  <h2>${singleRes.avgCost.toFixed(2)}</h2>
                  <span>Avg Cost</span>
                </div>
              </div>
            </div>
          </div>
          <div className='share-box'>
            <div className='social-btn like-btn'>
              <Favorite />
              Favorite
            </div>

            <div className='social-btn share-btn'>
              <Share />
              Share
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    pt-28
    pb-16
    h-full
    w-full
    bg-gray-100
  `}

  .top-container {
    ${tw`
      py-8
      w-full
      bg-b-orange
      bg-opacity-10
    `}
  }

  .inner-container {
    ${tw`
        mx-auto
        px-4
        lg:px-0
        h-full
        w-full
        max-w-6xl
    `}
  }

  .top-inner {
    ${tw`
      h-full
      flex
      flex-col
      lg:flex-row
      items-start
      justify-center
    `}

    .main-item {
      ${tw`
        w-full
        flex
        flex-col
        sm:flex-row
      `}
    }

    .img-box {
      ${tw`
        w-full
        sm:w-80
      `}

      img {
        ${tw`
        h-full
        w-full
        object-cover
      `}
      }
    }

    .info-box {
      ${tw`
        sm:ml-6
        flex-grow
      `}

      h1 {
        ${tw`
          text-xl
          md:text-2xl
          font-semibold
        `}
      }

      .location-box {
        ${tw`
          flex
          items-center
          justify-start
          text-sm
          text-gray-600
        `}

        .icon {
          ${tw`
            w-5
            h-5
          `}
        }
      }

      .operation-box {
        ${tw`
          pt-6
          pb-8
          text-gray-700
        `}
      }

      .general-box {
        ${tw`
          flex
          flex-wrap
          items-center
          justify-between
        `}

        .general-item {
          ${tw`
            flex
            flex-col
            items-start
            justify-center
          `}

          h2 {
            ${tw`
              font-semibold
            `}
          }

          span {
            ${tw`
              text-sm
              text-gray-600
            `}
          }
        }
      }
    }

    .share-box {
      ${tw`
        mt-4
        lg:mt-0
        lg:ml-6
        w-full
        max-w-xs
      `}

      .social-btn {
        ${tw`
          flex
          items-center
          justify-center
          w-48
          mb-4
          py-2
          border
          border-gray-400
          text-gray-400
        `}
      }
    }
  }
`

export default SingleRes
