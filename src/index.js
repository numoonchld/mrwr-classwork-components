import { StrictMode } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const comments = [
    {
      author: `Sam`,
      timestamp: new Date(faker.time.recent()).toString(),
      text: faker.lorem.lines(),
      imgUrl: faker.image.avatar()
    },
    {
      author: `Jaden`,
      timestamp: new Date(faker.time.recent()).toString(),
      text: faker.lorem.lines(),
      imgUrl: faker.image.avatar()
    },
    {
      author: `Norm`,
      timestamp: new Date(faker.time.recent()).toString(),
      text: faker.lorem.lines(),
      imgUrl: faker.image.avatar()
    }
  ];

  return (
    <>
      <div className="ui container comments">
        {comments.map(({ author, timestamp, text, imgUrl }) => (
          <ApprovalCard key={author}>
            <CommentDetail
              author={author}
              timestamp={timestamp}
              text={text}
              imgUrl={imgUrl}
            />
          </ApprovalCard>
        ))}
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
