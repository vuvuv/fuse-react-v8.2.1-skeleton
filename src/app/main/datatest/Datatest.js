import { useEffect, useState } from 'react';
import axios from 'axios';

function DatatestPage(props) {
  const [pingData, setPingData] = useState({});

  const updatePingData = async () => {
    const response = await axios.get('/api/ping');
    const data = await response.data;
    console.log("DATA", data);
    setPingData(data);
  };

  useEffect(() => {
    updatePingData()
  }, []);

  return (
    <div>
      <h1 className="py-16 font-semibold">DATA TEST</h1>
      <p>
        {pingData.totalProduceIncome}
        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in
        his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a
        little he could see his brown belly, slightly domed and divided by arches into stiff
        sections.
      </p>
    </div>
  );
}

export default DatatestPage;
