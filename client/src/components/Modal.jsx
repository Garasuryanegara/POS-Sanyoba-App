import { Center, Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function ModalSelectQty(props) {
  const [count, tambah, kurang] = useCounter(1, 1);
  const { order, setOrder, orderList, setOrderList } = props;
  const handleObjectValue = () => {
    setOrder({ ...order, qty: count }); //jangan lupa price: val.price
    console.log({ ...order, qty: count });
  };
  useEffect(() => {
    handleObjectValue();
  }, [count]);

  const add = () => {
    const tempList = [];
    tempList.push(order);
    setOrderList([...orderList, ...tempList]);
    console.log([...orderList, ...tempList]);
  };

  return (
    <>
      <Center padding={"20px"} bg={'"#F1F1F1"'} flexDir={"column"} gap={"20px"}>
        <Box fontSize={"24px"} fontWeight={"500"} fontFamily={"roboto"}>
          {" "}
          Select Quantity
        </Box>
        <Center gap={"10px"}>
          <Button
            fontSize={"32px"}
            w={"50px"}
            h={"50px"}
            onClick={kurang}
            border={"1px solid grey"}
          >
            -
          </Button>
          <Center
            w={"50px"}
            h={"50px"}
            fontSize={"24px"}
            fontWeight={"500"}
            fontFamily={"roboto"}
          >
            {count}
          </Center>
          <Button
            fontSize={"32px"}
            w={"50px"}
            h={"50px"}
            onClick={tambah}
            border={"1px solid grey"}
          >
            +
          </Button>
        </Center>
        <Center
          gap={"15px"}
          fontSize={"24px"}
          fontWeight={"500"}
          fontFamily={"roboto"}
        >
          <Button border={"1px solid grey"} onClick={props.onClose}>
            Cancel
          </Button>
          <Button
            bg={"#369A64"}
            border={"1px solid grey"}
            onClick={() => {
              add();
              props.onClose();
            }}
          >
            Add
          </Button>
        </Center>
      </Center>
    </>
  );
}

function useCounter(val, step) {
  const [count, setCount] = useState(val);
  function tambah() {
    setCount(count + step);
  }
  function kurang() {
    if (count > 1) {
      setCount(count - step);
    }
  }
  return [count, tambah, kurang];
}
