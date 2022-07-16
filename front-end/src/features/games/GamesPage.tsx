import { Container, Grid } from "@mui/material"
import { useAppSelector } from "../../store/store"

export default function GamesPage() {
  const {games} = useAppSelector(state=> state.games)


  return (
    <Container  >
        <Grid container  >
          {games && games.map(game=>(
            <Grid spacing={3} key={game._id} xs={3} sx={{backgroundColor:'orange', margin:'5px', padding:'5px', borderRadius:'5px'}}>
                <h4>{game._id}</h4>
                <h4>{game.name}</h4>
                <h4>adress: {game.address}</h4>
                <h4>fiel:  {game.fieldNumber}</h4>
                <h4>numerofPeople:  {game.numerOfPeople}</h4>
                <h4>time: {game.time}</h4>

            </Grid>
          ))}  
        </Grid>      
    </Container>
  )
}
