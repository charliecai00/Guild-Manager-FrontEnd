import iconCloseImg from '../img/icon-close.png';

export const ExitIcon = ({value, onClick}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    };
    if (value) {
      window.location.href = value;
    }
  };

  return (
    <img className='exit'
      src={iconCloseImg}
      onClick={handleClick}>
    </img>
  )
};
