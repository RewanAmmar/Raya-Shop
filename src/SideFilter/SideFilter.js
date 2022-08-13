import React from 'react'
import { GrFormAdd } from "react-icons/gr";


export default function SideFilter() {



  return (
    <>
      <div className=' d-flex  flex-column pt-4'>
       
        <h2>Filter by</h2>
        <p>
          <a className="box" data-bs-toggle="collapse" href="#a" role="button" aria-expanded="false" aria-controls="collapseExample">
            
            <div className='d-flex justify-content-between align-items-center'>
              <span>price</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
             
          </a>

        </p>
        <div className="collapse" id="a">
          <input type='range' min={0} max={400000} />
          < div className='w-75 d-flex justify-content-between'>
            <span>0</span>
            <span>400000</span>
          </div>


        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#b" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Number Of Speeds</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="b">
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />1 Speed<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />2 Speed<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />3 Speed<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />4 Speed<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />5 Speed<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#c" role="button" aria-expanded="false" aria-controls="collapseExample">

            <div className='d-flex justify-content-between align-items-center'>
              <span>Number Of Blades</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="c">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />2 Blades<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />3 Blades<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />4 Blades<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />5 Blades<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />6 Blades<br />
        </div>
        <hr />

        <p>
          <a className="box" data-bs-toggle="collapse" href="#d" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Fan Diameter</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="d">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />10 cm<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />15 cm<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />20 cm<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />25 cm<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />30 cm<br />

            <a href='#'>Show More Fan Diameter</a>
          </form>
        </div>

        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#e" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Fan Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="e">


          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Ceiling Fans<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Stand Fans<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Wall Mount Fans<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Box Fans<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Ventilating Fans<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Table Fans<br />
            <a href='#'>Show More Fan Type</a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#f" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Power Consumption</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="f">


          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />2300 watt<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />2400 watt<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />56 watt<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />750 watt<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1200 watt<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1400 watt<br />
            <a href='#'>Show More Power Consumption</a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#g" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Vacuum Cleaner Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="g">


          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Handheld Vacuum Cleaners<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Upright Vacuum Cleaners<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Canister Vacuum Cleaners<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Carpet Vacuum Cleaners<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />
            Steam Vacuum Cleaners<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Stick Vacuum Cleaners<br />
            <a href='#'>Show More Vacuum Cleaner Type </a>
          </form>
        </div>
        <hr />

        <p>
          <a className="box" data-bs-toggle="collapse" href="#h" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Dust Bag Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="h">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Bagged<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />Bagless<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#j" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Juicer Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="j">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Citurs press<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />Juice Extractor<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#k" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Capacity In Liter</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="k">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Less Than 1 Liter<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />1 - 1.5 Liters<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />More Than 1.5 Liters<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#j" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Scale Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="j">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Digital Bathroom Scale<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Mechanical Bathroom Scale<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Digital Kitchen Scale<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Mechanical Kitchen Scale<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Baby Scale<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Luggage Scale<br />
            <a href='#'>Show More Scale Type</a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#l" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Water Temperature Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="l">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Hot & Cold<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Hot, Cold & Normal<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#m" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Refrigerator Included</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="m">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Yes<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />N0<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#n" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Number Of Taps</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="n">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1 Taps<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />2 Taps<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />3 Taps<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="j" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Remote Control</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="j">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Yes<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />N0<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#k" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Remote Control</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="k">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Ceramic Heaters<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Fan Heaters<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Halogen Heaters<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Quartz Heaters<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Radiant Heaters<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#3" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Iron Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="3">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Dry Iron<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Steam Generator<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Steam Iron<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Garment Steamers<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#l" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="l">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Chopper<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#m" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Capacity</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="m">

          < input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1.5 Liter<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />3 Liter<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Unavailable<br />

        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#n" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Cartridge Included</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="n">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> 0 <br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1 <br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#o" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Shop By Category</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="o">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Mobiles & Tablets<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Heaters<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />Refrigerators<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Water Heaters <br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Kettles<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Vacuum Cleaners<br />


            <a href='#'>Show More Shop By Category </a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="p" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Mixer Type</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="p">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Hand Mixer <br />
        </div>

        <div className="collapse" id="q">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Water filter <br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Cartridge <br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#r" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Net Included</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="r">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> 0 <br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1 <br />
        </div>

        <hr />
      </div>
      {/* </div> */}


    </>
  )
}
