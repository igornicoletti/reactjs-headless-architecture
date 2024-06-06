import { useState } from 'react'
import { UseFetch } from './useFetch'

export type Props = {
  id: string
  name: string
}

const ParamsToString = (id: string) => {
  let params = {}
  if (id) { params = { ...params, id } }
  return params
}

export const UseParams = () => {
  const [filter, setFilter] = useState<string>('')

  const paramsString = new URLSearchParams(ParamsToString(filter))
  const { response } = UseFetch<Props[]>(`http://localhost:3333/headless?${paramsString}`)

  return { data: response, setFilter }
}