import "./Header.css";

interface HeaderProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <img src={props.logoUrl} alt="Logo" style={{ height: "50px" }} />
      {props.children}
    </header>
  );
};

export default Header;
