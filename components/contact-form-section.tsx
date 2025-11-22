
// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Mail, Phone } from "lucide-react"

// export default function ContactFormSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     setFormData({ name: "", email: "", phone: "", message: "" })
//   }

//   return (
//     <div className="bg-amber-50 py-10">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <div className="bg-[#fff39b] rounded-3xl p-6 sm:p-8 h-fit">
//             <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
//               Send us a message
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[#ffd457] hover:bg-yellow-500 text-gray-900 font-oswald font-bold text-base px-6 py-2 rounded-full border-2 border-gray-900 transition mt-4"
//               >
//                 Submit Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Details */}
//           <div className="space-y-10">
//             <div>
//               <h2 className="font-oswald font-bold text-3xl text-gray-900 mb-4">Contact Details</h2>

//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-yellow-500" />
//                   <span className="font-oswald text-base text-gray-900">godigital@fdms.co.in</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-yellow-500" />
//                   <span className="font-oswald text-base text-gray-900">+91 77180 64819</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="font-oswald font-bold text-3xl text-gray-900 mb-4">Our Address</h2>
//               <div className="space-y-1">
//                 <p className="font-oswald text-base text-gray-900">3rd Floor, Meera Industries,</p>
//                 <p className="font-oswald text-base text-gray-900">R-597/598, Rabale MIDC,</p>
//                 <p className="font-oswald text-base text-gray-900">Navi Mumbai - 400701</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="font-oswald font-bold text-3xl text-gray-900 mb-4">Follow Us</h2>
//               <div className="flex flex-wrap gap-3">
//                 {["Linkedin", "Facebook", "Twitter", "Instagram", "Youtube"].map((platform) => (
//                   <a
//                     key={platform}
//                     href="#"
//                     className="font-oswald text-base text-gray-900 hover:text-gray-700 transition"
//                   >
//                     {platform}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f", // 🔥 same key used
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (result.success) {
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } else {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="bg-amber-50 py-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-[#fff39b] rounded-3xl p-6 sm:p-8 h-fit">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-oswald font-bold text-base text-gray-900 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border-b-2 border-gray-900 bg-transparent pb-1 font-oswald text-gray-900 placeholder-gray-700 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#ffd457] hover:bg-yellow-500 text-gray-900 font-oswald font-bold text-base px-6 py-2 rounded-full border-2 border-gray-900 transition mt-4"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-10">
            <div>
              <h2 className="font-oswald font-bold text-3xl text-gray-900 mb-4">Contact Details</h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span className="font-oswald text-base text-gray-900">godigital@fdms.co.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="font-oswald text-base text-gray-900">+91 77180 64819</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-oswald font-bold text-3xl text-gray-900 mb-4">Our Address</h2>
              <div className="space-y-1">
                <p className="font-oswald text-base text-gray-900">3rd Floor, Meera Industries,</p>
                <p className="font-oswald text-base text-gray-900">R-597/598, Rabale MIDC,</p>
                <p className="font-oswald text-base text-gray-900">Navi Mumbai - 400701</p>
              </div>
            </div>

            <div>
              <h2 className="font-oswald font-bold text-3xl text-gray-900 mb-4">Follow Us</h2>
              <div className="flex flex-wrap gap-3">
                {["Linkedin", "Facebook", "Twitter", "Instagram", "Youtube"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-oswald text-base text-gray-900 hover:text-gray-700 transition"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
