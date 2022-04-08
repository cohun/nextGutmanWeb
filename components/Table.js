const Table = ({ irs }) => {
  console.log(irs);
  const irsData = irs[0].fields.table;

  /* const irsData = [
    {
      id: 1,
      Type: "IRS 10",
      WLL: "1000 kg",
      "0,8": "800 kg",
      color: "lila",
      length: "1 m",
    },
    {
      id: 2,
      Type: "IRS 20",
      WLL: "2000 kg",
      "0,8": "1600 kg",
      color: "green",
      length: "1 m",
    },
    {
      id: 3,
      Type: "IRS 30",
      WLL: "3000 kg",
      "0,8": "2400 kg",
      color: "yellow",
      length: "1 m",
    },
    {
      id: 4,
      Type: "IRS 40",
      WLL: "4000 kg",
      "0,8": "3200 kg",
      color: "grey",
      length: "1 m",
    },
  ]; */
  const tableHead = Object.keys(irsData[0]);

  return (
    <section className="section">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            {tableHead.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>

        <tfoot>
          <tr>
            {tableHead.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </tfoot>

        <tbody>
          {irsData.map((item) => {
            return (
              <tr key={item[tableHead[0]]}>
                {tableHead.map((key) => {
                  return <td key={key}>{item[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
