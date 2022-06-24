function Flags({ flags }) {

    function formatNumber(num) {
        return new Intl.NumberFormat().format(num)
    }

    return (
        <>
            <section className="game-container">
                <div className="img-container">
                    <img src={flags.flags.png} alt="" />
                </div>
                <div className="info-container">
                    <h2>{flags.translations.es}</h2>
                    <p>Poblacion: {formatNumber(flags.population)}</p>
                </div>
            </section>
        </>
    )
}
export default Flags