import iconCloseImg from '../img/icon-close.png';
import { useNavigate } from 'react-router-dom';

export const ExitIcon = ({value, onClick}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    };
    if (value) {
      navigate(value);
    }
  };

  return (
    <img className='exit'
      src={iconCloseImg}
      alt=''
      onClick={handleClick}>
    </img>
  )
};
