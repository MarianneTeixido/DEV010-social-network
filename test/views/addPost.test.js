import addPost from '../../src/views/addPost';

describe('view addPost', () => {
  it('renderiza addPost', () => {
    const container = addPost();
    expect(container).not.toBeUndefined();
  });
//   it('renderiza addPost y llena los datos a publicar', () => {
//     const container = addPost();
//     expect(container).not.toBeUndefined();
//   });
});
