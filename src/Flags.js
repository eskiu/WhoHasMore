function Flags({ flags }) {
    return (
        <>
            <img src={flags.flags.png} alt="" />
            <h3>{flags.translations.es}</h3>
        </>
    )
}
export default Flags