import React from "react";
import Footer from "../components/Footer";
import service from "../assets/service.png";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-64 md:h-80 lg:h-96 w-full mb-0 px-3">
        <img
          src={service}
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Qbee's Laundry Price
          </h1>
        </div>
      </div>
      <div className="mt-0 overflow-x-auto px-3 ">
        <table className="table-auto w-full text-left border-collapse border border-gray-300 ">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-300 px-4 py-2">Items</th>
              <th className="border border-gray-300 px-4 py-2">Ironing</th>
              <th className="border border-gray-300 px-4 py-2">
                Washing + Ironing
              </th>
              <th className="border border-gray-300 px-4 py-2">Dry Cleaning</th>
            </tr>
          </thead>
          <tbody>
            {/* Clothing */}
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">T-Shirt</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Shirt</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Pant</td>
              <td className="border border-gray-300 px-4 py-2">2.5</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">
                Tops (Short/Long)
              </td>
              <td className="border border-gray-300 px-4 py-2">3/4</td>
              <td className="border border-gray-300 px-4 py-2">5/6</td>
              <td className="border border-gray-300 px-4 py-2">6/7</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">
                Skirt (Short/Long)
              </td>
              <td className="border border-gray-300 px-4 py-2">3/4</td>
              <td className="border border-gray-300 px-4 py-2">5/6</td>
              <td className="border border-gray-300 px-4 py-2">6/7</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Dress</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Jacket</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Suit (2 pcs)</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
              <td className="border border-gray-300 px-4 py-2">25</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Sweater</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">7</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Long Coat</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">15-20</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">
                Police Uniform
              </td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">
                Pyjama (2 pcs)
              </td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Saree</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Dishdasha</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">7</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Ghutrah</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">7</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Abaya</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Jalabiya</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Shayla</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Lungi</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">7</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Vest</td>
              <td className="border border-gray-300 px-4 py-2">1.5</td>
              <td className="border border-gray-300 px-4 py-2">2.5</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Underwear</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
            </tr>

            {/* Household Items */}
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">
                Blanket (Small/King)
              </td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">15/20</td>
              <td className="border border-gray-300 px-4 py-2">20/25</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">
                Comforts (Small/King)
              </td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">20/25</td>
              <td className="border border-gray-300 px-4 py-2">25/30</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">
                Bedsheet (Small/King)
              </td>
              <td className="border border-gray-300 px-4 py-2">5/6</td>
              <td className="border border-gray-300 px-4 py-2">7/9</td>
              <td className="border border-gray-300 px-4 py-2">10/12</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">
                Duvet Cover (Small/King)
              </td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">12/15</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Pillow</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Pillow Case</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">2.5</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">
                Bath Towel (Small/King)
              </td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">4/5</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Bath Robe</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Hand Towel</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Face Towel</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Door Mat</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Bath Mat</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Table Cloth</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">
                Curtain (Sqr Mtr)
              </td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">
                Carpet (Sqr Mtr)
              </td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
            </tr>
            <tr className="bg-orange-300">
              <td className="border border-gray-300 px-4 py-2">Shoe</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Cap</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-grow py-3" />
      <Footer />
    </div>
  );
};

export default Pricing;
