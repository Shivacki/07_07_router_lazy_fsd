import { EpisodeDto } from '@entities/Episode/api/episodeDto'
import styles from '@shared/themes/detail.module.css'


interface EpisodeDetailProps {
  episode: EpisodeDto;
}

const EpisodeDetail = ({ episode }: EpisodeDetailProps) => {

  return  (
    <div className={styles.detailContainer}>
      <div>
        <table className={styles.tableDetail}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{episode.name}</td>
            </tr>
            <tr>
              <td>Air Date:</td>
              <td>{episode.air_date}</td>
            </tr>
            <tr>
              <td>Episode:</td>
              <td>{episode.episode}</td>
            </tr>
            <tr>
              <td>Created:</td>
              <td>{new Date(episode.created).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EpisodeDetail;
