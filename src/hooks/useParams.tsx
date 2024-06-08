import { useState } from 'react'
import { UseFetch } from './useFetch'

const ParamsToString = (id: string) => {
  let params = {}
  if (id) { params = { ...params, id } }
  return params
}

export const UseParams = () => {
  const [selected, setSelected] = useState<string>('')
  const paramsString = new URLSearchParams(ParamsToString(selected))
  const { response } = UseFetch(`http://localhost:3333/headless?${paramsString}`)
  return { data: response, setSelected }
}