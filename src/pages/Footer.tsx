import { IconType } from "react-icons"
import { footerLinks, navLinks, socialMedias } from "../constants"

type Props = {}

const Footer = (props: Props) => {
  const socialLogo = (Icon: IconType) => <Icon />
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex justify-between items-center text-center">
          <h2 className="md:text-4xl">BEACHES.</h2>
          <ul className="flex justify-between w-full sm:max-w-[280px] my-4">
            {socialMedias.map(({ icon }, index) => (
              <li className="text-primary-dark">
                {socialLogo(icon)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <ul className="gap-4 lg:flex">
            {footerLinks.map(({ title }, index) => (
              <li key={index}>
                {title}
              </li>
            ))}
          </ul>
          <ul className="text-right gap-4 lg:flex">
            {navLinks.map(({ title }, index) => (
              <li key={index}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer