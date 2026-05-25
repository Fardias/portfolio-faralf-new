import type { SVGProps } from 'react';
import Language from '@mui/icons-material/Language';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
import SmartToy from '@mui/icons-material/SmartToy';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import ArrowForward from '@mui/icons-material/ArrowForward';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import FormatQuote from '@mui/icons-material/FormatQuote';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import type { MuiIconName } from '../../data/site';

const iconMap = {
  Language,
  PhoneIphone,
  SmartToy,
  Email,
  GitHub,
  LinkedIn,
  WhatsApp,
  ArrowForward,
  OpenInNew,
  Menu,
  Close,
  FormatQuote,
  BusinessCenter,
} as const;

export interface MuiIconProps extends SVGProps<SVGSVGElement> {
  name: MuiIconName;
  size?: number;
}

export default function MuiIcon({
  name,
  size = 24,
  className,
  ...props
}: MuiIconProps) {
  const Icon = iconMap[name];
  return (
    <Icon
      aria-hidden={props['aria-label'] ? undefined : true}
      className={className}
      style={{ width: size, height: size, fontSize: size }}
      {...props}
    />
  );
}
