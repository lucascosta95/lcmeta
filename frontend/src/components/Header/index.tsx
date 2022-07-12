import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
        <header>
            <div className=" lcmeta-logo-container">
            <img src={logo} alt="LCMeta" />
            <h1>LCMeta</h1>
            <p>
                Desenvolvido por 
                <a href="https://www.instagram.com/lucascosta_95/"> @lucascosta_95</a>
            </p>
        </div>
</header >
</>
  )
}

export default Header;