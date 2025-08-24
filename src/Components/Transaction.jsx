import {GlobalContext} from '../Context/GlobalState';
import { useContext } from 'react';

function Transaction({transaction}) {
  const {deleteTransaction}=useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transaction.amount<0?'minus':'plus'}>
         {transaction.text} <span>{sign}{'\u20B9'}{Math.abs(transaction.amount)}</span><button 
         onClick={()=>deleteTransaction(transaction.id)}
         className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction
