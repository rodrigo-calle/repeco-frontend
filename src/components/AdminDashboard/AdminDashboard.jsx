/* eslint-disable */
import './AdminDashboard.css';
import { Link, useOutletContext } from 'react-router-dom';
import roomServices from '../../services/room';

const AdminDashboard = () => {
  const [data, setData] = useOutletContext();

  const handleClickDelete = async (id) => {
    const response = await roomServices.deleteRoomById(id);
    if (response.ok) {
      const newData = data.filter((d) => d._id !== id);
      setData(newData);
    }
  };

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
            {/* <button type="button" className="AdminDashboard__active">
              Activar
            </button> */}
          </div>
        </div>
      </section>
      <div className="AdminDashboard__table">
        <div className="AdminDashboard__table__border">
          { data.length > 0 ? <table>

            <thead>
              <tr>
                <th>Titulo</th>
                <th>Description</th>
                <th>Precio</th>
                <th>Servicios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((room) => (
                <tr key={room._id}>
                  <td>{room.title}</td>
                  <td>{room.description}</td>
                  <td>{room.price}</td>
                  <td>
                    {room.services?.map((service) => (
                      <span key={service._id}>{service.serviceName}, </span>
                    ))}
                  </td>
                  <td className="AdminDashboard__actions">
                    {/* <button
                      type="button"
                      onClick={() => {
                        handleClickEdit(room._id);
                      }}
                      className="AdminDashboard__edit"
                    >
                    </button> */}
                    <Link
                      className="AdminDashboard__edit"
                      to={`updateroom/${room._id}`}
                    >
                      Editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        handleClickDelete(room._id);
                      }}
                      className="AdminDashboard__delete"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> : 'There is no items'}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
