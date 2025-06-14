import bus from '../../assets/bus.jpg';
import hocker2 from '../../assets/hocker2.jpg';
import organiza from '../../assets/organiza.jpg';
import valenc from '../../assets/valenc.jpg';
import servicedAppartment from '../../assets/serviced-apartment.png';
import serviceTurismo from '../../assets/service-turismo.jpg';

const servicesData = [
  {
    key: 'service_accommodation',
    image: servicedAppartment,
    descKey: 'service_accommodation_desc',
    descLong: 'Our accommodation service offers modern, comfortable rooms designed specifically for sports teams. Enjoy spacious living areas, high-speed Wi-Fi, nutritious meal options, and easy access to training facilities. We ensure a restful environment so your team can focus on performance and recovery.',
  },
  {
    key: 'service_transport',
    image: bus,
    descKey: 'service_transport_desc',
    descLong: 'service_transport_descLong',
  },
  {
    key: 'service_matches',
    image: organiza,
    descKey: 'service_matches_desc',
    descLong: 'service_matches_descLong',
  },
  {
    key: 'service_training',
    image: hocker2,
    descKey: 'service_training_desc',
    descLong: 'service_training_descLong',
  },
  {
    key: 'service_tours',
    image: valenc,
    descKey: 'service_tours_desc',
    descLong: 'service_tours_descLong',
  },
  {
    key: 'service_other',
    image: serviceTurismo,
    descKey: 'service_other_desc',
    descLong: 'service_other_descLong',
  },
];

export default servicesData;