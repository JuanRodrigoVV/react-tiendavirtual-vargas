    
import React, {useContext} from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { contexto } from '../../Context/Contexto';

const WishWidget = () => {
    const { wishes } = useContext(contexto);


    return (
      <div style={styles.container}>     
     <FavoriteIcon style={styles.icono}/>
     {wishes.length !== 0 ? <h1>{wishes.length}</h1>
      : <></>}
      </div>
    )
      
      
  }
  
  const styles = {
      icono: {
          width: 50,
          height: 50,
          marginRight: 50,
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    
}

export default WishWidget