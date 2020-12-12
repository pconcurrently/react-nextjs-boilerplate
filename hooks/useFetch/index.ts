/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useReducer } from 'react'

import defaultAxios, { AxiosRequestConfig, Method } from 'axios'

import { initialResponse, responseReducer, actionTypes } from './reducers'

const { CancelToken } = defaultAxios

type Request = {
  axios?: typeof defaultAxios
  url: string
  method: Method
  options?: AxiosRequestConfig
  trigger?: any
  customHandler?: (error: any, response: any) => void
  delay?: number
}

/**
 *
 * @param  {AxiosStatic} axios Optional Axios instance
 * @param  {string} url url of the api call
 * @param  {Method} method rest api method
 * @param  {AxiosRequestConfig} options Axios configurations
 * @param  {any} trigger trigger of api call
 * @param  {Function} customHandler custom handler callback
 * @return { response: any, error: any, loading: boolean }
 **/

const useFetch = ({
  axios = defaultAxios,
  url,
  method = 'get',
  options = {},
  trigger,
  customHandler,
  delay,
}: Request) => {
  const [results, dispatch] = useReducer(responseReducer, initialResponse)
  const [innerTrigger, setInnerTrigger] = useState(0)

  let outerTrigger = trigger
  try {
    outerTrigger = trigger ? JSON.stringify(trigger) : ''
  } catch (err) {
    //
  }

  const handler = (error: any, response: any) => {
    if (customHandler) {
      customHandler(error, response)
    }
  }

  useEffect(() => {
    if (!url) return
    // ONLY trigger by query
    if (typeof outerTrigger === 'undefined' && !innerTrigger) return

    handler(null, null)
    dispatch({ type: actionTypes.INIT })

    const source = CancelToken.source()

    setTimeout(() => {
      axios({
        url,
        method,
        ...options,
        cancelToken: source.token,
      })
        .then((response) => {
          handler(null, response)
          dispatch({ type: actionTypes.SUCCESS, payload: response })
        })
        .catch((error) => {
          handler(error, null)
          if (!defaultAxios.isCancel(error)) {
            dispatch({ type: actionTypes.FAIL, payload: error })
          }
        })
    }, delay || 0)

    return () => {
      source.cancel()
    }
  }, [innerTrigger, outerTrigger])

  return {
    ...results,
    query: () => {
      setInnerTrigger(+new Date())
    },
    reFetch: () => {
      setInnerTrigger(+new Date())
    },
  }
}

export default useFetch

export const axios = defaultAxios
