import { LocationDto } from '@entities/Location/api/locationDto'
import styles from '@shared/themes/detail.module.css'


interface LocationDetailProps {
  location: LocationDto;
}

const LocationDetail = ({ location }: LocationDetailProps) => {

  return  (
    <div className={styles.detailContainer}>
      <div>
        <table className={styles.tableDetail}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{location.name}</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>{location.type}</td>
            </tr>
            <tr>
              <td>Dimension:</td>
              <td>{location.dimension}</td>
            </tr>
            <tr>
              <td>Created:</td>
              <td>{new Date(location.created).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LocationDetail;
