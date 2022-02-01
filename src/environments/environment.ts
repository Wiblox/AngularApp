export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      musiqueAleatoire: '/musics/random',
      toutesLesMusiques: '/musics',
      uneMusique: '/musics/:id',
      filterByTitle: '/musics/title/:title'
    }
  }
};
