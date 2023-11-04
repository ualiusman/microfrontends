// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '@ebuy/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ShoppingBasket from './basket'
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
import { getSessionStorage } from '@ebuy/utils';

export function App() {

  const basketFromStorage: any = getSessionStorage('shoppingBasket');
  console.log('basekt: ', basketFromStorage);

  const createCompleteBasket = (allItems: any, quantities: any) => {
    return allItems
      .filter((item: any) => quantities[item.id])
      .map((item: any) => {
        return {
          ...item,
          quantity: quantities[item.id],
        };
      });
  };

  const completeBasket = createCompleteBasket(
    PRODUCT_LIST_MOCKS,
    basketFromStorage
  );

  return (
    <>
      <Container style={{ marginTop: '5rem' }}>
        <Header />
        <Text size="huge">Checkout App</Text>
        <ShoppingBasket basketList={completeBasket} />

      </Container>
    </>
  );
}

export default App;
