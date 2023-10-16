import FormHeader from '../components/FormHeader'
import Footer from '../components/Footer'

const layout = ({ children }) => {
    return (
        <>
            <FormHeader />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default layout
