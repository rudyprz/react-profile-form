import React, {useState} from 'react';
import { Address, Bank, Contact, Fiscal, Legal } from './components';
import './App.css';

const App = () => {

  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [fiscalData, setFiscalData] = useState({})
  const [addressData, setaddressData] = useState({})
  const [contactData, setcontactData] = useState({})
  const [legalData, setlegalData] = useState({})
  const [bankData, setbankData] = useState({})

  const [errorFiscal, setErrorFiscal] = useState({})
  const [errorAddress, setErrorAddress] = useState({})
  const [errorContact, setErrorContact] = useState({})
  const [errorLegal, setErrorLegal] = useState({})
  const [errorBank, setErrorBank] = useState({})

  // Fiscal Data Change Handler
  const onChangeFiscalHandler = (event) => {
    setFiscalData({
      ...fiscalData,
      [event.target.name] : event.target.value
    })
  }
  // Fiscal Date Change Handler
  const onChangeDateFiscal = (data) => {
    setFiscalData({
      ...fiscalData,
      ['fiscal-date'] : data
    })
  }

  // Address Data Change Handler
  const onChangeAddHandler = (event) => {
    setaddressData({
      ...addressData,
      [event.target.name] : event.target.value
    })
  }
  // File Data Address Handler
  const onChangeAddFileHandler = (event) => {
    setaddressData({
      ...addressData,
      [event.target.name] : event.target.files[0]
    })
  }

  // Contact Data Change Handler
  const onChangeContactHandler = (event) => {
    setcontactData({
      ...contactData,
      [event.target.name] : event.target.value
    })
  }

  // Legal Data Change Handler
  const onChangeLegalHandler = (event) => {
    setlegalData({
      ...legalData,
      [event.target.name] : event.target.value
    })
  }
  // Legal Date Change Handler
  const onChangeDateLegal = (data) => {
    setlegalData({
      ...legalData,
      ['legal-date'] : data
    })
  }
  // File Data Address Handler
  const onChangeLegalFileHandler = (event) => {
    setaddressData({
      ...legalData,
      [event.target.name] : event.target.files[0]
    })
  }

  // Bank Data Change Handler
  const onChangeBankHandler = (event) => {
    setbankData({
      ...bankData,
      [event.target.name] : event.target.value
    })
  }

  // Submit Data Handler for Validation
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(fiscalData);
    handleFiscalValidation();
    handleAddressValidation();
    handleContactValidation();
    handleLegalValidation();
    handleBankValidation();
  }

  // Handle Fiscal Validation
  const handleFiscalValidation = () => {
    let err = {};
    if(!fiscalData["razon-social"]) {
      err["razon-social"] = "Favor de completar este campo"
    } else {
      err["razon-social"] = ""
    }
    if(!fiscalData["nombre-comercial"]) {
      err["nombre-comercial"] = "Favor de completar este campo"
    } else {
      err["nombre-comercial"] = ""
    }
    if(!fiscalData["nacionalidad"]) {
      err["nacionalidad"] = "Favor de completar este campo"
    } else {
      err["nacionalidad"] = ""
    }
    if(!fiscalData["rfc"]) {
      err["rfc"] = "Favor de completar este campo"
    } else if(fiscalData["rfc"].length < 12 || fiscalData["rfc"].length > 13) {
      err["rfc"] = "Este campo debe de llevar entre 12 y 13 caracteres"
    } else {
      err["rfc"] = ""
    }
    if(!fiscalData["regimen-fiscal"]) {
      err["regimen-fiscal"] = "Favor de completar este campo"
    } else {
      err["regimen-fiscal"] = ""
    }
    if(!fiscalData["industria"]) {
      err["industria"] = "Favor de completar este campo"
    } else {
      err["industria"] = ""
    }
    setErrorFiscal(err)
  }

  // Handle Address Validation
  const handleAddressValidation = () => {
    let err = {};
    if(!addressData["calle"]) {
      err["calle"] = "Favor de completar este campo"
    } else {
      err["calle"] = ""
    }
    if(!addressData["num-ext"]) {
      err["num-ext"] = "Favor de completar este campo"
    } else {
      err["num-ext"] = ""
    }
    if(!addressData["num-int"]) {
      err["num-int"] = "Favor de completar este campo"
    } else {
      err["num-int"] = ""
    }
    if(!addressData["codigo-postal"]) {
      err["codigo-postal"] = "Favor de completar este campo"
    } else if(addressData["codigo-postal"].length !== 5) {
      err["codigo-postal"] = "El Código Postal debe contener 5 dígitos"
    } else {
      err["codigo-postal"] = ""
    }
    if(!addressData["colonia"]) {
      err["colonia"] = "Favor de completar este campo"
    } else {
      err["colonia"] = ""
    }
    if(!addressData["ciudad"]) {
      err["ciudad"] = "Favor de completar este campo"
    } else {
      err["ciudad"] = ""
    }
    if(!addressData["estado"]) {
      err["estado"] = "Favor de completar este campo"
    } else {
      err["estado"] = ""
    }
    if(!addressData["pais"]) {
      err["pais"] = "Favor de completar este campo"
    } else {
      err["pais"] = ""
    }
    if(!addressData["file-upload"]) {
      err["file-upload"] = "Favor de subir un archivo"
    } else {
      err["file-upload"] = ""
    }
    setErrorAddress(err)
  }

  // Handle Contact Validation
  const handleContactValidation = () => {
    let err = {};
    if(!contactData["telefono"]) {
      err["telefono"] = "Favor de completar este campo"
    } else if(contactData["telefono"].length !== 10) {
      err["telefono"] = "Este campo debe contenter 10 dígitos"
    } else {
      err["telefono"] = ""
    }
    if(!contactData["correo"]) {
      err["correo"] = "Favor de completar este campo"
    } else if(!regex.test(contactData["correo"])){
      err["correo"] = "Favor de ingresar un correo válido"
    } else {
      err["correo"] = ""
    }
    setErrorContact(err)
  }

  // Handle Legal Validation
  const handleLegalValidation = () => {
    let err = {};
    if(!legalData["nombre-rep"]) {
      err["nombre-rep"] = "Favor de completar este campo"
    } else {
      err["nombre-rep"] = ""
    }
    if(!legalData["genero-rep"]) {
      err["genero-rep"] = "Favor de completar este campo"
    } else {
      err["genero-rep"] = ""
    }
    if(!legalData["entidad-rep"]) {
      err["entidad-rep"] = "Favor de completar este campo"
    } else {
      err["entidad-rep"] = ""
    }
    if(!legalData["pais-rep"]) {
      err["pais-rep"] = "Favor de completar este campo"
    } else {
      err["pais-rep"] = ""
    }
    if(!legalData["nacionalidad-rep"]) {
      err["nacionalidad-rep"] = "Favor de completar este campo"
    } else {
      err["nacionalidad-rep"] = ""
    }
    if(!legalData["curp-rep"]) {
      err["curp-rep"] = "Favor de completar este campo"
    } else if(legalData["curp-rep"].length !== 18){
      err["curp-rep"] = "Este campo debe tener 18 caracteres"
    } else {
      err["curp-rep"] = ""
    }
    if(!legalData["rfc-rep"]) {
      err["rfc-rep"] = "Favor de completar este campo"
    } else if(legalData["rfc-rep"].length < 12 || legalData["rfc-rep"].length > 13){
      err["rfc-rep"] = "Este campo debe de llevar entre 12 y 13 caracteres"
    } else {
      err["rfc-rep"] = ""
    }
    if(!legalData["domicilio-rep"]) {
      err["domicilio-rep"] = "Favor de completar este campo"
    } else {
      err["domicilio-rep"] = ""
    }
    if(!legalData["estado-civil-rep"]) {
      err["estado-civil-rep"] = "Favor de completar este campo"
    } else {
      err["estado-civil-rep"] = ""
    }
    if(!legalData["email-rep"]) {
      err["email-rep"] = "Favor de completar este campo"
    } else if(!regex.test(legalData["email-rep"])){
      err["email-rep"] = "Favor de ingresar un correo válido"
    } else {
      err["email-rep"] = ""
    }
    if(!legalData["tel-rep"]) {
      err["tel-rep"] = "Favor de completar este campo"
    } else if(legalData["tel-rep"].length !== 10) {
      err["tel-rep"] = "Este campo debe contenter 10 dígitos"
    } else {
      err["tel-rep"] = ""
    }
    if(!legalData["doc-upload"]) {
      err["doc-upload"] = "Favor de subir un archivo"
    } else {
      err["doc-upload"] = ""
    }
    setErrorLegal(err)
  }

  // Handle Bank Validation
  const handleBankValidation = () => {
    let err = {};
    if(!bankData["clabe"]) {
      err["clabe"] = "Favor de completar este campo"
    } else if(bankData["clabe"].length !== 18){
      err["clabe"] = "Este campo debe contener 18 caracteres"
    } else {
      err["clabe"] = ""
    }
    if(!bankData["banco"]) {
      err["banco"] = "Favor de completar este campo"
    } else {
      err["banco"] = ""
    }
    setErrorBank(err)
  }

  return (
    <div className="App">
      <div className="App-Header">
        <h1 className="text-4xl tracking-wide font-medium text-gray-900">Perfil</h1>
        <p className="mt-1 text-md text-gray-500">Favor de completar los siguientes campos</p>
      </div>
        <div className="App-Container">
          <form>
            <Fiscal onChangeFiscalHandler={onChangeFiscalHandler} onChangeDateFiscal={onChangeDateFiscal} errorFiscal={errorFiscal} />
            <Address onChangeAddHandler={onChangeAddHandler} onChangeAddFileHandler={onChangeAddFileHandler} addressData={addressData} errorAddress={errorAddress} />
            <Contact onChangeContactHandler={onChangeContactHandler} errorContact={errorContact} />
            <Legal onChangeLegalHandler={onChangeLegalHandler} onChangeDateLegal={onChangeDateLegal} onChangeLegalFileHandler={onChangeLegalFileHandler} legalData={legalData} errorLegal={errorLegal} />
            <Bank onChangeBankHandler={onChangeBankHandler} errorBank={errorBank} />
            <div className="text-right">  
              <button onClick={onSubmitHandler} class="bg-indigo-500 hover:bg-blue-500 text-white font-semibold mt-10 py-2 px-6 border rounded-full shadow">
                Guardar
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}

export default App;
