import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(item);
  const itemName = item?.attributes?.name;
  const itemPrice = item?.attributes?.price;
  const itemCategory = item?.attributes?.category;
  const shortDescription =
    item?.attributes?.shortDescription[0]?.children[0]?.text;
  const itemLongDescription =
    item?.attributes?.longDescription[0]?.children[0]?.text;

  const imageUrl = `http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`;

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            src={imageUrl}
            alt="item details image"
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box flex="1 1 50%" mb="40%">
          <Box display="flex" justifyContent="space-between">
            <Box>Home / Item</Box>
            <Box>Prev / Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{itemName}</Typography>
            <Typography>{itemPrice} $</Typography>
            <Typography sx={{ mt: "20px" }}>{shortDescription} </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 50x" }}> {count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white ",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              Add To Cart
            </Button>
          </Box>

          <Box>
            <Box display="flex" m="20px 0 5px 0">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {itemCategory} </Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEW" value="reviews" />
        </Tabs>
      </Box>
      <Box>
        {value == "description" && <div>{itemLongDescription}</div>}
        {value == "reviews" && <div>reviews</div>}
      </Box>

      {/* Related Items */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          columnGap="1.33%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {items.slice(1, 5).map((item, index) => (
            <Item key={`${item.name}-${index}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
