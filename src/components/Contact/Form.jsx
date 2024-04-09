import React from 'react'

const Form = () => {
  return (
    <div className='bg-white p-4 lg:p-8 md:p-6 sm:p-9 rounded-md w-[max-content] shadow-sm shadow-black'>
        <div className='lg:gap-5 md:gap-4 sm:gap-3 gap-3'>
            <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col flex-wrap lg:gap-5 md:gap-4 sm:gap-3 gap-2 '>
                <div className=''>
                    <input type="text" placeholder='Enter your name' className='p-3 placeholder:font-semibold rounded-md border-[1px] border-black lg:w-[320px] md:w-[320px] sm:w-[320px] w-[250px]'/>
                </div>
                <div className=''>
                    <input type="email" placeholder='Enter your email' className='p-3 placeholder:font-semibold rounded-md border-[1px] border-black lg:w-[320px] md:w-[320px] sm:w-[320px] w-[250px]'/>
                </div>
            </div>
            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col mt-4 flex-wrap lg:gap-5 md:gap-4 sm:gap-3 gap-2 '>
                <div className=''>
                    <input type="text" placeholder='Enter your name' className='p-3 placeholder:font-semibold rounded-md border-[1px] border-black lg:w-[320px] md:w-[320px] sm:w-[320px] w-[250px]'/>
                </div>
                <div className=''>
                    <input type="email" placeholder='Enter your email' className='p-3 placeholder:font-semibold rounded-md border-[1px] border-black lg:w-[320px] md:w-[320px] sm:w-[320px] w-[250px]'/>
                </div>
            </div>
            <div className='pt-5 pb-5 '>
              <p>Select Your Interest</p>
              <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col mt-4 flex-wrap lg:gap-5 md:gap-4 sm:gap-3 gap-2 '>
                <div className=''>
                <select class="p-3 border-b-2 rounded-md lg:w-[320px] md:w-[320px] sm:w-[320px] w-[250px]">
                        <option selected="selected" className='text-[24px] font-medium'>Select Discipline</option>
                        <option value="">B.tech Computer Science</option>
                        <option value="">B.tech Electronics and comm engineering</option>
                        <option value="">B.tech Mechanical Engineering</option>
                        <option value="">B.Tech Civil Engineering</option>
                        <option value="">Diploma Computer Science Engineering</option>
                        <option value="">M.Tech Computer Science</option>
                        <option value="">M.Tech Electronics and Communications Engineering</option>
                        <option value="">M.Tech Mechanical Engineering</option>
                        <option value="">Diploma electronic engineering</option>
                        <option value="">Diploma Mechanical Engineering</option>
                        <option value="">Diploma Civil Engineering</option>
                    </select>
                </div>
                <div className=''>
                <select class="p-3 border-b-2 rounded-md lg:w-[320px] md:w-[320px] sm:w-[320px] w-[250px]">
                        <option selected="selected" className='text-[24px] font-medium'>Select Program</option>
                       
                        
                    </select>
                </div>
            </div>
            </div>
            <div className='pt-2 pb-5 '>
              <p>How Old are You?</p>
              <div className='flex justify-center lg:flex-row md:flex-row sm:flex-col flex-col mt-4 flex-wrap lg:gap-5 md:gap-4 sm:gap-3 gap-2 '>
                <div>
                  <select name="" id="" className='pt-2 pb-2 w-[200px] px-5 border-b-2 rounded-md'>
                    <option selected="selected">DD</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div>
                  <select name="" id="" className='pt-2 pb-2 w-[200px] px-5 border-b-2 rounded-md'>
                    <option selected="selected">MM</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    
                  </select>
                </div>
                <div>
                  <select name="" id="" className='pt-2 pb-2 w-[200px] px-5 border-b-2 rounded-md'>
                    <option selected="selected">YY</option>
                    <option>1980</option>
                    <option>1981</option>
                    <option>1983</option>
                    <option>1984</option>
                    <option>1985</option>
                    <option>1986</option>
                    <option>1987</option>
                    <option>1988</option>
                    <option>1989</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                  </select>
                </div>
            </div>
            </div>
            <div className='flex gap-3 justify-center flex-col lg:flex-row md:flex-row sm:flex-row'>
              <div className="rounded-md bg-[#fea700] px-4 py-2 text-white font-medium text-[24px] text-center">Register Now</div>
              <div className="rounded-md bg-[#dcdcdc] px-4 py-2 text-center font-medium text-[24px]">Already Registed?</div>
            </div>
        </div>
    </div>
  )
}

export default Form