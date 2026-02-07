type Props = {
  params: Promise<{ id: string }>;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

const getUserPosts = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  return res.json();
};

const getUserAlbums = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );
  return res.json();
};

const page = async ({ params }: Props) => {
  const { id } = await params;

  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Posts</h2>
          {posts.map((post: Post) => (
            <div key={post.id} className="border p-2 mb-2 rounded">
              {post.title}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Albums</h2>
          {albums.map((album: Album) => (
            <div key={album.id} className="border p-2 mb-2 rounded">
              {album.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
