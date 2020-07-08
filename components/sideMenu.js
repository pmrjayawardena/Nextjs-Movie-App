import React from "react";
import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions/index";
const SideMenu = (props) => {
  const { categories } = props;

  const router = useRouter();
  let modal = null;
  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal();
      router.push("/");
    });
  };
  return (
    <div>
      <Modal ref={(element) => (modal = element)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((category) => {
          return (
            <a
              onClick={() => props.changeCategory(category.name)}
              className={`list-group-item ${
                props.activeCategory === category.name ? "active" : ""
              }`}
              key={category.id}
            >
              {category.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
