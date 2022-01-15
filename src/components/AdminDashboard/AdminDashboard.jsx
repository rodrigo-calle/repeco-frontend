/* eslint-disable react/prop-types */
import './AdminDashboard.css';

const AdminDashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="AdminDashboard">
      <div className="AdminDashboard__dashboard">
        <header className="AdminDashboard__header">
          <h1>System Admin</h1>
          <form action="">
            <input type="text" placeholder="Buscar usuarios" />
          </form>
        </header>
        <section className="AdminDashboard__accions">
          <div className="AdminDashboard__addUser">
            <button type="button" className="">
              <i className="fas fa-plus" /> Nuevo Hotel
            </button>
          </div>
          <div className="AdminDashboard__infocrud">
            <i className="far fa-user AdminDashboard__iconuser" />
            <div className="AdminDashboard__totaluser">
              <span className="AdminDashboard__titlenumberuser">
                Total de Hoteles
              </span>
              <div className="AdminDashboard__numberUser">100.000</div>
            </div>
            <div className="AdminDashboard__barra" />
            <div className="AdminDashboard__crud">
              <button type="button" className="AdminDashboard__active">
                Activar
              </button>
              <button type="button" className="AdminDashboard__edit">
                Editar
              </button>
              <button type="button" className="AdminDashboard__delete">
                Eliminar
              </button>
            </div>
          </div>
        </section>
        <div className="AdminDashboard__table">
          <div className="AdminDashboard__table__border">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Duseño de hospedaje</th>
                  <th>Teléfono</th>
                  <th>Nombre de hospedaje</th>
                  <th>Location</th>
                  <th>N° de Habitaciones</th>
                  <th>N° Reservas</th>
                  <th>Ganacia Mensual</th>
                  <th>Ganacias totales</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((hotel) => (
                  <tr>
                    <th scope="row">
                      <input type="checkbox" />
                    </th>
                    <td>
                      {hotel.user?.firstName} {hotel.user?.lastName}
                    </td>
                    <td>{hotel.user?.phone}</td>
                    <td>{hotel.name}</td>
                    <td>
                      {hotel.address.country}, {hotel.address.city},{' '}
                      {hotel.address.province}, {hotel.address.street}{' '}
                    </td>
                    <td>{hotel.rooms.length}</td>
                    <td>15</td>
                    <td>S/.400.00</td>
                    <td>S/.10000.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
