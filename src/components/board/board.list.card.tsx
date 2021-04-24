import React from "react";
export interface IBoardListCard extends React.HTMLAttributes<HTMLDivElement> {}
export const BoardListCard: React.FC<IBoardListCard> = ({ children }) => {
  return <div className="board--list--card">{children}</div>;
};
