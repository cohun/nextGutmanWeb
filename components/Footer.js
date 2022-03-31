const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Copyright &copy; {today.getFullYear()} | Horváth Attila</p>
      </div>
    </footer>
  );
};

export default Footer;
