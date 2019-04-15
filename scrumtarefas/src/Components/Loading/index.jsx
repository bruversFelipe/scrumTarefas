import React from "react";
import LoadingWrapper from "./style";

const Loading = ({ loading }) => (
  <LoadingWrapper>{loading && <div className="loader" />}</LoadingWrapper>
);

export default Loading;
