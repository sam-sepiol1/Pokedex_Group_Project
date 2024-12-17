import './_input.scss'

const Input = () => {
    return (
        <div className="input__container">
        <form className="form"> 
        <input className="input" type="text" placeholder="🔍 Search" />
        </form>
        <button className="button">#</button>
        <button className="button"></button>
        </div>
    )
}

export default Input