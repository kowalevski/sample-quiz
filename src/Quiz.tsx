import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavLink from "./NavLink";
import { fetchCategoriesData } from "./actions/quiz";
import { CategoryStore, RootStore } from "./types";
import { getCategories } from "./reducers/categories";

type StateProps = {
  categories: CategoryStore;
};

type DispatchProps = {
  fetchCategoriesData(count: number): void;
};

type Props = DispatchProps & StateProps;

const Quiz: React.FC<Props> = ({ fetchCategoriesData, categories }) => {
  useEffect(() => {
    fetchCategoriesData(10);
  }, []);

  return (
    <div>
      <h1>Quiz</h1>

      {categories.map(category => (
        <NavLink
          to={`/quiz/category/${category.id}`}
          label={category.title}
          background="brand"
        />
      ))}

      <NavLink to="/" label="🏠 Home" />
    </div>
  );
};

export default connect(
  (state: RootStore) => ({
    categories: getCategories(state)
  }),
  {
    fetchCategoriesData
  }
)(Quiz);
