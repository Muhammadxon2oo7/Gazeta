import React from 'react'
import { Link } from 'react-router-dom'
import "./Notfound.css"
import { FcHome } from "react-icons/fc"
const notfound = () => {

  return (
    <div className='notfound'>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>


                </div>

                <div className="contant_box_404">
                  <h3 className="h3">
                    Look like you're lost
                  </h3>

                  <p className='p'>the page you are looking for not avaible!</p>

                  <div className="wrapper">
                    <div className="link_wrapper">
                      <Link className='Link' to="/">Home</Link>
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                          <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default notfound