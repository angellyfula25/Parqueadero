import React from "react";
export const MainTableCar = () => {

  return (
    <>
    <br/>
    <div className="flex">
    <div className="flex-auto w-32 ">
      <label className="mx-8">Ingrese placa</label>
      <br/>
      <input type="text"
        placeholder="Placa"
        className="Metropolis-Bold placeholder:text-slate-400 block bg-white w-40 border-4 border-black rounded-md mx-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="placa">
      </input>
    </div>
    <div className="flex-auto w-32">
      <label className="mx-8">Ingrese Celda</label>
      <br/>
      <input type="text"
        placeholder="celda"
        className="Metropolis-Bold placeholder:text-slate-400 block bg-white w-40 border-4 border-black rounded-md mx-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="celda">
      </input>
    </div>
    <div className="flex-auto w-32">
      <label className="mx-8">ingresar</label>
      <br/>
      <input type="button"
        placeholder="ingresar"
        className="Metropolis-Bold placeholder:text-slate-400 block bg-[#1dbc6d] w-40 border-4 border-black rounded-md mx-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="ingreso">
      </input>
    </div>
    </div>
    <br/>
    <br/>
          <div className="overflow-hidden  bg-[#1dbc6d]">
            <table className="min-w-full border-collapse border border-black text-center rounded-[12px] overflow-hidden">
              <tbody className="border-8 border-black  rounded-[12px]">
                <tr className="bg-white">
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    A1
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    A2
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A3
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A4
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A5
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A6
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A7
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A8
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A9
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black ">
                    A10
                  </th>
                </tr>
                <tr className="bg-white">
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B1
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B2
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B3
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B4
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B5
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B6
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B7
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B8
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B9
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    B10
                  </th>
                </tr>
                <tr className="bg-white">
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C1
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    C2
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C3
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C4
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C5
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    C6
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C7
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C8
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C9
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    C10
                  </th>
                </tr>
                <tr className="bg-white">
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D1
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D2
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    D3
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D4
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    D5
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D6
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D7
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D8
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    D9
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    D10
                  </th>
                </tr>
                <tr className="bg-white">
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E1
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E2
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E3
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E4
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E5
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E6
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E7
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E8
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E9
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    E10
                  </th>
                </tr>
                <tr className="bg-white">
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F1
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    F2
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F3
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F4
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left bg-[#1dbc6d] border-8 border-black">
                    F5
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F6
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F7
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F8
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F9
                  </th>
                  <th className="text-sm text-black Metropolis-Bold px-4 py-4 text-left border-8 border-black">
                    F10
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
    <div className="flex">
    <div className="flex-auto w-32">
      <label className="mx-8">Ingrese placa</label>
      <br/>
      <input type="text"
        placeholder="Placa"
        className="Metropolis-Bold placeholder:text-slate-400 block bg-white w-40 border-4 border-black rounded-md mx-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="placa">
      </input>
    </div>
    <div className="flex-auto w-32">
      <label className="mx-8">Ingrese Celda</label>
      <br/>
      <input type="text"
        placeholder="celda"
        className="Metropolis-Bold placeholder:text-slate-400 block bg-white w-40 border-4 border-black rounded-md mx-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="celda">
      </input>
    </div>
    <div className="flex-auto w-32">
      <label className="mx-8">ingresar</label>
      <br/>
      <input type="button"
        placeholder="ingresar"
        className="Metropolis-Bold placeholder:text-slate-400 block bg-[#1dbc6d] w-40 border-4 border-black rounded-md mx-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="ingreso">
      </input>
    </div>
    </div>
    <div className="bg-gray-900">
      <footer className="bg-gray-900">

      </footer>
    </div>
</>
  );
}
