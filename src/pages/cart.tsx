import { useContext } from 'react';
import { CartComponent } from '../components/CartComponent';
import { ContextCart } from '../context/Carinho';

export default function Cart() {
  const { cart } = useContext(ContextCart);

  let total = 0;

  cart.map((item: any) => {
    total += item.price;
  });

  return (
    <section className="p-4 w-full h-screen mt-[100px]">
      <div className="gap-10 max-w-[1100px] m-auto h-screen sm:flex-row flex-col-reverse flex items-center">
        <div className="gap-2 overflow-auto shadow-lg border border-black rounded sm:w-[50%] h-[500px] flex flex-col items-end p-3">
          {cart.length > 0 && (
            <>
              {cart.map((product: any, index: number) => (
                <CartComponent
                  name={product.name}
                  price={product.price}
                  urlImg={product.imgSrc}
                  index={index}
                  id={product.id}
                />
              ))}
            </>
          )}
        </div>
        <div className="flex sm:items-start items-end sm:w-[50%] w-[95%] sm:h-[500px] min-h-min">
          <div className="w-full h-[98px] shadow-lg border border-black rounded flex items-center justify-between p-2">
            <p
              className="font-semibold ml-[20px] text-[16px]"
              style={{
                letterSpacing: '0.345em',
              }}
            >
              quant: {cart.length}
            </p>
            <span
              className="font-bold text-[15px] mr-[30px]"
              style={{
                letterSpacing: '0.345em',
              }}
            >
              R$:{total}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
