import './section1.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import myimg from '../../../assets/images/mypic.png';
import myhtml from '../../../assets/images/html1.png';
import myJS from '../../../assets/images/js.png';
import myreact from '../../../assets/images/react.png';
import myravel from '../../../assets/images/laravel.png';
import myboot from '../../../assets/images/boot.png';
import mysass from '../../../assets/images/sass.png';
import mytailwind from '../../../assets/images/tail.png';
import mycss from '../../../assets/images/css.png';
import myevent from '../../../assets/images/siteEvent.png';
import myshop from '../../../assets/images/siteShop.png';
import mymovie from '../../../assets/images/siteMovie.png';

export const FirstSectionHome = () => {
    useEffect (() => {
        Aos.init();
    }, []);


    return (
        <>
        {/* SECTION 1 */}
            <div className='firstsc h-[90vh]  w-full  firstdiv bg-gradient-to-tr from-brown-700 to-brown-100 '> 
            <div className="flex flex-wrap justify-between align-items-center text-center p-4">
            <div className=" w-50 text-black" data-aos="fade-right">
<h1 className=''>Hi,I'm Ghizlane Jadraoui a <b className='text-white/70'> Developer </b></h1>
<p className='text-xl'>Hey there! I'm a software engineer , and I love working with clients from all kinds of industries to develop digital solutions that are both innovative and user-friendly. I've got skills in full-stack development, Javascript, React, and more, which help me create web applications that are tailored to each user's unique needs.</p>
{/* button */}
<button data-ripple-light="true" data-dialog-target="dialog"
  class="select-none rounded-lg bg-gradient-to-tr from-yellow-900 to-yellow-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
  Book a Call
</button>
<div data-dialog-backdrop="dialog" data-dialog-backdrop-close="true"
  class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
  <div data-dialog="dialog"
    class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-brown-gray-500 antialiased shadow-2xl">
    <div
      class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-brown-gray-900">
      Its a simple dialog.
    </div>
    <div
      class="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-brown-gray-100 border-b-brown-gray-100 text-brown-gray-500">
      The key to more success is to have a lot of pillows. Put it this way, it took me
      twenty five years to get these plants, twenty five years of blood sweat and tears, and
      I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
      luv.
    </div>
    <div class="flex flex-wrap items-center justify-end p-4 shrink-0 text-brown-gray-500">
      <button data-ripple-dark="true" data-dialog-close="true"
        class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Cancel
      </button>
      <button data-ripple-light="true" data-dialog-close="true"
        class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Confirm
      </button>
    </div>
  </div>
</div>  

{/*  */}
            </div>
            <div   className=" w-50  mt-[13vh] flex justify-center  ">
                <div className=" flex justify-center pt-2">

                <img data-aos="fade-left" className=' h-[595px]' src={myimg} alt="" />
                </div>
            </div>
            </div>
            </div>
            {/* FIN SECTION 1 */}
            {/* SECTION 2 */}
            <section data-aos="fade-up" className=' bg-white/50 h-[130vh] w-full  flex flex-col justify-evenly '>
               
                <h1 className='text-center font-bold text-brown-500'>My SKILLS</h1>
                <h3 className='text-center'>Here are my skills and the essential skills need for the job market</h3>
                    
                <div   className="flex flex-wrap p-3 gap-3 justify-evenly  w-100">
                    <div data-aos="fade-up-right"  className=" w-[23%] text-center  justify-evenly  flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded ">
        <img className='w-[90px] h-[90px] flex justify-center ml-[35%]' src={myhtml} alt="" />
                        <h1 className='text-white/80' >HTML</h1>
                        <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-left"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[90px] h-[90px] flex justify-center ml-[35%]' src={myJS} alt="" />
                        <h1 className='text-white/80'>JAVASCRIPT</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-left"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[90px] h-[90px] flex justify-center ml-[35%]' src={myreact} alt="" />
                        <h1 className='text-white/80'>REACT</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-left"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[90px] h-[90px] flex justify-center ml-[35%]  ' src={myravel} alt="" />
                        <h1 className='text-white/80'>LARAVEL</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-left"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[90px] h-[90px] flex justify-center ml-[35%]  ' src={myboot} alt="" />
                        <h1 className='text-white/80'>BOOTSTRAP</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-right"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[90px] h-[90px] flex justify-center ml-[35%]  ' src={mysass} alt="" />
                        <h1 className='text-white/80'>SASS</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-right"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[150px] h-[90px] flex justify-center ml-[25%]  ' src={mytailwind} alt="" />
                        <h1 className='text-white/80'>TAILWIND</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div data-aos="fade-up-right"  className="w-[23%] text-center justify-evenly flex flex-col  h-[400px] bg-gradient-to-tr from-brown-100 to-brown-300 rounded">
                    <img className='w-[90px] h-[90px] flex justify-center ml-[35%]  ' src={mycss} alt="" />
                        <h1 className='text-white/80'>CSS</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </section>
            {/* fin section 2 */}
            {/* section 3 */}
            <section>
    <section  className="allsectionimg d-flex flex-column justify-content-evenly w-full bg-gradient-to-tr from-brown-900 to-brown-200 ">
      {/* <!--&&&&&&&  --> */}
      <section data-aos="fade-up-right" className="sectiontwo w-full bg-gradient-to-tr from-brown-900 to-brown-200">
        <div className="divvid">
          <img src={myshop} alt="" />
        </div>
        <div className="textvid">
          <h2 className=" fw-bold">FASHE STORE</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid vero iste minima debitis quo
            doloribus consequuntur quis! Doloribus sapiente non reprehenderit fugit accusamus deserunt temporibus
            quaerat
            similique doloremque nostrum!</p>
          <p  className="">Learn more about the Slack platform &nbsp; <i className="fa-solid fa-arrow-right"></i></p>
        </div>
      </section>
      {/* <!--&&&&  --> */}
      <section data-aos="fade-up-left" className="sectiontwo w-full bg-gradient-to-tr from-brown-200 to-brown-900">
        <div className="textvid">
          <h2 className=" fw-bold">MY MOVIE</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid vero iste minima debitis quo
            doloribus consequuntur quis! Doloribus sapiente non reprehenderit fugit accusamus deserunt temporibus
            quaerat
            similique doloremque nostrum!</p>
          <p  className="">Learn more about the Slack platform &nbsp; <i className="fa-solid fa-arrow-right"></i></p>
        </div>
        
        <div className="divvidlf">
          <img src={mymovie} alt="" />
        </div>
      </section>
      {/* <!--&&&  --> */}
      <section data-aos="fade-up-right" className="sectiontwo w-full bg-gradient-to-tr from-brown-900 to-brown-200">
        <div className="divvid">
          <img classNameName='w-full' src={myevent} alt="" />
        </div>
        <div className="textvid">
          <h2 className=" fw-bold">EVENTGEEK</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid vero iste minima debitis quo
            doloribus consequuntur quis! Doloribus sapiente non reprehenderit fugit accusamus deserunt temporibus
            quaerat
            similique doloremque nostrum!</p>
          <p  className="">Learn more about the Slack platform &nbsp; <i className="fa-solid fa-arrow-right"></i></p>
        </div>
      </section>
    </section>

            </section>
            {/* fin section 3 */}
            {/* section 4 */}
            <div className='firstsc h-[90vh]  w-full  firstdiv bg-white '> 
            <div className="flex flex-wrap justify-between align-items-center text-center p-4">
            <div className=" w-50 text-black" data-aos="fade-right">
            <section>
            <div className=" col-md-8 bg-gradient-to-tr from-brown-800 to-brown-200 w-100 h-[600px] rounded-full p-5">
    <form className="max-w-md mx-auto">
    <h2 className="pb-8 text-2xl font-bold tracking-tight text-brown-900/90 dark:text-white">Send us your message</h2>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_email" id="floating_email" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-white bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-brown-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-white/90 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white/90 peer-focus:dark:text-brown-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_password" id="floating_password" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-white bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-brown-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-white/90 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/90 peer-focus:dark:text-brown-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="repeat_password" id="floating_repeat_password" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-white bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-brown-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white/90 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/90 peer-focus:dark:text-brown-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <textarea type="text" name="repeat_password" id="floating_repeat_password" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-white bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-brown-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white/90 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/90 peer-focus:dark:text-brown-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
  </div>
  <button className=' rounded-3xl bg-gradient-to-tr from-yellow-900 to-yellow-800 text-white px-10 py-2'>SEND</button>
</form>

    </div>

            </section>
            </div>
            <div   className=" w-50  mt-[13vh] flex justify-end  ">
                <div className="w-[600px] h-[605px] bg-white/20 rounded-[50%] flex justify-center pt-2">

                <img data-aos="fade-left" className=' h-[597px]' src={myimg} alt="" />
                </div>
            </div>
            </div>
            </div>

        </>
    )
}
