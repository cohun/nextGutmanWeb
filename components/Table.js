import Image from "next/image";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import ReactMarkdown from "react-markdown";

const Table = ({ type }) => {
  const [number, setNumber] = useState(0);

  if (type.length === 0) {
    return <div>No Data</div>;
  }

  const typeData = type[number].fields.table;
  const image = type[number].fields.productImage
    ? type[number].fields.productImage.fields.file
    : "";
  const description = type[number].fields.description;
  const tableInfo = type[number].fields.tableInfo;

  const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const web = node.data.target.fields.file.url;
        const res = web.substr(web.length - 3);
        if (res === "pdf") {
          return (
            <div>
              <iframe
                id="ytplayer"
                src={`https:${node.data.target.fields.file.url}`}
                type="text/html"
                width="100%"
                height="1050"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ; fullscreen"
              ></iframe>
            </div>
          );
          // return `https:${node.data.target.fields.file.url}`;
        } else {
          return image !== "" ? (
            <Image
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt="Some Image"
              priority={true}
            />
          ) : (
            <span></span>
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.fields.length !== 0) {
          const desc1 = node.data.target.fields.description;
          const tableInfo1 = node.data.target.fields.tableInfo;
          const name1 = node.data.target.fields.name;
          const image1 = node.data.target.fields.media
            ? node.data.target.fields.media.fields.file
            : "";
          const typeData1 = node.data.target.fields.table;
          const tableHead2h = node.data.target.fields.table
            ? Object.keys(typeData1[0])
            : "";
          const tableHead2 = node.data.target.fields.table
            ? Object.values(typeData1[0])
            : "";

          return (
            <div className="container">
              <hr />
              <h2 className="is-size-2">{name1}</h2>
              <section className="mt-4">
                <ReactMarkdown
                  components={{
                    h3: ({ node, children }) => {
                      return <h3 className="is-size-4">{children}</h3>;
                    },
                    h2: ({ node, children }) => {
                      return <h2 className="is-size-3">{children}</h2>;
                    },
                    h1: ({ node, children }) => {
                      return <h1 className="is-size-2">{children}</h1>;
                    },
                  }}
                >
                  {tableInfo1}
                </ReactMarkdown>
              </section>

              {node.data.target.fields.table ? (
                <table className="table  is-fullwidth mt-6">
                  <thead>
                    <tr>
                      {tableHead2.map((key, i) => {
                        return <th key={key}>{key}</th>;
                      })}
                    </tr>
                  </thead>

                  <tfoot>
                    <tr>
                      {tableHead2.map((key) => {
                        return <th key={key}>{key}</th>;
                      })}
                    </tr>
                  </tfoot>

                  <tbody>
                    {typeData1.map((item, index) => {
                      if (index !== 0) {
                        return (
                          <tr key={item[tableHead2h[0]]}>
                            {tableHead2h.map((key) => {
                              return <td key={key}>{item[key]}</td>;
                            })}
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              ) : (
                <span></span>
              )}

              {image1 !== "" ? (
                <Image
                  src={"https:" + image1.url}
                  width={image1.details.image.width}
                  height={image1.details.image.height}
                  alt="ETAR"
                />
              ) : (
                <span></span>
              )}

              <br />
              {documentToReactComponents(desc1, renderOption)}
            </div>
          );
        }
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <iframe
              id="ytplayer"
              src={node.data.uri}
              type="text/html"
              width="640"
              height="360"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ; fullscreen"
            ></iframe>
          );
        } else if (node.data.uri.includes("youtube.com/embed")) {
          return (
            <figure className="image is-16by9">
              <iframe
                className="has-ratio"
                width="320"
                height="180"
                title="Unique Title 002"
                src={node.data.uri}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </figure>
          );
        }
      },

      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="is-size-1 mb-3">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h1 className="is-size-2 mb-3">{children}</h1>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h1 className="is-size-3 mb-3">{children}</h1>;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <h1 className="is-size-4">{children}</h1>;
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        return <h1 className="is-size-5">{children}</h1>;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        return <h1 className="is-size-6">{children}</h1>;
      },
      [BLOCKS.br]: (node, children) => {
        return <h1 className="is-size-2 mb-3">{children}</h1>;
      },
    },
  };

  const tableHead = Object.keys(typeData[0]);
  const tableHead1 = Object.values(typeData[0]);

  const handleClick = (e) => {
    setNumber(e);
  };

  return (
    <section className="container px-4 my-5">
      <div className="tile is-ancestor my-4">
        <div className="tile is-4"></div>
        <div className="tile is-2">
          <h4 className="title is-size-3">Product type:</h4>
        </div>
        <div className="tile">
          <div className="container">
            {type.map((i, index) => {
              let focus = "";
              if (index === number) {
                focus = "is-focused";
              }
              return (
                <button
                  key={i.sys.id}
                  onClick={(e) => handleClick(index)}
                  className={`button mr-4 mb-1 mt-2 is-outlined is-small is-responsive is-info + ${focus}`}
                >
                  {type[index].fields.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="mt-4">
        <ReactMarkdown
          components={{
            h3: ({ node, children }) => {
              return <h3 className="is-size-4">{children}</h3>;
            },
            h2: ({ node, children }) => {
              return <h2 className="is-size-3">{children}</h2>;
            },
            h1: ({ node, children }) => {
              return <h1 className="is-size-2">{children}</h1>;
            },
          }}
        >
          {tableInfo}
        </ReactMarkdown>
      </section>

      <table className="table  is-fullwidth mt-4">
        <thead>
          <tr>
            {tableHead1.map((key, i) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>

        <tfoot>
          <tr>
            {tableHead1.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </tfoot>

        <tbody>
          {typeData.map((item, index) => {
            if (index !== 0) {
              return (
                <tr key={item[tableHead[0]]}>
                  {tableHead.map((key) => {
                    return <td key={key}>{item[key]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <section className="section mb-6">
        {image !== "" ? (
          <Image
            src={"https:" + image.url}
            width={image.details.image.width}
            height={image.details.image.height}
            alt="ETAR"
          />
        ) : (
          <span></span>
        )}

        <br />
        <section className="my-6">
          {documentToReactComponents(description, renderOption)}
        </section>
      </section>
    </section>
  );
};

export default Table;
