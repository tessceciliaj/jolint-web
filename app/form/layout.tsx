import FormHeader from '../components/FormHeader'
import { RootLayoutProps } from '../utils/types'

const layout = ({ children }: RootLayoutProps) => {
    return (
        <>
            <FormHeader />
            <main>{children}</main>
        </>
    )
}

export default layout
