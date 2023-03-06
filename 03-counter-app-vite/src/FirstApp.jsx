import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle,name }) => {
  return (
    <>
      <div data-testid = "test-title">{title}</div>
      <h2>{subTitle}</h2>
      <h2>{subTitle}</h2>

      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = { 
  title: "No hay Titulos",
  subTitle: "No hay Subtitulos",
 // name: 'no hay nombre'
};
