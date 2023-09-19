import React from 'react'
import styled from "styled-components";


function Order_details() {
  return (
    <Wrapper>
      {/* <h1>Responstable <span>2.0</span> by <span>jordyvanraaij</span></h1> */}

      <table class="responstable">

        <tr>
          <th>Main driver</th>
          <th data-th="Driver details"><span>First name</span></th>
          <th>Surname</th>
          <th>Date of birth</th>
          <th>Relationship</th>
        </tr>

        <tr>
          <td><input type="radio" /></td>
          <td>Steve</td>
          <td>Foo</td>
          <td>01/01/1978</td>
          <td>Policyholder</td>
        </tr>

        <tr>
          <td><input type="radio" /></td>
          <td>Steffie</td>
          <td>Foo</td>
          <td>01/01/1978</td>
          <td>Spouse</td>
        </tr>

        <tr>
          <td><input type="radio" /></td>
          <td>Stan</td>
          <td>Foo</td>
          <td>01/01/1994</td>
          <td>Son</td>
        </tr>

        <tr>
          <td><input type="radio" /></td>
          <td>Stella</td>
          <td>Foo</td>
          <td>01/01/1992</td>
          <td>Daughter</td>
        </tr>

      </table>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.responstable {
    margin: 1em auto;
    width: 85%;
    overflow: hidden;
    background: #FFF;
    color: black;
    border-radius: 10px;
    border: 1px solid #167F92;
  }
  .responstable tr {
    border: 1px solid #D9E4E6;
  }
  .responstable tr:nth-child(odd) {
    background-color: #EAF3F3;
  }
  .responstable th {
    display: none;
    border: 1px solid #FFF;
    background-color: #f49f04;
    // color: #FFF;
    padding: 1em;
  }
  .responstable th:first-child {
    display: table-cell;
    text-align: center;
  }
  .responstable th:nth-child(2) {
    display: table-cell;
  }
  .responstable th:nth-child(2) span {
    display: none;
  }
  .responstable th:nth-child(2):after {
    content: attr(data-th);
  }
  @media (min-width: 480px) {
    .responstable th:nth-child(2) span {
      display: block;
    }
    .responstable th:nth-child(2):after {
      display: none;
    }
  }
  .responstable td {
    display: block;
    word-wrap: break-word;
    max-width: 7em;
  }
  .responstable td:first-child {
    display: table-cell;
    text-align: center;
    border-right: 1px solid #D9E4E6;
  }
  @media (min-width: 480px) {
    .responstable td {
      border: 1px solid #D9E4E6;
    }
  }
  .responstable th, .responstable td {
    text-align: left;
    margin: .5em 1em;
  }
  @media (min-width: 480px) {
    .responstable th, .responstable td {
      display: table-cell;
      padding: 1em;
    }
  }
  h1 {
    font-family: Verdana;
    font-weight: normal;
    color: #024457;
  }
  h1 span {
    color: #167F92;
  }`;


export default Order_details

