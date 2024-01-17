export default function Footer() {
  return (
    <div>
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7614.416869582637!2d78.460645!3d17.401782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9769ca016e5b%3A0xd81be922a1768b7!2sExpress%20Apartment%2C%20Redhills%2C%20Hyderabad%2C%20Telangana%20500004!5e0!3m2!1sen!2sin!4v1705475535450!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <footer className="bg-[#D13242] text-white p-4 ">
        <div className="grid grid-cols-4 gap-4 mx-[8%]">
          <div className="col-span-1">
            <p className="mb-2 text-2xl">Marvix Solutions</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s
            </p>
          </div>

          <div className="col-span-1">
            <p className="mb-2 text-2xl">Quick Links</p>
            <ul className="gap-3">
              <li className="py-1">home</li>
              <li className="py-1">About Us</li>
              <li className="py-1">Contact Us</li>
              <li className="py-1">Blogs</li>
              <li className="py-1">Sitemaps</li>
            </ul>
          </div>

          <div className="col-span-1">
          <p className="mb-2 text-2xl">Our Services</p>
            <ul>
              <li className="py-1">SEO</li>
              <li className="py-1">SEM</li>
              <li className="py-1">Social Media Marketing</li>
              <li className="py-1">Website Development</li>
              <li className="py-1">Mobile app Development</li>
            </ul>
          </div>

          <div className="col-span-1">
            <p className="mb-2 text-2xl">Reach Us</p>
            <ul>
              <li className="py-1">03, Express Apartment, Redhill, Lakdikaput, Hyderabad, india - 5000004</li>
              <li className="py-1">+91 636-230-5193</li>
              <li className="py-1">support@marvix.solutions</li>
           
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
