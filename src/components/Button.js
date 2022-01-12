const Button = ({ addPosition }) => {
  return (
    <>
      <div className="columns">
        <div className="column">
          <button
            className="button is-success is-dark ml-6"
            type="submit"
            onClick={() => addPosition()}
          >
            +ADD
          </button>
        </div>
        <div className="column"></div>
      </div>
    </>
  )
}

export default Button
