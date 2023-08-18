export const setUpPosts = (data) => {
  if (data.length) {
    const section = document.createElement('section');
    const ul = document.createElement('ul');
    data.forEach((doc) => {
      const post = doc.data();
      console.log(post);
      const li = document.createElement('li');
      const h5 = document.createElement('h5');
      const p = document.createElement('p');

      p.textContent = post;

      li.append(h5, p);
      ul.append(li);
    });
    console.log('loop posts');
    section.append(ul);
  } else {
    const h3 = document.createElement('h3');
    h3.textContent = 'There are not post to show';
    // ul.append(h3);
    // section.append(ul);
  }
};
