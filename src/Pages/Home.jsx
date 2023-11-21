import React from "react";
import Card from "../Components/Card";

function Home() {
   return (
      <>
         <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
         >
            What TO-DO?
         </button>
         <Card />

         <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Create a TO-DO
                     </h1>
                     <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div class="modal-body">
                     <div class="form-floating mb-3">
                        <input
                           type="text"
                           class="form-control"
                           id="floatingInput"
                           placeholder="name@example.com"
                        />
                        <label for="floatingInput">Enter your To-Do</label>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                     >
                        Close
                     </button>
                     <button type="button" class="btn btn-success">
                        Understood
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
