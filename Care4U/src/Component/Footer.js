import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";

function Footer(props) {
  return (
    <div className="bg-light">
      <Table responsive>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Service Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.order.map((data, index) => {
            return (
              <tr key={(index).toString()}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.hour}</td>
                <td>{data.price}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

const take = (state) => {
  return {
    order: state.order.order
  };
}


export default connect(take)(Footer);