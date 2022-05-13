import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../../App.css'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    border: '1px solid #1e8678',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
  },
  titleHead: {
    borderBottom: '1px solid #202020',
    fontWeight: 'bold',
  },
  grid: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  media: {
    height: '100%',
    width: '100%',
  },
  button: {
    color: '#202020',
    fontWeight: 'bold',
    fontSize: 12,
  },
  inlineContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const Restaurant = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [restaurantData, setRestaurantData] = useState(undefined)
  const { restaurantId } = useParams()
  const [isError, setError] = useState(false)
  let card = null

  //   async function getRestaurantById(restaurantId) {
  //     const { data } = await axios.get(
  //       `http://localhost:3001/restaurants/${restaurantId}`,
  //     )
  //     console.log(data)
  //     setRestaurantData()
  //   }

  useEffect(() => {
    async function getRestaurantById(restaurantId) {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/restaurants/${restaurantId}`,
        )

        console.log(data)
        setRestaurantData(data)
        setLoading(false)
        setError(false)
        // if (data == null || data.data.results.length < 1) {
        //   setError(true)
        // }
      } catch (e) {
        console.log(e)
        setError(true)
      }
    }
    if (restaurantId) {
      getRestaurantById(restaurantId)
    }
  }, [])

  const buildCard = (item) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.item_id}>
        <Card className={classes.card} variant="outlined">
          <CardActionArea>
            {/* <Link to={`/${props.name}/${character.id}`}> */}
            <CardMedia
              className={classes.media}
              component="img"
              image={
                item.item_image
                  ? item.item_image
                  : '/restaurant_images/Item_default.jpg'
              }
              title="show image"
            />

            <CardContent>
              <Typography
                className={classes.titleHead}
                gutterBottom
                variant="h6"
                component="h2"
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description ? item.description : ''}
              </Typography>
              <Typography variant="h6" component="h2">
                {'$'+item.price}
              </Typography>
            </CardContent>
            {/* </Link> */}
            <button>Add</button>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }

  if (loading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    )
  } else {
    card =
      restaurantData &&
      restaurantData.food_items.map((item) => {
        return buildCard(item)
      })
    return (
      <div>
        <div className="roundImageContainer">
          <img
            className="roundRestImg"
            src={`/restaurant_images/${restaurantData.restaurant_image}`}
            alt="firstName"
          ></img>
          <h2>{restaurantData.restaurant_name}</h2>
          <p>{restaurantData.address}</p>
          <p>{restaurantData.cuisins}</p>
        </div>
        <div>
          <h3>Popular Items</h3>
          <Grid container className={classes.grid} spacing={5}>
            {card}
          </Grid>
        </div>
      </div>
    )
  }
}

export default Restaurant
