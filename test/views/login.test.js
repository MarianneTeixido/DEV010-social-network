import { fireEvent, getByTestId, getByText } from '@testing-library/dom';
import login from '../../src/views/login';

jest.mock('../../src/lib/auth.js', () => ({
  loginWithGoogle: () =>
    new Promise((resolve) => {
      resolve({ name: 'marysela' });
    }),
  loginUser: () =>
    new Promise((resolve) => {
      resolve({ name: 'marysela' });
    }),
}));

describe('view login', () => {
  it('renderiza login', () => {
    const container = login();
    expect(container).not.toBeUndefined();
  });

  it('renderiza a login y da click a resetPassword', () => {
    // Para mandar a llamar a login, hicimos un mock de la funcion navigateTo
    // Esto lo hacemos con jest.fn
    const navigateTo = jest.fn();
    const container = login(navigateTo);
    // Referenciamos una nueva variable button con getByText, usando testing-library
    // La funcion getByText recibe un contenedor que es todo nuestro signUp del DOM
    // y un texto por el cual buscar, buscamos el button llamado Volver
    const button = getByText(container, 'Forgot my password');
    // Utilizamos fireEvent para lanzar un evento de tipo click, aplicamos este evento al button
    fireEvent(button, new MouseEvent('click', {}));
    expect(container).not.toBeUndefined();
  });
  it('renderiza a login y da click a signup', () => {
    // Para mandar a llamar a login, hicimos un mock de la funcion navigateTo
    // Esto lo hacemos con jest.fn
    const navigateTo = jest.fn();
    const container = login(navigateTo);
    // Referenciamos una nueva variable button con getByText, usando testing-library
    // La funcion getByText recibe un contenedor que es todo nuestro signUp del DOM
    // y un texto por el cual buscar, buscamos el button llamado Volver
    const button = getByText(container, "Don't you have an account? Sign up!");
    // Utilizamos fireEvent para lanzar un evento de tipo click, aplicamos este evento al button
    fireEvent(button, new MouseEvent('click', {}));
    expect(container).not.toBeUndefined();
  });
  it('renderiza a login y da click a continua con google', () => {
    // Para mandar a llamar a login, hicimos un mock de la funcion navigateTo
    // Esto lo hacemos con jest.fn
    const navigateTo = jest.fn();
    const container = login(navigateTo);
    // Referenciamos una nueva variable button con getByText, usando testing-library
    // La funcion getByText recibe un contenedor que es todo nuestro signUp del DOM
    // y un texto por el cual buscar, buscamos el button llamado Volver
    const button = getByText(container, 'Continue with Google');
    // Utilizamos fireEvent para lanzar un evento de tipo click, aplicamos este evento al button
    fireEvent(button, new MouseEvent('click', {}));
    expect(container).not.toBeUndefined();
  });
  it('renderiza login  e inicia sesion de forma correcta', () => {
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
