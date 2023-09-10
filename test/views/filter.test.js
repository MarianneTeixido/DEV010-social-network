import filter from '../../src/views/filter';

describe('filter', () => {
  it('renderiza a filter con la ruta recipes ', () => {
    const user = {
      displayName: 'maricela fuentes',
      email: 'maricelafuentes100@gmail.com',
      uid: 'GDuTccfHlHRvDffZM1Ctd1t0wtE2',
    };
    const route = '/recipes';
    const container = filter(user, route);
    expect(container).not.toBeUndefined();
  });

  it('renderiza a filter con la ruta workout ', () => {
    const user = {
      displayName: 'maricela fuentes',
      email: 'maricelafuentes100@gmail.com',
      uid: 'GDuTccfHlHRvDffZM1Ctd1t0wtE2',
    };
    const route = '/workout';
    const container = filter(user, route);
    expect(container).not.toBeUndefined();
  });
  it('renderiza a filter con la ruta profile ', () => {
    const user = {
      displayName: 'maricela fuentes',
      email: 'maricelafuentes100@gmail.com',
      uid: 'GDuTccfHlHRvDffZM1Ctd1t0wtE2',
    };
    const route = '/profile';
    const container = filter(user, route);
    expect(container).not.toBeUndefined();
  });
});
