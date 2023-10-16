import PartBox from "../components/FormPartBox"

const Page = () => {
    return (
        <div>
            <h3>Im a form</h3>
            <section className="flex">
              <PartBox />
              <PartBox />
              <PartBox />
              <PartBox />
            </section>
        </div>
    )
}

export default Page
