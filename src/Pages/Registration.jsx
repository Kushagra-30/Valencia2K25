import Swal from "sweetalert2";

function Registration() {


   const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
  if (response.ok) {
    Swal.fire({
      title: "Submitted!",
      text: "Thank you for registering.",
      icon: "success",
      confirmButtonColor: "#2563eb",
    }).then(() => {
      form.reset();
    });
  } else {
    Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
  }
}) 
  }


  return (
    <div className="relative min-h-screen flex items-center justify-center">
    <div class="min-w-sm mx-auto bg-[#ffffffd1] shadow-lg rounded-lg p-6 mt-8 mb-12 ">
        <img className="fixed top-0 left-0 w-full h-full object-cover -z-10" src="BG1-Enhanced.jpg" alt="" />
  <h2 class="text-2xl font-bold text-center mb-6">Registration</h2>

  <form class="space-y-4 font-cinzel font-bold" action="https://sheetdb.io/api/v1/ikiidp3k6e0kt" method="post" onSubmit={handleSubmit}> 
    <div>
      <label class="block  font-semibold mb-1">College Name</label>
      <input type="text" placeholder="Enter college name" name="College_Name" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" required/>
    </div>

    <div>
      <label class="block  font-semibold mb-1">Place</label>
      <input type="text" placeholder="Enter place Eg:Moodbidri" name="Place" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" required/>
    </div>

    <div>
      <label class="block  font-semibold mb-1">Email</label>
      <input type="email" placeholder="Enter email" name="Email" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" required/>
    </div>

    <div>
      <label class="block  font-semibold mb-1">Staf Name</label>
      <input type="text" placeholder="Enter Staff Name" name="Staff_Name" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
    </div>

    <div>
      <label class="block  font-semibold mb-1">Staff Contact Number</label>
      <input type="tel" placeholder="Enter staff number" name="Staff_Number" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" required/>
    </div>

    <div>
      <label class="block  font-semibold mb-2">Select Events</label>
      <div class="space-y-2">
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Treasure_Hunt" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>1. Realm of Zeus (Treasure Hunt)</span>
         </div>
         <div>
          <input type="text" placeholder="1.Partipant Name" name="TH_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="tel" placeholder="Contact Number" name="TH_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="text" placeholder="2.Partipant Name" name="TH_P2" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="tel" placeholder="Contact Number" name="TH_P2Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="text" placeholder="3.Partipant Name" name="TH_P3" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="tel" placeholder="Contact Number" name="TH_P3Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="text" placeholder="4.Partipant Name" name="TH_P4" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="tel" placeholder="Contact Number" name="TH_P4Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Reel_Making" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>2. NYXVISION (REEL MAKING)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="RM_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="RM_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
         </div>
        </label>
        <label class="flexflex-col">
         <div class="flex items-center space-x-2">
          <input type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>3. APHRODITE'S APPEAL (BRAND RANGOLI)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="BR_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="BR_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="text" placeholder="Partipant Name" name="BR_P2" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="BR_P2Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
         </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Falling_Down_Business" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>4. FALL OF TITANS (FALLING DOWN BUSINESS)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="FDB_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="FDB_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="text" placeholder="Partipant Name" name="FDB_P2" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="FDB_P2Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
        </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Business_Quiz" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>5. OLYMPUS ORACLE (BUSINESS QUIZ)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="BQ_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="BQ_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="text" placeholder="Partipant Name" name="BQ_P2" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="BQ_P2Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
        </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Modling_Presentation" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>6. MEDUSA'S VISION (MODELING PRESENTATION)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="MP_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MP_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="text" placeholder="Partipant Name" name="MP_P2" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MP_P2Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
         </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Mad_Add" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>7. HERMES' PITCH (MAD AD)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="MA_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MA_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="text" placeholder="Partipant Name" name="MA_P2" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MA_P2Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="text" placeholder="Partipant Name" name="MA_P3" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MA_P3Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="text" placeholder="Partipant Name" name="MA_P4" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MA_P4Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
          <input type="text" placeholder="Partipant Name" name="MA_P5" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MA_P5Num" class="w-1/2  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none" />
         </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Marketing" type="checkbox" 
          value="yes" 
           class="accent-blue-600" />
          <span>8. ECHOES OF ATHENA (MOCK PRESS)</span>
         </div>
         <div>
          <input type="text" placeholder="Partipant Name" name="MP_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="MP_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
         </div>
        </label>
        <label class="flex flex-col">
         <div class="flex items-center space-x-2">
          <input name="Special_Event" type="checkbox" 
          value="yes" class="accent-blue-600" />
          <span>9. PANDORA'S MYSTERY (SPECIAL EVENT)</span>
         </div>
         <div className="lg:w-1/3">
          <input type="text" placeholder="Partipant Name" name="SE_P1" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
          <input type="tel" placeholder="Contact Number" name="SE_P1Num" class="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-200 focus:outline-none"/>
         </div>
           <br />
        </label>
        <h5 className="font-black">Note: Special Event is Compulsory</h5>
      </div>
    </div>

    <div class="pt-4">
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200" >
        Register
      </button>
    </div>
  </form>
</div>
</div>

  )
}

export default Registration
