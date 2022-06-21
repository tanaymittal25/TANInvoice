import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero} style={{padding: "10px 10px 30px 10px"}}>
                <h1>Easiest invoicing for freelancers and small businesses</h1>
            </section>
            <section  className={styles.hero}>
                <div className={styles.imgContainer}>
                    <img src="https://res.cloudinary.com/dlqevrpra/image/upload/v1655739888/invoice.png_tryg1p.jpg" width={300} height={400} alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
