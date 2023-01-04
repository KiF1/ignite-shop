import { CartButton } from "../CartButton";
import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartCProductDetails, CartFinalization, CartProduct, CartProductImage, FinalizationDatails } from "./styles";
import { X } from "phosphor-react";
import Image from "next/image";

export function Cart(){
  return(
    <Dialog.Root>
       <Dialog.Trigger asChild>
          <CartButton color='gray' />
       </Dialog.Trigger>
       <Dialog.Portal>
          <CartContent>
            <CartClose>
              <X size="24" weight="bold" /> 
            </CartClose>
            <h2>Sacola de Compras</h2>
            <section>
              {/* <p>Parece que seu carrinho está vazio :(</p> */}
              <CartProduct>
                <CartProductImage>
                  <Image width={180} height={93} src="https://s3-alpha-sig.figma.com/img/fd95/f0b2/85d51884517403ad7e3fc5c12726f99a?Expires=1673827200&Signature=V97k0ZFxQrVO1g2KpL2IjxDMHsWn7zNtxQWd6s-iZhLU04PmhzlRxPI1D65BHJ5THpFf~OqEhre2nJ1qb92gj0fRJAXUpDD3DisB0XgksHf8Hi7I~LLLPCARasqAtvrzk0t8nB7a-tQnBzJShETebRwtIJ0FtgZ6NnTQD6rFTHcU~7XkWrv-TESN1-9Wl4buA41LuZTiNz6nist4sJspo2948-Ah0MU9uEPNZrtSkohky9xhvmhYadGfiAQkMnyiZJXi54uQfEp-U0pTehdNSib3a0H-B2yNzY7YRDJCRYaA9KynUa5pUlijaEIEzeYchyEBbmPY4qYOSxgmb6sqvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </CartProductImage>
                <CartCProductDetails>
                  <p>Product 1</p>
                  <strong>R$ 79,90</strong>
                  <button>Remover</button>
                </CartCProductDetails>
              </CartProduct>
            </section>
            <CartFinalization>
              <FinalizationDatails>
                <div>
                  <span>Quantidade</span>
                  <p>2 itens</p>
                </div>
                <div>
                  <span>Valor Total</span>
                  <p>R$ 180.00</p>
                </div>
              </FinalizationDatails>
              <button>Finalizar</button>
            </CartFinalization>
          </CartContent>
       </Dialog.Portal>
    </Dialog.Root>
  )
}