import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MyLoader = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={4440}
    height={330}
    viewBox="0 0 4440 330"
    backgroundColor="#5d5c61"
    foregroundColor="#737376"
    {...props}
  >
    <rect x="20" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="260" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="500" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="740" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="980" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="1220" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="1460" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="1700" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="1940" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="2180" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="2420" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="2660" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="2900" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="3140" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="3380" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="3620" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="3860" y="15" rx="20" ry="20" width="205" height="290" />
    <rect x="4100" y="15" rx="20" ry="20" width="205" height="290" />
  </ContentLoader>
);

export default MyLoader;
