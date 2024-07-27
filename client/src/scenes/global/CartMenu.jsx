import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import { useNavigate } from "react-router";

import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function CartMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      zIndex={10}
      width="100%"
      height="100%"
      position="fixed"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        height="100%"
        width="max(400px, 30%)"
        backgroundColor="white"
      >
        <Box>
          <FlexBox>
            {/* HEADER */}
            <Typography variant="">Shopping Bag ({cart.length})</Typography>
            <IconButton
              aria-label="close cart"
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* Cart List */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox padding="15px 10px">
                  <Box flex="1 1 40%">
                    <img
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                      alt={item.name}
                      width="123px"
                      height="164px"
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox>
                      <Typography variant="" fontWeight="bold">
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        aria-label=""
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>

                    <Typography variant="">
                      {item?.attributes?.shortDescription[0]?.children[0]?.text}
                    </Typography>

                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          aria-label=""
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>

                        <Typography variant="">{item.count}</Typography>
                        <IconButton
                          aria-label=""
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      {/* PRICE */}
                      <Box mr="50px">
                        <Typography variant="" fontWeight="bold">
                          {item.attributes.price} $
                        </Typography>
                      </Box>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          <Box m="20px 10px" height="40px">
            <FlexBox m="20px 0">
              <Typography variant="">TOTAL</Typography>
              <Typography variant="" mr="50px" fontWeight="bold">
                {totalPrice} $
              </Typography>
            </FlexBox>

            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CartMenu;
