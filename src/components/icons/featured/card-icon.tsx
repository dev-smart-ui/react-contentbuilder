const CardIcon = ({
  color = 'currentColor',
  width = '48px',
  height = '48px',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill={color} d="M458.667,85.333H53.333C23.936,85.333,0,109.269,0,138.667v234.667c0,29.397,23.936,53.333,53.333,53.333h405.333    c29.397,0,53.333-23.936,53.333-53.333V138.667C512,109.269,488.064,85.333,458.667,85.333z M490.667,373.333    c0,17.643-14.357,32-32,32H53.333c-17.643,0-32-14.357-32-32V138.667c0-17.643,14.357-32,32-32h405.333c17.643,0,32,14.357,32,32    V373.333z"/>
      <path fill={color} d="M501.333,149.333H10.667C4.779,149.333,0,154.112,0,160v64c0,5.888,4.779,10.667,10.667,10.667h490.667    c5.888,0,10.667-4.779,10.667-10.667v-64C512,154.112,507.221,149.333,501.333,149.333z M490.667,213.333H21.333v-42.667h469.333    V213.333z"/>
      <path fill={color} d="M160,298.667H74.667c-5.888,0-10.667,4.779-10.667,10.667S68.779,320,74.667,320H160c5.888,0,10.667-4.779,10.667-10.667    S165.888,298.667,160,298.667z"/>
      <path fill={color} d="M224,341.333H74.667C68.779,341.333,64,346.112,64,352c0,5.888,4.779,10.667,10.667,10.667H224    c5.888,0,10.667-4.779,10.667-10.667C234.667,346.112,229.888,341.333,224,341.333z"/>
    </svg>
  );
};

export default CardIcon;
