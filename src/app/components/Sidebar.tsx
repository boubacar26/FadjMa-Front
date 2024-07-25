import styles from '../../../styles/Sidebar.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import Avatar from '../../../public/avatar.png'
import Navlink from './Navlink'


export default function SideBar() {
  return (
    <>
      <div className={`${styles.logo} flex `}>
        <Image src={Logo} alt="..." className={`${styles.image}`} />
        <h1 style={{color: '#fff', fontSize: '18px', fontWeight: '600'}}>Fadj-Ma</h1>
      </div>
      <div className="avatar flex mt-3 py-4">
        <Image src={Avatar} alt='...' className={`${styles.avatar}`} />
        <div className="">
          <h6 style={{color: '#fff', fontWeight:'bold'}}>Modou Fall</h6>
          <p style={{color: '#FED600'}}>Administrateur</p>
        </div>
      </div>
      <div className='mt-4' style={{color: '#fff', fontWeight: 'bold'}}>
        <ul className='list-none'>
          <Navlink/>
        </ul>
      </div>
    </>
  )
}
