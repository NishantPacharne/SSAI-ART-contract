import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "SAIArt -Te Ammo";
  export const SYMBOL: string = "SSA";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 30;
  export const URI: string = "https://stingy-silver-mule.myfilebase.com/ipfs/QmXTs1u3ZdohJ7AeUmJdGczw6qQvEwhVGB59TYJkrHtdNs/";
  export const OWNER: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1DMUDShi3BtL8qoLT8K748iG85XgKYkyhH");
}