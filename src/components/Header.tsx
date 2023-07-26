const Header = ({ title }: any) => {

    return (
        <header>
            <h4>{title}</h4>
        </header>
    )
  }
  
  Header.defaultProps = {
    title: "Kengan Omega Character Lists"
  }
  
  export default Header;