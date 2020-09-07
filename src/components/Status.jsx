import React from "react"

export default function Status(props) {
  return (
    <div>
      <h1>基本情報</h1>
      <p>誕生日:9/30</p>
      <p>血液型:{props.bt}型</p>
      <p>出身地:千葉</p>
    </div>
  )
}
