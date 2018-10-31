import React, { Component } from "react";
import "./styles/Card.css";
import "./styles/Artists.css";
import { Link, BrowserRouter } from "react-router-dom";

export default class Artists extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //     <Link to="/lilstar">
      //       <div className="row">
      //         <div className="column">
      //           <br />

      //           <div className="card">
      //             <div className="container">
      //               <img
      //                 className="deleted"
      //                 src="https:pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
      //                 alt="Avatar"
      //               />
      //               <h4>
      //                 <b> Lil Star</b>
      //               </h4>
      //               <p>Los Angeles, CA</p>
      //             </div>
      //           </div>
      //           <br />
      //         </div>
      //       </div>
      //     </Link>

      //     <Link to="/lilstar">
      //       <div className="row">
      //         <div className="column">
      //           <br />

      //           <div className="card">
      //             <div className="container">
      //               <img
      //                 className="deleted"
      //                 src="https:pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
      //                 alt="Avatar"
      //               />
      //               <h4>
      //                 <b> Lil Star</b>
      //               </h4>
      //               <p>Los Angeles, CA</p>
      //             </div>
      //           </div>
      //           <br />
      //         </div>
      //       </div>
      //     </Link>
      //   </div>
      // </BrowserRouter>

      <div>
        <h1 className="center">Artists</h1>

        <div className="row">
          <Link to="/lilstar" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> Lil Star</b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
            </div>
          </Link>

          <Link to="/KVNINO" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> Lil Star</b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
            </div>
          </Link>

          <Link to="/isaac" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> Lil Star</b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
            </div>
          </Link>

          <Link to="/jesseta" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> Lil Star</b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
