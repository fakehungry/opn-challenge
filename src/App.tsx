import React, { Component, useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { summaryDonations } from './helpers/summary-donation';
import Card from './components/card';
import { Charity, Payment } from './types/donation';

const App = () => {
  const [charities, setCharities] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setCharities(data);
      });

    fetch('http://localhost:3001/payments')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setPayments(data);
      });
  }, []);

  return (
    <Layout>
      <h1 className="title">Omise Tamboon React</h1>
      <h2 className="total-payment">
        Total Donations:{' '}
        {summaryDonations(payments.map((item: Payment) => item?.amount))} THB
      </h2>
      <div className="card-container">
        {charities.map((item: Charity, i) => {
          return (
            <Card
              key={i}
              imgalt={item?.name}
              imgsrc={`/images/${item?.image}`}
              place={item?.name}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default App;

const Layout = styled.div`
  margin: 30px auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1.title {
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.tertiary};
  }

  h2.total-payment {
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => `${props.theme.colors.primary}90`};
    max-width: 1030px;
    width: 100%;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px ${(props) => `${props.theme.colors.primary}30`};
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    h2.total-payment {
      max-width: 500px;
    }

    .card-container {
      max-width: 500px;
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    h2.total-payment {
      max-width: 300px;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    h1.title {
      font-size: 24px;
    }
  }
`;

// const Card = styled.div`
//   margin: 10px;
//   border: 1px solid #ccc;
// `;

// export default connect((state) => state)(
//   class App extends Component {
//     state = {
//       charities: [],
//       selectedAmount: 10,
//     };

//     componentDidMount() {
//       const self = this;
//       fetch('http://localhost:3001/charities')
//         .then(function (resp) {
//           return resp.json();
//         })
//         .then(function (data) {
//           self.setState({ charities: data });
//         });

//       fetch('http://localhost:3001/payments')
//         .then(function (resp) {
//           return resp.json();
//         })
//         .then(function (data) {
//           self.props.dispatch({
//             type: 'UPDATE_TOTAL_DONATE',
//             amount: summaryDonations(data.map((item) => item.amount)),
//           });
//         });
//     }

//     render() {
//       const self = this;
//       const cards = this.state.charities.map(function (item, i) {
//         const payments = [10, 20, 50, 100, 500].map((amount, j) => (
//           <label key={j}>
//             <input
//               type="radio"
//               name="payment"
//               onClick={function () {
//                 self.setState({ selectedAmount: amount });
//               }}
//             />
//             {amount}
//           </label>
//         ));

//         return (
//           <Card key={i}>
//             <p>{item.name}</p>
//             {payments}
//             <button
//               onClick={handlePay.call(
//                 self,
//                 item.id,
//                 self.state.selectedAmount,
//                 item.currency,
//               )}
//             >
//               Pay
//             </button>
//           </Card>
//         );
//       });

//       const style = {
//         color: 'red',
//         margin: '1em 0',
//         fontWeight: 'bold',
//         fontSize: '16px',
//         textAlign: 'center',
//       };

//       const donate = this.props.donate;
//       const message = this.props.message;

//       return (
//         <div>
//           <h1>Tamboon React</h1>
//           <p>All donations: {donate}</p>
//           <p style={style}>{message}</p>
//           {cards}
//         </div>
//       );
//     }
//   },
// );

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
// function handlePay(id, amount, currency) {}
