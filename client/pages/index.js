import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

// INTERNAL IMPORT
import { useStateContext } from "../context";

const index = () => {
  const { adress, connect, contract, realEstate } = useStateContext;
  return <div>{realEstate}</div>;
};

export default index;
