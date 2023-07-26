const Header = ({ title }: any) => {

    return (
        <header>
            <h4>{title}</h4>
        </header>
    )
  }
  
  Header.defaultProps = {
    title: "MK Characters Lists"
  }
  
  export default Header;