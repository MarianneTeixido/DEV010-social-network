import feed from '../../src/views/feed';

// Crea un objeto querySnapshot mock
const querySnapshot = {
  forEach: jest.fn(),
};

// Realiza las pruebas y verifica el comportamiento de forEach

jest.mock('firebase/firestore', () => ({
  collection: jest.fn().mockResolvedValue({}),
  orderBy: jest.fn().mockResolvedValue(true),
  query: jest.fn().mockResolvedValue(true),
  getFirestore: jest.fn().mockResolvedValue(true),
  onSnapshot: jest.fn((authMock, onChangeCallback) => {
    onChangeCallback(
      jest.fn().mockResolvedValue({
        querySnapshot: {
          forEach: jest.fn(),
        },
      }),
    );
  }),
}));

/*
Realizamos el mock de la funcion alert
 */
global.alert = jest.fn();
global.console = { log: jest.fn() };

describe('Feed', () => {
  it('Renderiza feed', () => {
    const navigateTo = jest.fn();
    const container = feed(navigateTo);
    // Obtiene un objeto querySnapshot mockeado
    querySnapshot.forEach.mockImplementation((callback) => {
      // Simula el comportamiento de forEach
      callback(/* parámetros que quieras pasar */);
    });

    expect(container).not.toBeUndefined();
  });
});
