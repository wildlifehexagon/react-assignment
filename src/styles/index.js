import styled from "styled-components"
import { injectGlobal } from "styled-components"

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; background-color: #e3ecff; }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ul {
    list-style: none;
  }
`

export const List = styled.div`
  background-color: #e0c298;
  padding-top: 5px;
  margin-top: 5px;
  height: 100%;
`

export const Item = styled.li`
  background-color: #e08d8d;
  color: #fff;
  text-align: left;
  padding: 10px 10px 10px 10px;
  margin: 10px auto 10px auto;
  width: 25%;
`

export const InputBar = styled.div`
  background-color: #c3c3bb;
  padding-top: 10px;
  padding-bottom: 10px;
`
