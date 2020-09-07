import React from "react"

export default function Hobby(props) {
  return (
    <div>
      <h1>趣味</h1>
      <p>裁縫</p>
      <p>料理</p>
      <p>お菓子作り</p>
      <p>今までに料理した回数:{props.number}</p>
    </div>
  )
}
