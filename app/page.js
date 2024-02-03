import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Next"
    },

  ],

  image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hhyrvv9a--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eefd4ew38ryyrfk6m5nk.png',

  //which api to call when we click next button
  post_url: 'your_url_here',
});

export const metadata = {
  title: 'Meme Frame',
  description: 'Meme Page',
  openGraph: { 
    title: 'Meme Frame',
    description: 'Meme frame',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS6SjoPnTbLb-OW7s4AV8EcwQEoDILQIeDQ&usqp=CAU'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Meme Page</h1>
    </>
  );
}