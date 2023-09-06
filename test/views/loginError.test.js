import { fireEvent, getByTestId } from '@testing-library/dom';
import login from '../../src/views/login';

jest.mock('../../src/lib/auth.js', () => ({
  loginWithGoogle: () =>
    new Promise((resolve) => {
      resolve({ name: 'marysela' });
    }),
  loginUser: () =>
    new Promise((resolve) => {
      resolve(undefined);
    }),
}));

describe('view login', () => {
  it('renderiza login  e inicia sesion de forma incorrecta', () => {
    // Para mandar a llamar a login, hicimos un mock de la funcion navigateTo
    // Esto lo hacemos con jest.fn
    const navigateTo = jest.fn();
    const container = login(navigateTo);
    // referenciamos el formulario a travez de data-testId = form-input
    const form = getByTestId(container, 'form-input');
    // Referenciamos todos los campos del formulario por medio de su data-testId.

    const email = getByTestId(container, 'email');
    const password = getByTestId(container, 'password');

    // Vamos llenando cada campo del formulario con esos valores por medio del evento change
    // que simula estar escribiendo con el teclado en el input

    fireEvent.change(email, { target: { value: 'correoprueba@gmail.com' } });
    fireEvent.change(password, { target: { value: '123456789' } });

    fireEvent.submit(form);
    expect(container).not.toBeUndefined();
  });
});
