import "./Footer.css";

interface FooterProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <img src={props.logoUrl} alt="Logo" style={{ height: "50px" }} />
      {props.children}
    </footer>
  );
};

export default Footer;