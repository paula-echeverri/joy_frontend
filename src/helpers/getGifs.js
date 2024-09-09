export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=pDbe98unNhbtcnfymALov2ljqZoF2Ztf&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(resp);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
