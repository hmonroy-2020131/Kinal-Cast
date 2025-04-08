import logo from '../assets/img/escudo.svg';

export const Logo = ({text}) => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt="Escudo kinal" />
            <span>{text}</span>
        </div>
    )
}