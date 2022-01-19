/* eslint-disable */
import './AdminDashboard.css';
import { Link, useOutletContext } from 'react-router-dom';

const AdminDashboard = () => {
  const [data] = useOutletContext();

  console.log(data);
  return (
    <div className="AdminDashboard">
      <header className="AdminDashboard__header">
        <h1>System Admin</h1>
        <form action="">
          <input type="text" placeholder="Buscar usuarios" />
        </form>
      </header>
      <section className="AdminDashboard__accions">
        <div className="AdminDashboard__addUser">
          <Link className="button" to="createroom">
            {' '}
            <i className="fas fa-plus" /> Nuevo Cuarto{' '}
          </Link>
        </div>
        <div className="AdminDashboard__infocrud">
          <i className="far fa-user AdminDashboard__iconuser" />
          <div className="AdminDashboard__totaluser">
            <span className="AdminDashboard__titlenumberuser">
              Número de Habitaciones
            </span>
            <div className="AdminDashboard__numberUser">{data?.length}</div>
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
                <th>Titulo</th>
                <th>Description</th>
                <th>Precio</th>
                <th>Servicios</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((room) => (
                <tr key={room._id}>
                  <th scope="row">
                    <input type="checkbox" />
                  </th>
                  <td>{room.title}</td>
                  <td>{room.description}</td>
                  <td>{room.price}</td>
                  <td>
                    {room.services?.map((service) => (
                      <span key={service._id}>{service.serviceName}, </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
