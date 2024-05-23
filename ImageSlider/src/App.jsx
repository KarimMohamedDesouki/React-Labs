import ImageSlider from '../src/Components/ImageSliders';

const App = () => {
  const images = [
    'https://img.freepik.com/free-vector/hand-drawn-psychedelic-colorful-background_23-2149075812.jpg?w=996&t=st=1716492209~exp=1716492809~hmac=f8cd60ce957dc9cba6ee91639221e164caa15303c82c95779347e2d0fc490c36',
    'https://img.freepik.com/free-vector/gradient-shopping-center-twitch-background_23-2149309976.jpg?w=996&t=st=1716492270~exp=1716492870~hmac=1ac84d4be03b257ff79c86205f0e069b1ce0938e6c7f94fcf8506fdd57caa633',
    'https://img.freepik.com/free-vector/flat-design-optical-illusion-background_23-2150817058.jpg?w=996&t=st=1716492301~exp=1716492901~hmac=cea2f3fbf93e105af9222c8bae84fc268617a683f2c245dc8a414a3de061ea12'
  ];

  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
};

export default App;