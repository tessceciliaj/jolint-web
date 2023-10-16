import FormHeader from '../components/FormHeader'

const layout = ({ children }) => {
    return (
        <>
            <FormHeader />
            <main>{children}</main>
        </>
    )
}

export default layout
