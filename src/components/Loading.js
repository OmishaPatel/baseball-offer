import "../App.css";

export const Loading = () => {
  return (
    <div className="loadingWrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
