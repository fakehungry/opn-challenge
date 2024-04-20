import { summaryDonations } from '../summary-donation';

describe('summaryDonations function', () => {
  test('`summaryDonations` should calculate donations correctly', () => {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });
});
