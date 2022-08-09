    
import React, {useContext} from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { contexto } from '../../Context/Contexto';

const WishWidget = () => {
    const { wishes } = useContext(contexto);


    return (
      <div style={styles.container}>     
          <FavoriteIcon style={styles.icono}/>
          {wishes.length !== 0 ? <h1 style={styles.h1}>{wishes.length}</h1>
          : <></>}
      </div>
    )
      
      
  }
  
  const styles = {
     icono: {
         width: 50,
         height: 50,
         marginRight: 50,
         color: 'white'
     },
     container: {
       display: 'flex',
       flexDirection: 'column',
       
   },
      h1: {
     fontSize: 20,
     color: 'white',
     textDecoration: 'none',
     marginTop: -8,
   }
    
}

export default WishWidget