import styles from './RenderingError.module.css'


interface RenderingErrorProps {
  msg?: string;
}

// Компонент для отобр-я ошибок отрисовки
export default function RenderingError({ msg = 'Неожиданная ошибка при отображении страницы'}: RenderingErrorProps) {
  return <p className={styles.error}>{msg}</p>
}

