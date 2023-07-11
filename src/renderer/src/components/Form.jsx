/* eslint-disable prettier/prettier */
import { useState } from 'react'
import './form.css'

function App() {
  const [formData, setFormData] = useState({
    nombreUsuario: '',
    email: '',
    usuario: '',
    tipoUsuario: '',
    ficha: '',
    estatus: '',
    perfil: '',
    usuarioCreado: '',
    fechaCreado: '',
    usuarioModificado: '',
    departamento: '',
    clave: '',
    cambioClave: '',
    ultimoLogin: '',
    tipoCliente: '',
    seccionCliente: '',
    bodega: '',
    printerPorDefecto: '',
    otroPrinter: '',
    printerCheque: '',
    notificacion: '',
    firmaFactura: '',
    ultimoProgramaEjecutado: '',
    sucid: '',
    descuento1: '',
    descuento2: '',
    observacion: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="Form">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreUsuario">Nombre de usuario:</label>
          <input
            type="text"
            id="nombreUsuario"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
          />

          <label htmlFor="tipoUsuario">Tipo de usuario:</label>
          <input
            type="text"
            id="tipoUsuario"
            name="tipoUsuario"
            value={formData.tipoUsuario}
            onChange={handleChange}
            required
          />

          <label htmlFor="ficha">Ficha:</label>
          <input
            type="text"
            id="ficha"
            name="ficha"
            value={formData.ficha}
            onChange={handleChange}
            required
          />

          <label htmlFor="estatus">Estatus:</label>
          <input
            type="text"
            id="estatus"
            name="estatus"
            value={formData.estatus}
            onChange={handleChange}
            required
          />

          <label htmlFor="perfil">Perfil:</label>
          <input
            type="text"
            id="perfil"
            name="perfil"
            value={formData.perfil}
            onChange={handleChange}
            required
          />

          <label htmlFor="usuarioCreado">Usuario creado:</label>
          <input
            type="text"
            id="usuarioCreado"
            name="usuarioCreado"
            value={formData.usuarioCreado}
            onChange={handleChange}
            required
          />

          <label htmlFor="fechaCreado">Fecha creado:</label>
          <input
            type="text"
            id="fechaCreado"
            name="fechaCreado"
            value={formData.fechaCreado}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="usuarioModificado">Usuario modificado:</label>
          <input
            type="text"
            id="usuarioModificado"
            name="usuarioModificado"
            value={formData.usuarioModificado}
            onChange={handleChange}
            required
          />

          <label htmlFor="departamento">Departamento:</label>
          <input
            type="text"
            id="departamento"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            required
          />

          <label htmlFor="clave">Clave:</label>
          <input
            type="password"
            id="clave"
            name="clave"
            value={formData.clave}
            onChange={handleChange}
            required
          />

          <label htmlFor="cambioClave">Cambio de clave:</label>
          <input
            type="text"
            id="cambioClave"
            name="cambioClave"
            value={formData.cambioClave}
            onChange={handleChange}
            required
          />

          <label htmlFor="ultimoLogin">Último login:</label>
          <input
            type="text"
            id="ultimoLogin"
            name="ultimoLogin"
            value={formData.ultimoLogin}
            onChange={handleChange}
            required
          />

          <label htmlFor="tipoCliente">Tipo de cliente:</label>
          <input
            type="text"
            id="tipoCliente"
            name="tipoCliente"
            value={formData.tipoCliente}
            onChange={handleChange}
            required
          />

          <label htmlFor="seccionCliente">Sección de cliente:</label>
          <input
            type="text"
            id="seccionCliente"
            name="seccionCliente"
            value={formData.seccionCliente}
            onChange={handleChange}
            required
          />
          <label htmlFor="descuento2">Descuento 2:</label>
          <input
            type="text"
            id="descuento2"
            name="descuento2"
            value={formData.descuento2}
            onChange={handleChange}
            required
          />

          <label htmlFor="observacion">Observación:</label>
          <textarea
            id="observacion"
            name="observacion"
            value={formData.observacion}
            onChange={handleChange}
            rows={1}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="bodega">Bodega:</label>
          <input
            type="text"
            id="bodega"
            name="bodega"
            value={formData.bodega}
            onChange={handleChange}
            required
          />

          <label htmlFor="printerPorDefecto">Printer por defecto:</label>
          <input
            type="text"
            id="printerPorDefecto"
            name="printerPorDefecto"
            value={formData.printerPorDefecto}
            onChange={handleChange}
            required
          />

          <label htmlFor="otroPrinter">Otro printer:</label>
          <input
            type="text"
            id="otroPrinter"
            name="otroPrinter"
            value={formData.otroPrinter}
            onChange={handleChange}
            required
          />

          <label htmlFor="printerCheque">Printer cheque:</label>
          <input
            type="text"
            id="printerCheque"
            name="printerCheque"
            value={formData.printerCheque}
            onChange={handleChange}
            required
          />

          <label htmlFor="notificacion">Notificación:</label>
          <input
            type="text"
            id="notificacion"
            name="notificacion"
            value={formData.notificacion}
            onChange={handleChange}
            required
          />

          <label htmlFor="firmaFactura">Firma factura:</label>
          <input
            type="text"
            id="firmaFactura"
            name="firmaFactura"
            value={formData.firmaFactura}
            onChange={handleChange}
            required
          />

          <label htmlFor="ultimoProgramaEjecutado">Último programa:</label>
          <input
            type="text"
            id="ultimoProgramaEjecutado"
            name="ultimoProgramaEjecutado"
            value={formData.ultimoProgramaEjecutado}
            onChange={handleChange}
            required
          />
          <label htmlFor="sucid">Suc ID:</label>
          <input
            type="text"
            id="sucid"
            name="sucid"
            value={formData.sucid}
            onChange={handleChange}
            required
          />

          <label htmlFor="descuento1">Descuento 1:</label>
          <input
            type="text"
            id="descuento1"
            name="descuento1"
            value={formData.descuento1}
            onChange={handleChange}
            required
          />
        </div>

        <div></div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
