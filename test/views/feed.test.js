import feed from '../../src/views/feed';

// Mock firebase/firestore
jest.mock('firebase/firestore', () => ({
  collection: jest.fn().mockResolvedValue({}),
  orderBy: jest.fn().mockResolvedValue(true),
  query: jest.fn().mockResolvedValue(true),
  getFirestore: jest.fn().mockResolvedValue(true),
  onSnapshot: jest.fn().mockResolvedValue(true),
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
    expect(container).not.toBeUndefined();
  });
});
