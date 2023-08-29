export const setUpPosts = (data) => {
  const section = document.createElement('section');
  if (data.length) {
    const ul = document.createElement('ul');
    data.forEach((doc) => {
      const post = doc.data();
      console.log(post);
      const li = document.createElement('li');
      const h4 = document.createElement('h4');
      const p = document.createElement('p');

<<<<<<< HEAD
      h4.textContent = post.Type;
=======
      h4.textContent = post.Title;
>>>>>>> 1ddd7032bbed3fc4ee8f868660415414d520f078
      p.textContent = post.Content;

      li.append(h4, p);
      ul.append(li);
    });
    console.log('loop posts');
    section.append(ul);
  } else {
    const h3 = document.createElement('h3');
    h3.textContent = 'There are not post to show';
    section.append(h3);
<<<<<<< HEAD
=======
    // ul.append(h3);
    // section.append(ul);
>>>>>>> 1ddd7032bbed3fc4ee8f868660415414d520f078
  }
  return section;
};
