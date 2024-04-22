import { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { summaryDonations } from './helpers/summary-donation';
import Card from './components/card';
import { Charity } from './types/donation';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { updateDonation } from './features/donations/donation-slice';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [charities, setCharities] = useState<Charity[]>([]);
  const donate = useAppSelector((state) => state.donations.donate);
  const dispatch = useAppDispatch();

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
        dispatch(
          updateDonation(
            summaryDonations(data.map((item: any) => item.amount)),
          ),
        );
      });
  }, []);

  const handlerPay = async (id: number, amount: number, currency: string) => {
    if (amount === 0) {
      toast.error('Please select the amount to donate');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          charitiesId: id,
          amount,
          currency,
        }),
      });

      if (res.ok) {
        dispatch(updateDonation(amount));
        toast.success(
          `${amount} ${currency} has been donated to ${charities[id - 1].name} successfully`,
        );
      }
    } catch (error) {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <Layout>
      <h1 className="title">Omise Tamboon React</h1>
      <h2 className="total-payment">Total Donations: {donate} THB</h2>
      <div className="card-container">
        {charities.map((item: Charity, i) => {
          return (
            <Card
              key={i}
              imgalt={item?.name}
              imgsrc={`/images/${item?.image}`}
              place={item?.name}
              handlerpay={(amount: number) => {
                handlerPay(item.id, amount, item.currency);
              }}
            />
          );
        })}
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
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
