import * as React from "react";

import {
  Col, Header,
  Input, Row,
} from '../../../../components';

import { NUM } from '../../../../utils';
import './style.css';

interface IProps {
  _id: any;
  acctNum: number,
  addClick: any,
  balance: number,
  balChange?: any,
  change?: any,
  children?: any,
  delClick?: any,
  nameFirst: string,
  nameLast: string,
  press?: any,
  stringChange: any,
  subtractClick: any,
}

const AcctMobile = (props: IProps) => {
  return (
    <div className='Mobile_Acct'>
      <Row>
        <Header
          path={`id/${props._id}`}
          _id={props._id}
          nameLast={props.nameLast}
          nameFirst={props.nameFirst}
          acctNum={props.acctNum}
          delClick={props.delClick}
        />
      </Row>

      {/* Account Balance */}
      <Row>
        <div className='Mobile_Balance'>
          Balance: <span className={props.balance >= 0 ? 'positive' : 'negative'}
            id='Mobile_Balance'>
            {props.balance >= 0 ?
              `$ ${NUM.withCommas(props.balance.toFixed(2))}` : `
              - $ ${NUM.withCommas(Math.abs(props.balance).toFixed(2))} `
            }</span>
        </div>
      </Row>

      {/* Payed to/from begins here */}
      <Row>
        <Col size='10'>
          <div className="Mobile_Payed-To">
            <Input
              type='text'
              id={`paymentInput ${props._id}`}
              change={props.change}
              itype='input'
              label='Payed To/From'
              labelfor='payToInput'
            />
          </div>
        </Col>
        <Col size='2' />
      </Row>

      {/* Add funds begins here */}
      <Row>
        <Col size='8'>
          <Input
            type='number'
            id={`addInput ${props._id}`}
            change={props.change}
            itype='input'
            label='Add Funds'
            labelfor='addInput'
            press={props.press}
          />
        </Col>
        <Col size='1' />
        <Col size='2'>
          <button id={props._id}
            onClick={props.addClick}
            className="Mobile_Add-Funds btn">+</button>
        </Col>
      </Row>

      {/* Subtract funds begins here */}
      <Row>
        <Col size='8'>
          <Input
            type="number"
            id={`subtInput ${props._id}`}
            change={props.change}
            itype='input'
            label='Subtract Funds'
            labelfor='subtractInput'
            press={props.press}
          />
        </Col>
        <Col size='1' />
        <Col size='2'>
          <button
            id={props._id}
            onClick={props.subtractClick}
            className="Mobile_Subtract-Funds btn">-</button>
        </Col>
      </Row>
    </div>
  );
}

export default AcctMobile;