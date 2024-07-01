import React from 'react';

interface ILogoComponentProps {
  logoUrl: string;
  altText?: string;
}

const LogoComponent: React.FC<ILogoComponentProps> = ({ logoUrl, altText = 'Logo' }) => {
  return (
    <div>
      <img src={logoUrl} alt={altText} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default LogoComponent;
