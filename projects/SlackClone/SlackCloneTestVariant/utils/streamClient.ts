export const connectUser = async (client, user) => {
  await client.disconnectUser();
  await client.connectUser(
    {
      id: user.id,
      name: user.name,
      image: user.image,
    },
    user.token
  );
};