import { fireEvent, getByText } from '@testing-library/dom';
import home from '../../src/views/home';

describe('view home', () => {
  it('renderiza home', () => {
    const container = home();
    expect(container).not.toBeUndefined();
  });
  // Utilizamos testing librery para testear los eventos del DOM
  it('renderiza a home y da click a login', () => {
    // Para mandar a llamar a home, hicimos un mock de la funcion navigateTo
    // Esto lo hacemos con jest.fn
    const navigateTo = jest.fn();
    const container = home(navigateTo);
    // Referenciamos una nueva variable button con getByText, usando testing-library
    // La funcion getByText recibe un contenedor que es todo nuestro home del DOM
    // y un texto por el cual buscar, buscamos el button llamado SKIP
    const button = getByText(container, 'SKIP');
    // Utilizamos fireEvent para lanzar un evento de tipo click, aplicamos este evento al button
    fireEvent(button, new MouseEvent('click', {}));
    expect(container).not.toBeUndefined();
  });
});
