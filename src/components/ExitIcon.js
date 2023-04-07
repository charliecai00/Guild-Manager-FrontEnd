import iconCloseImg from '../img/icon-close.png';

export const ExitIcon = (props) => {
    return(
      <a href={props.value}>
        <img className='exit'
          src={iconCloseImg}>
        </img>
      </a>
    )
  };
