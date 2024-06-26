import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ isLoading }) => {
  return (
    <ClipLoader
      color="#36d7b7"
      loading={isLoading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
