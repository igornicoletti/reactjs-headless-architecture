import { UseParams } from './hooks/useParams'

export const App = () => {
  const { data, setSelected } = UseParams()

  if (!data) return

  return (
    <div className={'relative h-full min-h-screen w-full grid content-center'}>
      <div className={'w-full max-w-screen-xl mx-auto px-8'}>
        <div className={'flex items-center justify-center gap-8 py-16'}>
          {data.map((data) => <button key={data.id} onClick={() => setSelected(data.id)}>{data.name}</button>)}
        </div>
      </div>
    </div>
  )
}