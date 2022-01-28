// setServiceName({
//   ...services,
//   [event.target.name]: event.target.checked,
// });

function refactoringData() {
  const services = {
    hotwater: false,
    wifi: false,
    petfriendly: false,
    breakfastincluded: false,
    bar: false,
    pool: false,
    roomService: false,
    spa: false,
    airCondition: false,
    gym: false,
    housekeeping: false,
    babysitting: false,
    parking: false,
    twentyFourHour: false,
  };

  const keys = Object.keys(services);

  const selecteds = keys.filter((key) => services[key]);

  const result = selecteds.map((selected) => {
    switch (selected) {
      case 'hotwater':
        return {
          serviceName: 'agua caliente',
          serviceUrl: 'fas fa-shower',
        };
      case 'wifi':
        return {
          serviceName: 'Wi-fi',
          serviceUrl: 'fas fa-wifi',
        };
      case 'petfriendly':
        return {
          serviceName: 'Admite mascotas',
          serviceUrl: 'fas fa-paw',
        };
      case 'breakfastincluded':
        return {
          serviceName: 'Desayuno Incluido',
          serviceUrl: 'fas fa-coffee',
        };
      case 'bar':
        return {
          serviceName: 'Bar',
          serviceUrl: 'fas fa-glass-martini-alt',
        };
      case 'pool':
        return {
          serviceName: 'Piscina',
          serviceUrl: 'fas fa-swimmer',
        };
      case 'roomService':
        return {
          serviceName: 'Servicio a la Habitación',
          serviceUrl: 'fas fa-concierge-bell',
        };
      case 'spa':
        return {
          serviceName: 'Spa',
          serviceUrl: 'fas fa-spa',
        };
      case 'airCondition':
        return {
          serviceName: 'Aire Acondicionado',
          serviceUrl: 'fas fa-wind',
        };
      case 'gym':
        return {
          serviceName: 'Gym',
          serviceUrl: 'fas fa-dumbbell',
        };
      case 'housekeeping':
        return {
          serviceName: 'Limpieza a la habitación',
          serviceUrl: 'fas fa-broom',
        };
      case 'babysitting':
        return {
          serviceName: 'Lugar para bebes',
          serviceUrl: 'fas fa-baby',
        };
      case 'parking':
        return {
          serviceName: 'Parqueadero',
          serviceUrl: 'fas fa-parking',
        };
      case 'twentyFourHour':
        return {
          serviceName: '24 horas',
          serviceUrl: 'fas fa-history',
        };
      default:
        return {
          error: 'Por favor, selecciona un valor del 1 al 6.',
        };
    }
  });

  return result;
}

export default refactoringData;
