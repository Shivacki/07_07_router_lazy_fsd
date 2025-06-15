import { CharacterDto } from '@entities/Character/api/characterDto'
import styles from '@shared/themes/detail.module.css'


interface CharacterDetailProps {
  character: CharacterDto;
}

const CharacterDetail = ({ character }: CharacterDetailProps) => {

  return  (
    <div className={styles.detailContainer}>
      <div>
        <img src={character.image} width={256} height={256}></img>
      </div>
      <div>
        <table className={styles.tableDetail}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{character.name}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{character.status}</td>
            </tr>
            <tr>
              <td>Species:</td>
              <td>{character.species}</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>{character.type}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{character.gender}</td>
            </tr>
            <tr>
              <td>Created:</td>
              <td>{new Date(character.created).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CharacterDetail;
