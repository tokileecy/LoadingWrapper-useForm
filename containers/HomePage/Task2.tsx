import useForm from '@/hooks/useForm'

interface LoginReq {
  account: string
  pwd: string
}

const validationRule = {
  account: (v: string) => v.length > 8,
  pwd: (v: string) => v.length > 12,
}

export default function Taks2() {
  const [loginReq, formSetter, validationResult] = useForm<LoginReq>(
    { account: '', pwd: '' },
    validationRule
  )

  const doSubmit = async () => {
    if (validationResult.allFieldsValid()) {
      console.log(`send data: `, loginReq)
    }
  }

  return (
    <div>
      <h2>Task 2</h2>
      <p>設計一個 react hook useForm</p>
      <ul>
        <li>傳入一個初始的 data model</li>
        <li>傳入針對各 data model 欄位的驗證邏輯</li>
        <li>
          回傳
          <ul>
            <li>被處理好的 data model</li>
            <li>各欄位的 setter，用於 onChange</li>
            <li>各欄位驗證成功/失敗</li>
          </ul>
        </li>
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          doSubmit()
        }}
      >
        <label>Account</label>
        <input
          type="text"
          value={loginReq.account}
          onChange={formSetter.account}
        />
        <div className="invalid">{validationResult.account.error}</div>
        <label>Password</label>
        <input type="password" value={loginReq.pwd} onChange={formSetter.pwd} />
        <div className="invalid">{validationResult.pwd.error}</div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
