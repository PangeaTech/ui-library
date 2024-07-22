import React from 'react';
import { Avatar as MuiAvatar, AvatarProps, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';

export interface IAvatarComponentProps extends AvatarProps {
  placeholder?: React.ReactNode;
  image?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  online?: boolean;
  borderColor?: string;
}

const sizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  '2xl': 64
};

const StyledAvatar = styled(MuiAvatar)<{ avatarSize: number; hasAvatar: boolean; borderColor: string }>(({ avatarSize, hasAvatar, borderColor }) => ({
  width: avatarSize,
  height: avatarSize,
  backgroundColor: !hasAvatar ? '#E7E0FF' : '#E7E0FF',
  color: !hasAvatar ? borderColor : undefined,
  position: 'relative'
}));

const StyledPersonIcon = styled(PersonIcon)<{ borderColor: string }>(({ borderColor }) => ({
  color: borderColor
}));

const OnlineDot = styled('div')({
  position: 'absolute',
  width: 10,
  height: 10,
  left: 30,
  top: 30,
  backgroundColor: '#00C408',
  border: '0.75px solid #FCFCFC',
  borderRadius: '50%',
  zIndex: 1
});

const AvatarComponent: React.FC<IAvatarComponentProps> = ({
  image,
  initials,
  size = 'md',
  online = false,
  borderColor = '#2D35DC',
  ...avatarProps
}) => {
  const hasAvatar = image || initials;
  const avatarSize = typeof size === 'number' ? size : sizes[size];

  return (
    <div style={{ position: 'relative', width: avatarSize, height: avatarSize }}>
      <StyledAvatar avatarSize={avatarSize} hasAvatar={!!hasAvatar} borderColor={borderColor} src={image} {...avatarProps}>
        {hasAvatar ? (
          initials && <Typography className="text-pangea-blue-100">{initials}</Typography>
        ) : (
          <StyledPersonIcon borderColor={borderColor} />
        )}
      </StyledAvatar>
      {online && <OnlineDot />}
    </div>
  );
};

export default AvatarComponent;
