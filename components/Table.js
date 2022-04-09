import Image from 'next/image';
import { useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Table = ({ type }) => {
  const [number, setNumber] = useState(0);
  console.log(number);

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
      <h3 className="title has-text-centered is-size-3">Product type:</h3>
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
      <section className="section">
        <img
          src={'https:' + image.url}
          width={image.details.image.width}
          height={image.details.image.height}
        />
        <br />
        <div>{documentToReactComponents(description)}</div>
      </section>
    </section>
  );
};

export default Table;
