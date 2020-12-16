export const getGif = async (category) => {
  const API_KEY = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=DmOUJlma7cswNjp6tTTZoKhbD03MVGKd`;

  const res = await fetch(API_KEY);
  const { data } = await res.json();

  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url,
    };
  });

  return gifs;
};
