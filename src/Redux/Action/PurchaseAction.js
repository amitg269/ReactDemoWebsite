export const BUY_SIP="BUY_SIP";
export const BUY_LUMPSUM="BUY_LUMPSUM";

export const BuySIP=(BuySIP)=>{
  return {
     type:BUY_SIP,
     payload:BuySIP
  }
}

export const BuyLumpsum=(BuyLumpsum)=>{
    return{
        type:BUY_LUMPSUM,
        payload:BuyLumpsum
    }
}