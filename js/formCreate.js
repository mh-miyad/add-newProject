function addForm(id) {
  let count = 0;
  var form = document.getElementById(id);
  var newForm = document.createElement("div");
  newForm.classList.add("created-form");
  newForm.innerHTML = `
        
                     <div class="flex justify-between">
                      <h2 class="text-xl my-2 font-medium">Ticket Buyer</h2>
                      <button type="button"  class="btn btn-delete" onclick="removeForm(this)" >Remove</button>
                     </div>
                  <div class="flex items-center justify-center lg:justify-between gap-5 flex-wrap lg:flex-nowrap">
                    <div class="form-control flex-grow">
                      <label for="ticket-Buyer-first-name${count}" class="sr-only"
                        >First Name
                      </label>
                      <input
                        type="text"
                        id="ticket-Buyer-first-name${count}"
                        name="ticket-Buyer-first-name${count}"
                        placeholder="First Name "
                      />
                    </div>
                    <div class="form-control flex-grow">
                      <label for="ticket-Buyer-last-name${count}" class="sr-only"
                        >Last Name
                      </label>
                      <input
                        type="text"
                        id="ticket-Buyer-last-name${count}"
                        name="ticket-Buyer-last-name${count}"
                        placeholder="Last Name "
                      />
                    </div>
                  </div>
                  <div class="flex items-center justify-center lg:justify-between gap-5 flex-wrap lg:flex-nowrap">
                    <div class="form-control flex-grow">
                      <label for="ticket-Buyer-email${count}" class="sr-only"
                        >email
                      </label>
                      <input
                        type="email"
                        id="ticket-Buyer-email${count}"
                        name="ticket-Buyer-email${count}"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-control flex-grow">
                      <label for="ticket-Buyer-confirm-email${count}" class="sr-only"
                        >Confirm Email
                      </label>
                      <input
                        type="text"
                        id="ticket-Buyer-confirm-email${count}"
                        name="ticket-Buyer-confirm-email${count}"
                        placeholder="Confirm Email"
                      />
                    </div>
                  </div>
                  <div class="flex items-center justify-center lg:justify-between gap-5 flex-wrap lg:flex-nowrap">
                    <div class="form-control flex-grow">
                      <label for="ticket-Buyer-company-name${count}" class="sr-only"
                        >Company Name 
                      </label>
                      <input
                        type="text"
                        id="ticket-Buyer-company-name${count}"
                        name="ticket-Buyer-company-name${count}"
                        placeholder="Company Name "
                      />
                    </div>
                    <div class="form-control flex-grow">
                      <label for="ticket-Buyer-designation${count}" class="sr-only"
                        >Designation 
                      </label>
                      <input
                        type="text"
                        id="ticket-Buyer-designation${count}"
                        name="ticket-Buyer-designation${count}"
                        placeholder="Designation"
                      />
                    </div>
                  </div>
                
    `;
  form.appendChild(newForm);
  count++;
}

function removeForm(param) {
  const mainDiv = param.closest(".created-form");
  mainDiv.remove();
  count--;
}
