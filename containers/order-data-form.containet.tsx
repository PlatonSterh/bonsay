import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clear,
  createOrder,
  selectCity,
  selectFirstname,
  selectHouse,
  selectLastname,
  selectPhone,
  selectPostcode,
  selectStreet,
  selectSuccess,
  setCity,
  setFirstname,
  setHouse,
  setLastname,
  setPhone,
  setPostcode,
  setStreet,
} from '../store/order/order.slice';
import { selectAccessToken } from '../store/core/core.slice';
import {
  clearCart,
  selectCartItems,
  selectTotal,
} from '../store/cart/cart.slice';
import Input from '../components/input.component';
import OrderSummary from './order-summary.container';

export const OrderDataForm = () => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const success = useAppSelector(selectSuccess);

  useEffect(() => {
    if (success) {
      dispatch(clear());

      dispatch(clearCart());

      push('/');
    }
  }, [dispatch, push, success]);

  const total = useAppSelector(selectTotal);

  const firstname = useAppSelector(selectFirstname);

  const onFirstnameChange = (event) => {
    dispatch(setFirstname(event.target.value));
  };

  const lastname = useAppSelector(selectLastname);

  const onLastnameChange = (event) => {
    dispatch(setLastname(event.target.value));
  };

  const city = useAppSelector(selectCity);

  const onCityChange = (event) => {
    dispatch(setCity(event.target.value));
  };

  const street = useAppSelector(selectStreet);

  const onStreetChange = (event) => {
    dispatch(setStreet(event.target.value));
  };

  const house = useAppSelector(selectHouse);

  const onHouseChange = (event) => {
    dispatch(setHouse(event.target.value));
  };

  const postcode = useAppSelector(selectPostcode);

  const onPostcodeChange = (event) => {
    dispatch(setPostcode(event.target.value));
  };

  const phone = useAppSelector(selectPhone);

  const onPhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };

  const cartItems = useAppSelector(selectCartItems);

  const accessToken = useAppSelector(selectAccessToken);

  const onCreate = () => {
    dispatch(
      createOrder({
        accessToken,
        fullname: { firstname, lastname },
        address: { city, street, house, postcode },
        phone,
        cartItems,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4 justify-center my-10">
      <div className="flex flex-col">
        <div className="text-primary">
          ФИО <span className="text-red">*</span>
        </div>
        <div className="flex flex-col sm:flex-row my-2">
          <Input
            className="mr-2 my-1 w-52"
            type="text"
            placeholder="Имя"
            value={firstname}
            onChange={onFirstnameChange}
          />
          <Input
            className="mr-2 my-1 w-52"
            type="text"
            placeholder="Фамилия"
            value={lastname}
            onChange={onLastnameChange}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-primary">
          Адрес <span className="text-red">*</span>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row my-2">
            <Input
              className="mr-2 my-1 w-52"
              type="text"
              placeholder="Город"
              value={city}
              onChange={onCityChange}
            />
            <Input
              className="mr-2 my-1 w-52"
              type="text"
              placeholder="Улица"
              value={street}
              onChange={onStreetChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row my-2">
            <Input
              className="mr-2 my-1 w-52"
              type="text"
              placeholder="Дом"
              value={house}
              onChange={onHouseChange}
            />
            <Input
              className="mr-2 my-1 w-52"
              type="text"
              placeholder="Почтовый индекс"
              value={postcode}
              onChange={onPostcodeChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-primary">
          Номер телефона <span className="text-red">*</span>
        </div>
        <div className="flex flex-col sm:flex-row my-2">
          <Input
            className="mr-2 w-52"
            type="text"
            placeholder="+71112223344"
            value={phone}
            onChange={onPhoneChange}
          />
        </div>
      </div>
      <OrderSummary total={total} onCreate={onCreate} />
    </div>
  );
};

export default OrderDataForm;
