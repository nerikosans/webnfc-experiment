import * as React from 'react';

interface MainProps {}
const Main: React.FC<MainProps> = () => {
  const [data, setData] = React.useState<string>('');

  React.useEffect(() => {
    // @ts-ignore
    const reader = new NDEFReader();
    reader
      .scan()
      .then(() => {
        setData('Scan started successfully.');
        reader.onerror = () => {
          setData('Cannot read data from the NFC tag. Try another one?');
        };
        reader.onreading = (event: any) => {
          setData('NDEF message read.');
        };
      })
      .catch((error: any) => {
        setData(`Error! Scan failed to start: ${error}.`);
      });
  }, []);

  return (
    <div>
      Main
      <p>data: {data}</p>
    </div>
  );
};

export default Main;
