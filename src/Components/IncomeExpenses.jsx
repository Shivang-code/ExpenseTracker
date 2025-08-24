import { useContext } from 'react';
import {GlobalContext} from '../Context/GlobalState';


function IncomeExpenses() {
  const {transactions} =useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);


  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

 
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+{'\u20B9'}{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-{'\u20B9'}{expense}</p>
        </div>
      </div>

    </div>
  )
}

export default IncomeExpenses
