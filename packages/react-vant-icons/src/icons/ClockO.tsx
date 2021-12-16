import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0-833.333c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm-27.778 222.222c-15.341 0-27.778 12.436-27.778 27.778v250c0 15.34 12.437 27.777 27.778 27.777h250c15.341 0 27.778-12.436 27.778-27.777 0-15.342-12.437-27.778-27.778-27.778H500V305.556c0-15.342-12.437-27.778-27.778-27.778z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgClockO = (props: Omit<IconBaseProps, 'name'>) => {
  return (
    <IconBase name={SvgClockO.name} {...props}>
      <SvgIcon />
    </IconBase>
  );
};

export default SvgClockO;
