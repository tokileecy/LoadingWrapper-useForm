import LoadingWrapper from '@/components/LoadingWrapper'

export default function Taks1() {
  return (
    <div>
      <h2>Task 1</h2>
      <p>用typescript設計一個 react component LoadingWrapper</p>
      <ul>
        <li>可以傳入一個 Promise operation (通常是 api call)</li>
        <li>如果 promise 正在執行時，顯示 loading effect</li>
        <li>如果 promise 完成了，把結果傳給 renderData 把結果顯示出來</li>
      </ul>
      <h3>(a). String Case</h3>
      <LoadingWrapper
        loadData={async () => {
          return new Promise<string>((resolve) => {
            setTimeout(() => {
              resolve('String Case')
            }, 500)
          })
        }}
        renderData={(data: string) => {
          return <div>{`string: ${data}`}</div>
        }}
      />
      <h3>(b). Number Case</h3>
      <LoadingWrapper
        loadData={async () => {
          return new Promise<number>((resolve) => {
            setTimeout(() => {
              resolve(1234)
            }, 500)
          })
        }}
        renderData={(data: number) => {
          return <div>{`number: ${data}`}</div>
        }}
      />
    </div>
  )
}
