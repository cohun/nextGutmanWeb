import Image from 'next/image';
import { useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Table = ({ type }) => {
  const [number, setNumber] = useState(0);

  if (type.length === 0) {
    return <div>No Data</div>;
  }
  console.log(type);
  console.log(type[0].fields.name);
  const typeData = type[number].fields.table;
  const image = type[number].fields.productImage.fields.file;
  const description = type[number].fields.description;
  console.log('https:' + image);

  const tableHead = Object.keys(typeData[0]);
  const handleClick = (e) => setNumber(e);

  return (
    <section className="section">
      <div className="tile is-ancestor mb-5">
        <div className="tile is-4"></div>
        <div className="tile is-2">
          <h4 className="title is-size-3">Product type:</h4>
        </div>
        <div className="tile">
          <div className="container">
            {type.map((i, index) => {
              return (
                <button
                  key={i.sys.id}
                  onClick={(e) => handleClick(index)}
                  className="button mr-4"
                >
                  {type[index].fields.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <table className="table is-striped is-fullwidth mt-6">
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
          {typeData.map((item) => {
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
      <section className="section mb-6">
        <Image
          src={'https:' + image.url}
          width={image.details.image.width}
          height={image.details.image.height}
          alt="ETAR"
        />

        <br />
        <section className="my-6">
          {documentToReactComponents(description)}
        </section>
      </section>
    </section>
  );
};

export default Table;
