const Table = () => {
  const irsData = [
    { id: 1, Type: "IRS 10", WLL: "1000 kg", "0,8": "800 kg" },
    { id: 2, Type: "IRS 20", WLL: "2000 kg", "0,8": "1600 kg" },
    { id: 3, Type: "IRS 30", WLL: "3000 kg", "0,8": "2400 kg" },
    { id: 4, Type: "IRS 40", WLL: "4000 kg", "0,8": "3200 kg" },
  ];
  const kkey = Object.keys(irsData[0]);
  const dataLength = irsData.length;
  const kkeyLength = kkey.length;
  console.log(dataLength, kkeyLength);

  return (
    <section className="section">
      <table className="table">
        <thead>
          <tr>
            {kkey.map((item) => {
              return <th key={item}>{item}</th>;
            })}
          </tr>
        </thead>

        <tfoot>
          <tr>
            <th>{kkey[0]}</th>
            <th>{kkey[1]}</th>
          </tr>
        </tfoot>

        {/* <tbody>
          {irsData.map((item) => {
            return (
              <tr key={item[kkey[0]]}>
                {kkey.map((keys, index) => {
                  return <td key={item[keys[index]]}>{item[keys[index]]}</td>;
                })}
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </section>
  );
};

export default Table;
