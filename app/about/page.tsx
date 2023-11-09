import CoFounders from "../components/CoFounders"
import AboutHero from "../components/AboutHero"

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <AboutHero />
        <CoFounders />
    </div>
  )
}

export default page