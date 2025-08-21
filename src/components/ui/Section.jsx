
function Section({title, subtitle, children}){
    return(
        <section className="section-container">
            <div className='section-titles-container'>
                <h1 className='section-title'>{title}</h1>
                <p className='section-subtitle'>{subtitle}</p>
            </div>
            {children}
        </section>
    )
}

export default Section