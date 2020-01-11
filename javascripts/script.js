window.onscroll = () => {
    const nav = document.querySelector('#header');
    if(this.scrollY <= 50) nav.className = 'unscrolled'; else nav.className = 'scrolled';
  };