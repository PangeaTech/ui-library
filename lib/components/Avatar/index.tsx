import React from 'react';
import { Avatar as MuiAvatar, AvatarProps, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export interface IAvatarComponentProps extends AvatarProps {
  alt: string;
  src?: string;
  initials?: string;
  size?: 'small' | 'medium' | 'large' | number;
}

const AvatarComponent: React.FC<IAvatarComponentProps> = ({
  alt,
  src,
  initials,
  size = 'medium', // Default size is medium
  ...avatarProps
}) => {
  const hasAvatar = src || initials;

  let avatarSize: number | undefined;

  switch (size) {
    case 'small':
      avatarSize = 32; // 32px for small size
      break;
    case 'medium':
      avatarSize = 48; // 48px for medium size
      break;
    case 'large':
      avatarSize = 64; // 64px for large size
      break;
    default:
      avatarSize = size as number;
      break;
  }

  return (
    <MuiAvatar alt={alt} src={src} style={{ width: avatarSize, height: avatarSize }} {...avatarProps}>
      {hasAvatar ? initials && <Typography>{initials}</Typography> : <PersonIcon />}
    </MuiAvatar>
  );
};

export default AvatarComponent;
