const Project = ({
  title,
  description,
  imagePath,
  imageAltText,
  links = [],
}) => {
  const icons = {
    figma:
      "M23.6,11.6c1-0.6,1.7-1.5,2.1-2.6c0.4-1.1,0.4-2.2,0.1-3.3c-0.3-1.1-1-2-1.9-2.7c-0.9-0.7-2.1-1-3.2-1h-9.2c-1.2,0-2.3,0.4-3.2,1C7.2,3.7,6.6,4.7,6.2,5.7C5.9,6.8,5.9,8,6.3,9c0.4,1.1,1.1,2,2.1,2.6c-0.7,0.5-1.4,1.1-1.8,1.9C6.2,14.3,6,15.1,6,16c0,0.9,0.2,1.7,0.6,2.5c0.4,0.8,1,1.4,1.8,1.9c-1,0.6-1.7,1.5-2.1,2.6c-0.4,1.1-0.4,2.2-0.1,3.3c0.3,1.1,1,2,2,2.7c0.9,0.7,2.1,1,3.2,1c1.4,0,2.8-0.6,3.9-1.5c1-1,1.6-2.3,1.6-3.7v-4.8c1,0.9,2.3,1.4,3.6,1.4h0.1c1.2,0,2.3-0.4,3.2-1c0.9-0.7,1.6-1.6,1.9-2.7c0.3-1.1,0.3-2.2-0.1-3.3C25.3,13.1,24.5,12.2,23.6,11.6z M16.9,3.7h3.7c0.5,0,1,0,1.4,0.2c0.5,0.2,0.9,0.4,1.2,0.8c0.4,0.3,0.6,0.7,0.8,1.2s0.3,0.9,0.3,1.4c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.5,0.8-0.8,1.2c-0.4,0.3-0.8,0.6-1.2,0.8c-0.5,0.2-1,0.2-1.4,0.2h-3.7V3.7z M11.4,3.7h3.7v7h-3.7c-0.9,0-1.8-0.4-2.4-1.1C8.3,9,8,8.1,8,7.2s0.4-1.8,1-2.4C9.6,4.2,10.5,3.8,11.4,3.7L11.4,3.7z M7.8,16c0-0.9,0.4-1.8,1.1-2.5c0.7-0.7,1.6-1,2.6-1h3.7v7h-3.7c-1,0-1.9-0.4-2.6-1C8.2,17.8,7.8,16.9,7.8,16L7.8,16z M15.1,24.7c0,1-0.4,1.9-1.1,2.5c-0.7,0.7-1.6,1-2.6,1c-0.5,0-1,0-1.4-0.2c-0.5-0.2-0.9-0.4-1.2-0.7c-0.4-0.3-0.6-0.7-0.8-1.2c-0.2-0.4-0.3-0.9-0.3-1.4c0-0.5,0.1-1,0.3-1.4c0.2-0.4,0.5-0.8,0.8-1.2c0.4-0.3,0.8-0.6,1.2-0.8c0.5-0.2,1-0.2,1.4-0.2h3.7L15.1,24.7z M20.6,19.5h-0.1c-0.9,0-1.8-0.4-2.4-1.1c-0.6-0.7-1-1.5-1-2.4c0-0.9,0.4-1.8,1-2.4c0.6-0.7,1.5-1,2.4-1.1h0.1c0.5,0,1,0,1.4,0.2c0.5,0.2,0.9,0.4,1.2,0.8c0.4,0.3,0.6,0.7,0.8,1.2c0.2,0.4,0.3,0.9,0.3,1.4c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.5,0.8-0.8,1.2c-0.4,0.3-0.8,0.6-1.2,0.8C21.6,19.5,21.1,19.5,20.6,19.5L20.6,19.5z",
    github:
      "M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z",
    linkedin:
      "M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z",
    website:
      "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM28,15H22A24.26,24.26,0,0,0,19.21,4.45,12,12,0,0,1,28,15ZM16,28a5,5,0,0,1-.67,0A21.85,21.85,0,0,1,12,17H20a21.85,21.85,0,0,1-3.3,11A5,5,0,0,1,16,28ZM12,15a21.85,21.85,0,0,1,3.3-11,6,6,0,0,1,1.34,0A21.85,21.85,0,0,1,20,15Zm.76-10.55A24.26,24.26,0,0,0,10,15h-6A12,12,0,0,1,12.79,4.45ZM4.05,17h6a24.26,24.26,0,0,0,2.75,10.55A12,12,0,0,1,4.05,17ZM19.21,27.55A24.26,24.26,0,0,0,22,17h6A12,12,0,0,1,19.21,27.55Z",
  };

  return (
    <div className="project">
      {imagePath ? (
        <img
          className="project__image"
          src={imagePath}
          alt={`../assets/images/${imageAltText}`}
        />
      ) : (
        <div className="project__image-empty" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project__icons">
        {links.map((link) => {
          const path = icons[link.icon];
          return (
            <a href={link.href}>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <path
                  d={path}
                  alt={`${link.icon} link`}
                />
                <rect
                  fill="none"
                  y="0"
                  width="32"
                  height="32"
                />
              </svg>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Project;