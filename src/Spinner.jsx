import { ImSpinner } from 'react-icons/im';
import './Spinner.css';

export const Spinner = () => {
  return (
    <div className='spinnerDesign'>
        <ImSpinner className='spinning' size={60} />
    </div>
  );
};
