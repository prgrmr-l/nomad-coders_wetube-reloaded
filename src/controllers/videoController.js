export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      commnets: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      commnets: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 5,
      commnets: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  const { id } = req.params; // const id = req.params.id와 같은 의미
  const video = video[id - 1];
  console.log("Show vide".id);
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
