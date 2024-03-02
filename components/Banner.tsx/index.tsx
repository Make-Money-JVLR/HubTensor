import React from 'react'
import Image from 'next/image'
import bgPatternLeft from '@/images/bannerPatternLeft.png'
import bgPatternRight from '@/images/bannerPatternRight.png'

const Banner = () => {
  return (
    <div className='mx-auto max-w-[1440px] h-[726px] relative'>
      <div className='top-[-65px] absolute left-1/2 transform -translate-x-1/2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="986" height="922" viewBox="0 0 986 922" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.5 -65.2446H0.81877H492.681H493H493.319H985.181H985.5V-64.9255V427.436V427.755V428.074V920.436V920.755H985.181H493.319H493H492.681H0.81877H0.5V920.436V428.074V427.755V427.436V-64.9255V-65.2446ZM1.13754 427.436H82.4947V345.996H1.13754V427.436ZM83.1323 427.436H164.596V345.996H83.1323V427.436ZM165.233 427.436H246.591V345.996H165.233V427.436ZM247.228 427.436H328.692V345.996H247.228V427.436ZM329.329 427.436H410.687V345.996H329.329V427.436ZM411.324 427.436H492.681V345.996H411.324V427.436ZM493.319 427.436H574.676V345.996H493.319V427.436ZM575.313 427.436H656.777V345.996H575.313V427.436ZM657.415 427.436H738.772V345.996H657.415V427.436ZM739.409 427.436H820.873V345.996H739.409V427.436ZM821.511 427.436H902.868V345.996H821.511V427.436ZM903.505 427.436H984.862V345.996H903.505V427.436ZM1.13754 428.074V509.514H82.4947V428.074H1.13754ZM83.1323 428.074V509.514H164.596V428.074H83.1323ZM165.233 428.074V509.514H246.591V428.074H165.233ZM247.228 428.074V509.514H328.692V428.074H247.228ZM329.329 428.074V509.514H410.687V428.074H329.329ZM411.324 428.074V509.514H492.681V428.074H411.324ZM984.862 428.074H903.505V509.514H984.862V428.074ZM902.868 428.074H821.511V509.514H902.868V428.074ZM820.873 428.074H739.409V509.514H820.873V428.074ZM738.772 428.074H657.415V509.514H738.772V428.074ZM656.777 428.074H575.313V509.514H656.777V428.074ZM574.676 428.074H493.319V509.514H574.676V428.074ZM411.324 -64.6064H492.681V16.8334H411.324V-64.6064ZM411.324 17.4716H492.681V99.0184H411.324V17.4716ZM411.324 99.6564H492.681V181.095H411.324V99.6564ZM411.324 181.734H492.681V263.173H411.324V181.734ZM411.324 263.812H492.681V345.358H411.324V263.812ZM493.319 16.8334V-64.6064H574.676V16.8334H493.319ZM493.319 99.0184V17.4716H574.676V99.0184H493.319ZM493.319 181.095V99.6564H574.676V181.095H493.319ZM493.319 263.173V181.734H574.676V263.173H493.319ZM493.319 345.358V263.812H574.676V345.358H493.319ZM1.13754 -64.6064V16.8334H82.4947V-64.6064H1.13754ZM83.1323 -64.6064V16.8334H164.596V-64.6064H83.1323ZM165.233 -64.6064V16.8334H246.591V-64.6064H165.233ZM247.228 -64.6064V16.8334H328.692V-64.6064H247.228ZM329.329 -64.6064V16.8334H410.687V-64.6064H329.329ZM1.13754 345.358H82.4947V263.812H1.13754V345.358ZM1.13754 263.173H82.4947V181.734H1.13754V263.173ZM1.13754 181.095H82.4947V99.6564H1.13754V181.095ZM1.13754 99.0184H82.4947V17.4716H1.13754V99.0184ZM83.1323 17.4716V99.0184H164.596V17.4716H83.1323ZM165.233 17.4716V99.0184H246.591V17.4716H165.233ZM247.228 17.4716V99.0184H328.692V17.4716H247.228ZM329.329 17.4716V99.0184H410.687V17.4716H329.329ZM410.687 99.6564H329.329V181.095H410.687V99.6564ZM410.687 181.734H329.329V263.173H410.687V181.734ZM410.687 263.812H329.329V345.358H410.687V263.812ZM328.692 345.358V263.812H247.228V345.358H328.692ZM246.591 345.358V263.812H165.233V345.358H246.591ZM164.596 345.358V263.812H83.1323V345.358H164.596ZM83.1323 263.173H164.596V181.734H83.1323V263.173ZM83.1323 181.095H164.596V99.6564H83.1323V181.095ZM165.233 99.6564V181.095H246.591V99.6564H165.233ZM247.228 99.6564V181.095H328.692V99.6564H247.228ZM328.692 181.734H247.228V263.173H328.692V181.734ZM246.591 263.173V181.734H165.233V263.173H246.591ZM575.313 -64.6064V16.8334H656.777V-64.6064H575.313ZM657.415 -64.6064V16.8334H738.772V-64.6064H657.415ZM739.409 -64.6064V16.8334H820.873V-64.6064H739.409ZM821.511 -64.6064V16.8334H902.868V-64.6064H821.511ZM903.505 -64.6064V16.8334H984.862V-64.6064H903.505ZM984.862 17.4716H903.505V99.0184H984.862V17.4716ZM984.862 99.6564H903.505V181.095H984.862V99.6564ZM984.862 181.734H903.505V263.173H984.862V181.734ZM984.862 263.812H903.505V345.358H984.862V263.812ZM575.313 17.4716V99.0184H656.777V17.4716H575.313ZM657.415 17.4716V99.0184H738.772V17.4716H657.415ZM739.409 17.4716V99.0184H820.873V17.4716H739.409ZM821.511 17.4716V99.0184H902.868V17.4716H821.511ZM902.868 99.6564H821.511V181.095H902.868V99.6564ZM902.868 181.734H821.511V263.173H902.868V181.734ZM902.868 263.812H821.511V345.358H902.868V263.812ZM820.873 345.358V263.812H739.409V345.358H820.873ZM738.772 345.358V263.812H657.415V345.358H738.772ZM656.777 345.358V263.812H575.313V345.358H656.777ZM575.313 263.173H656.777V181.734H575.313V263.173ZM575.313 181.095H656.777V99.6564H575.313V181.095ZM657.415 99.6564V181.095H738.772V99.6564H657.415ZM739.409 99.6564V181.095H820.873V99.6564H739.409ZM820.873 181.734H739.409V263.173H820.873V181.734ZM738.772 263.173V181.734H657.415V263.173H738.772ZM411.324 510.152H492.681V591.698H411.324V510.152ZM411.324 592.337H492.681V673.776H411.324V592.337ZM411.324 674.415H492.681V755.854H411.324V674.415ZM411.324 756.493H492.681V838.039H411.324V756.493ZM411.324 838.677H492.681V920.117H411.324V838.677ZM493.319 591.698V510.152H574.676V591.698H493.319ZM493.319 673.776V592.337H574.676V673.776H493.319ZM493.319 755.854V674.415H574.676V755.854H493.319ZM493.319 838.039V756.493H574.676V838.039H493.319ZM493.319 920.117V838.677H574.676V920.117H493.319ZM410.687 920.117V838.677H329.329V920.117H410.687ZM328.692 920.117V838.677H247.228V920.117H328.692ZM246.591 920.117V838.677H165.233V920.117H246.591ZM164.596 920.117V838.677H83.1323V920.117H164.596ZM82.4947 920.117V838.677H1.13754V920.117H82.4947ZM1.13754 838.039H82.4947V756.493H1.13754V838.039ZM1.13754 755.854H82.4947V674.415H1.13754V755.854ZM1.13754 673.776H82.4947V592.337H1.13754V673.776ZM1.13754 591.698H82.4947V510.152H1.13754V591.698ZM83.1323 510.152V591.698H164.596V510.152H83.1323ZM165.233 510.152V591.698H246.591V510.152H165.233ZM247.228 510.152V591.698H328.692V510.152H247.228ZM329.329 510.152V591.698H410.687V510.152H329.329ZM410.687 592.337H329.329V673.776H410.687V592.337ZM410.687 674.415H329.329V755.854H410.687V674.415ZM410.687 756.493H329.329V838.039H410.687V756.493ZM328.692 838.039V756.493H247.228V838.039H328.692ZM246.591 838.039V756.493H165.233V838.039H246.591ZM164.596 838.039V756.493H83.1323V838.039H164.596ZM83.1323 755.854H164.596V674.415H83.1323V755.854ZM83.1323 673.776H164.596V592.337H83.1323V673.776ZM165.233 592.337V673.776H246.591V592.337H165.233ZM247.228 592.337V673.776H328.692V592.337H247.228ZM328.692 674.415H247.228V755.854H328.692V674.415ZM246.591 755.854V674.415H165.233V755.854H246.591ZM984.862 510.152H903.505V591.698H984.862V510.152ZM984.862 592.337H903.505V673.776H984.862V592.337ZM984.862 674.415H903.505V755.854H984.862V674.415ZM984.862 756.493H903.505V838.039H984.862V756.493ZM984.862 838.677H903.505V920.117H984.862V838.677ZM902.868 920.117V838.677H821.511V920.117H902.868ZM820.873 920.117V838.677H739.409V920.117H820.873ZM738.772 920.117V838.677H657.415V920.117H738.772ZM656.777 920.117V838.677H575.313V920.117H656.777ZM575.313 510.152V591.698H656.777V510.152H575.313ZM657.415 510.152V591.698H738.772V510.152H657.415ZM739.409 510.152V591.698H820.873V510.152H739.409ZM821.511 510.152V591.698H902.868V510.152H821.511ZM902.868 592.337H821.511V673.776H902.868V592.337ZM902.868 674.415H821.511V755.854H902.868V674.415ZM902.868 756.493H821.511V838.039H902.868V756.493ZM820.873 838.039V756.493H739.409V838.039H820.873ZM738.772 838.039V756.493H657.415V838.039H738.772ZM656.777 838.039V756.493H575.313V838.039H656.777ZM575.313 755.854H656.777V674.415H575.313V755.854ZM575.313 673.776H656.777V592.337H575.313V673.776ZM657.415 592.337V673.776H738.772V592.337H657.415ZM739.409 592.337V673.776H820.873V592.337H739.409ZM820.873 674.415H739.409V755.854H820.873V674.415ZM738.772 755.854V674.415H657.415V755.854H738.772Z" stroke="url(#paint0_radial_10_231)" />
          <defs>
            <radialGradient id="paint0_radial_10_231" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(493 427.755) rotate(90) scale(358 409.793)">
              <stop stopColor="#DED3FB" stopOpacity="0.32" />
              <stop offset="1" stopColor="#6C34B8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className='w-[1361.11px] h-[491.078px] overflow-hidden rounded-[60px] bg-[linear-gradient(180deg,rgba(5,5,29,0.00)_0%,#29176B_42.72%,#5F2FDA_86.76%,#906EF4_115.06%,#B79BFE_136.57%)] absolute top-[234px] left-1/2 transform -translate-x-1/2 '>
        <div className='w-full h-full relative'>
          <Image src={bgPatternLeft} alt='bgPattern' className='left-0 absolute bottom-0 w-[776.753px] h-[528.699px]' />
          <Image src={bgPatternRight} alt='bgPattern' className='right-0 absolute bottom-0 w-[776.753px] h-[528.699px]' />
        </div>
      </div>
    </div>
  )
}

export default Banner