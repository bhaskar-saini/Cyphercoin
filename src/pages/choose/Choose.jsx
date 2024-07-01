import React from 'react'
import './Choose.css'
import ChooseBox from '../../components/Choosebox/ChooseBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield,faCircleQuestion,faBolt,faSimCard,faLock, faCodeCompare ,faHandshakeSimple} from '@fortawesome/free-solid-svg-icons'

const Choose = () => {
  return (
    <div>
      <div className="slogan1" id='Choose'>WHY CHOOSE US</div>
      <div className="container">
        <ChooseBox 
          img={<FontAwesomeIcon icon={faShield} className='icon-green'/>}
          title="KYC - Swift & Compliant"
          text = "Experience seamless onboarding with swift KYC processes, ensuring full compliance with regulations."
        />
        <ChooseBox 
          img={<FontAwesomeIcon icon={faCircleQuestion} className='icon-orange'/>}
          title="24/7 Support"
          text = "Like a trusted friend, our 24/7 expert support is always there, making your crypto investment journey smoother."
        />
        <ChooseBox 
          img={<FontAwesomeIcon icon={faBolt} className='icon-red'/>}
          title="Seamless API Trading"
          text = "Amplify your crypto trading experience with WazirX through seamless API integration."
        />
      </div>
      <div className="container-2">
      <div className="slogan2">Your Security Matters</div>
        <ChooseBox 
          img={<FontAwesomeIcon icon={faSimCard}/>}
          title="Safekeeping Your Digital Assets"
          text = "We keep your digital assets safe with an extra layer of security."
        />
        <ChooseBox 
          img={<FontAwesomeIcon icon={faLock}/>}
          title="2 - Factor Authentication"
          text = "Double your WazirX account security with 2-factor authentication - choose the setup that suits you best."
        />
        <ChooseBox 
          img={<FontAwesomeIcon icon={faCodeCompare}/>}
          title="End-to-End Encryption"
          text = "We use advanced encryption and follow the highest industry standards, ensuring worry-free crypto trading and investment for you."
        />
        <ChooseBox 
          img={<FontAwesomeIcon icon={faHandshakeSimple}/>}
          title="Transparency - Your Right to Know"
          text = "We don't just talk, we practice it. Explore our transparency reports, proof of reserves, and more, because informed users make better decisions."
        />
      </div>
    </div>
  )
}

export default Choose